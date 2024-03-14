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
import RouterExample from './component/RouterExample';

function App() {
  return (
      <div className="App">
        <RouterExample/>
      </div>
  );
 }

export default App;
