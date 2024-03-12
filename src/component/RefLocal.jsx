import React, { useRef, useState } from 'react'


//로컬변수 사용(1)
// const RefLocal = () => {
//     const [count, setCount] = useState(0);
//     const countRef = useRef(0);

//     console.log(countRef);
//     console.log('렌더링...');

//     const onIncreaseState = () => {
//         setCount(count +1);
//     }

//     const onIncreaseRef = () => {
//         countRef.current = countRef.current + 1;
//         console.log('ref : ', countRef.current);
//     }
//   return (
//     <div>
//         <p>State: { count }</p>
//         <p>Ref: { countRef.current }</p>
//         <button onClick={ onIncreaseState }>State값 증가</button>
//         <button onClick={ onIncreaseRef }>Ref값 증가</button>
//     </div>
//   )
// }


//로컬변수 사용(2)

const RefLocal = () => {
    const [render, setRender] = useState(0); 
    const countRef = useRef(0); //컴포넌트 Mount부터 unMount될 때까지 값이 유지된다. 
    let countVar = 0; //렌더링될 때 마다 함수를 다시 실행 되서 값이 초

    const onRendering = () => {
        setRender(render + 1);
    }

    const onIncreaseRef = ()=> {
        countRef.current = countRef.current + 1; 
        console.log('ref: ', countRef.current); 
    }

    const onIncreaseVar = ()=> {
        countVar = countVar + 1; 
        console.log('var: ', countVar); 
    }
    const onPrintResults = ()=> {
        console.log(`ref: ${countRef.current}, var: ${countVar}`); 
    }

  return (
    <div>
        <p>Ref: { countRef.current }</p>
        <p>Var: { countVar }</p>
        <button onClick={ onRendering }>렌더링</button>
        <button onClick={ onIncreaseRef }>Ref 증가</button>
        <button onClick={ onIncreaseVar }>Var 증가</button>
        <button onClick={ onPrintResults }>Ref Var 값 출력</button>
    </div>
  )
}

export default RefLocal