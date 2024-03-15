import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import LifeCycleSample from './component/LifeCycleSample';
import UseMemoExample from './component/UseMemoExample';
import Average from './component/Average';
import UseCallbackExample from './component/UseCallbackExample';
import BoxSize from './component/BoxSize';
import UseReducerExample from './component/UseReducerExample';
import MemoExample from './component/MemoExample';
import Student from './component/Student';
import Info from './component/Info';
import Hello from './component/Hello';

//---------------------------------------------------------------------------------------------------
// 간단하게 todo 일정 만들기 (수정,삭제, 추가기능)
// import TodoTemplate from './component/TodoTemplate';
// import TodoInsert from './component/TodoInsert';
// import TodoList from './component/TodoList'
// import { useCallback, useState, useRef } from 'react'

// // 기본 App보는법
// const App = () => {
//   const [todos,setTodos] = useState([
//     {id: 1, text:'리엑트의 기초', checked:true},
//     {id: 2, text:'컴포넌트 스타일링', checked:true},
//     {id: 3, text:'일정 관리 앱', checked:false}
//   ]);

//   //수정 기능
//   const onToggle = useCallback(id=>{
//     setTodos(todos.map(todo=>todo.id === id ? { ...todo, checked: !todo.checked} : todo));
//   }, [todos]);


//   // 항목 삭제 기능
//   const onRemove = useCallback(id=>{
//     setTodos(todos.filter(todo=>todo.id !== id));
//   }, [todos]);


//   // 함목 추가 기능
//   // id 렌더링정보가 아니여서 useState가 아닌 useRef사용
//   const nextId = useRef(4);

//   const onlnsert = useCallback(text=>{
//     const todo = {
//       id: nextId.current,
//       text,
//       checked:false
//     };
//     setTodos(todos.concat(todo));
//     nextId.current +=1; //1 씩더하기
//   }, [todos]);

//   return (
//     <TodoTemplate> 
//       <TodoInsert onlnsert={ onlnsert }/>  
//       <TodoList todos={todos} onRemove={ onRemove } onToggle={ onToggle }/>
//     </TodoTemplate>
//   );
// };
//-------------------------------------------------------------------------------------------------------------------

//Route 컴포넌트로 특정 주소에 컴포넌트 연결
// import RouterExample from './component/RouterExample';

// function App() {
//   return (
//       <div className="App">
//         <RouterExample/>
//       </div>
//   );
//  }
//------------------------------------------------------------------------------------------------------------------------

// newapi만들기ㅎㅎ(실패)
// import axios from "axios";
// import React,{ useState, useCallback, Route } from 'react'
// import Categories from "./newsapi/Categories";
// import NewsList from "./newsapi/NewsList";
// import NewsPage from "./newsapi/NewsPage";

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), 
//   []); //렌더링할때 만들었던 함수 재사용

//   return (
//     <div>
//       <Categories category={category} onSelect={onSelect}/>
//       <NewsList category={category}/>
//       <Route path="/:category?" component={NewsPage}/>;
//     </div>
//   )
// }
//---------------------------------------------------------------------------------------------------------------------------
// Context API 연습 
// 먼저 ReactContext 없이 props만을 이용해서 전역 데이터를 여러 컴포넌트에 걸쳐서 접근할 수 있는지에 대해서 살펴보겠다. 아래 예제는 
// 사용자가 설정한 언어에 따라서 영어 또는 한국어로 텍스트를 표시해 주는 앱
// import React, { useState } from 'react';
// import Button from './component/Button';
// import Title from './component/Title';
// import Message from './component/Message';

// function App() {

//   const [lang, setLang] = useState('en')
//   const onToggleLang = () => {
//     const changLan = lang === 'en' ? 'kr' : 'en';
//     setLang(changLan);
//   };

//   return (
//     <div>
//       <Button lang={lang} onToggleLang={onToggleLang}/>
//       <Title lang={lang}/>
//       <Message lang={lang}/>
//     </div>
//   );
// }
//----------------------------------------------------------------------------------------------------------------------------
// React Context를 사용해서 개발하기 - 전역 데이터를 좀 더 단순하지만 체계적인 방식으로 접근

// Provider사용 - 감싸주면 모든 컴포넌트들은 ReactContext에 저장되어 있는 전역 데이터에 접근

// import { component } from "react";
// import Button from './component/Button';
// import Title from './component/Title';
// import Message from './component/Message';
// import LangContext from "./contexts/LangContext";


// class App extends component {

//   render() {
//     const { lang } = this.state;

//     return(
//       <LangContext.Provider value={lang}>
//         <Button lang={lang} onToggleLang = {this.onToggleLang }/>
//         <Title lang={lang}/>
//         <Message lang={lang}/>
//       </LangContext.Provider>
//     );
//   };
// }

//------------------------------------------------------------------------------------------------------------------------------
// Context API 사용법 익히기
// 동적context 사용해보기 
// import ColorBox from "./component/ColorBox";
// import { ColorProvider } from "./contexts/Color";
// import SelectColors from './component/SelectColors'; 

// const App = () => {
//   return (
//     <ColorProvider>
//       <SelectColors/>
//       <ColorBox/>
//     </ColorProvider>
//   );
// };
//------------------------------------------------------------------------------------------------------------------------------------
//Subscribers 컴포넌트 만들기

import './App.css'
import Subscribers from './component/Subscribers'
import Display from './component/Display'
import Views from './component/Views';
import Post from './component/Post';

const App=()=> {
  return (
    <div className="App">
      <Subscribers />
      <hr />
      <Display />
      <hr />
      <Views />
      <hr />
      <Post />
    </div>
  );
}



export default App;
