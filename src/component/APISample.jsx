import React, { useEffect, useState, useRef } from 'react'

// const APISample = () => {
//     const [ data, setData ] = useState(null);
//     const [ number, setNumber ] = useState(1);

//     const callAPI = () => {
//         fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
//         .then(res => res.json())
//         .then(json=> {
//          console.log(json); 
//          setData(json); 
//         });
//     }

//     useEffect(()=> {
//         callAPI(); }, [number]
//     );

//   return (
//     <div>
//         { data ? <h1>{ number }: { data.title }</h1> : '데이터를 불러오는 중입니다...' }
//         <button onClick={ ()=> setNumber(number + 1) }>데이터 불러오기</button>
//     </div>
//   )
// }



const APISample = () => {
  const [ todos, setTodos ] = useState(null);
  const [ page, setPage ] = useState(1);
  const lastRef = useRef(0);

  const callAPI = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=> res.json())
    .then(json=> {
    console.log(json); 
    let start = (page-1)*10 + 1; 
    let end = page * 10; 
    const newTodos = json.filter(todo=> todo.id >= start && todo.id <=end); 
    setTodos(newTodos); 
    lastRef.current = Math.ceil(json.length / 10); 
  });
}

useEffect(()=>{
  callAPI();
}, [page]);

return (
    <div>
    { todos ? todos.map(todo=>
        <h2 key={ todo.id }>{ todo.id } : { todo.title }</h2>) : '데이터를 불러오는 중입니다...' }
      <button disabled={page===1 && true }
        onClick={ ()=> setPage(page-1) }>이전</button>
      <span>{ page } / { lastRef.current }</span>
      <button disabled={page===lastRef.current && true }
        onClick={ ()=> setPage(page+1) }>다음</button>
    </div>
  )
}




export default APISample