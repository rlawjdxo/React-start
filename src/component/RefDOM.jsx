import React, { useEffect, useRef } from 'react'

const RefDOM = () => {
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    const onClickLogin = ()=> {
        alert(`환영합니다! ${ inputRef.current.value }`); 
        inputRef.current.focus(); 
    } 
  return (
    <div>
        <input 
            ref={ inputRef }
            type="text"
            placeholder='User Name'/>
        <input 
            type="passowrd"
             placeholder='Passowrd'/>
        <button onClick={ onClickLogin }>로그인</button>
    </div>
  )
}

export default RefDOM