import React, { useState, useCallback } from 'react'
import Box from './Box'

//useCallback를 이용한 박스 사이즈변경 예제
const BoxSize = () => {
    const [size, setSize] = useState(100); 
    const [isDark, setIsDark] = useState(false);

    const boxStyle = useCallback(()=> {
    return { backgroundColor: 'pink', width: `${size}px`, height: `${size}px` }; 
    }, [size]);

  return (
    <div style={{background:isDark ? 'black':'white'}}>
    <input type="number" value={ size } step={ 100 } onChange={ (e)=> setSize(e.target.value) }/>
    <button onClick={()=>setIsDark(!isDark)}>배경색변경</button>
    <Box boxStyle={ boxStyle }/>
    </div>
  )
}

export default BoxSize