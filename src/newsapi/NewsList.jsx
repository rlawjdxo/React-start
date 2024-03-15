import React, { useEffect, useState } from 'react'
import "./NewsList.css";
import NewsItem from "./NewsItem";
import axios from 'axios';

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null); 
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        //async를 사용해 함수 따로 선언 
        const fetchData = async() => {
            setLoading(true);
            try {
                const url = 'https://newsapi.org/v2/top-headlines?country=kr'; 
                const query = category === 'all' ? '' : '&category='+ category; 
                const apiKey='&apiKey=0d2cfc3452514a4f93903b35e762e40d'; 
                const response = await axios.get(url + query + apiKey);
                setArticles(response.data.article);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]); //컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고 업데이트될 때는 실행하지 않으려면 두 번째 파라미터로 비어 있는 배열을 넣어 준다.

    //대기 중일 때
    if(loading) {
    return <div className="newsListBlock">불러오는중...</div>
    }
    //아직 articles 값이 설정되지 않았을 때
    if(!articles) {
    return null; 
    }
    //articles 값이 유효할 때
  return (
    <div className="newsListBlock">
        { articles.map(article => (
            <NewsItem key={article.url} article={article}/>
        )) }
    </div>
  )
}

export default NewsList