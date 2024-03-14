import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; //react-router-dom

// BrowserRouter라는 컴포넌트
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Router 라이브러리 설치 후
// cmd) yarn add react-router-dom

// 프로젝트에 라우터 적용
// 프로젝트에 리액트 라우터를 적용할 때는 src/index.js 파일에서 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사
// 용하여 감싸준다. 이 컴포넌트는 웹 애플리케이션에 HTML5의 History API를 사용하여 페이지를 '새로고침'하지 않고도 주소를 변경하고 현재 
// 주소에 관련된 정보를 props로 쉽게 조회하거나 사용할 수 있도록 해준다.