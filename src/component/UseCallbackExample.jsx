import React, { useEffect, useState, useRef, useCallback  } from 'react'
//useCallback함수 - 컴포넌트는 렌더링 될때 새로 만들어진 함수 사용. 따라서 useCallback은 첫번째 파라미터 생성하고 싶은 함수 넣고, 두번째 파라미터 배열을 넣는다
//배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 한다.!!!
const UseCallbackExample = () => {
    
    const [number, setNumber] = useState(0);
    const countRender = useRef(0)
    const[toggle, setToggle] = useState(true);

    const someFunction = useCallback(() => {
        console.log('함수 생성',{ number });
        return;
    }, [number]);
    
    useEffect(()=> {
        countRender.current = countRender.current + 1;
        console.log('함수가 새롭게 생성', countRender.current);
    }, [someFunction]); //number가 바뀌어도 생성가능

  return (
    <div>
        <input type="number" value={ number } onChange={ (e)=> setNumber(e.target.value) }/>
        <button onClick={ ()=> setToggle(!toggle) }>{ toggle.toString() }</button> 
        {/* toggle이 바뀌어도 함수가 생성되지 않는다. */} <div>
        <button onClick={ someFunction }>함수호출</button>
        </div>
    </div>
  )
}

export default UseCallbackExample;