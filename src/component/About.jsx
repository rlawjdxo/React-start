import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation(); 
    const pathname=location.pathname; 
    const search= new URLSearchParams(location.search); 
    const detail = search.get('detail'); 
    const query = search.get('query'); const page = search.get('page');

  return (
    <div>
        <h1>소개</h1>
        <p>프로젝트 라우터 기초 실습</p>
        { detail && <p>query값은 { query }이고 페이지는 { page }입니다.</p> }
    </div>
  )
}

export default About