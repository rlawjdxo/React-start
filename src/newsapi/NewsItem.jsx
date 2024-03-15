import React from 'react'
import "./NewsItem.css";

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
  return (
    <div className="newsItemBlock">
        <div className="thumbnail">
            <a href={url}>
            <img src={urlToImage} alt="thumbnail"/>
            </a>
        </div>
        <div className="contents">
            <a href={url}><h2>{title}</h2></a>
            <p>{description}</p>
        </div>
 </div>
  )
}

export default NewsItem