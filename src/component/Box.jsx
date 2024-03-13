import React, { useEffect, useRef, useState } from 'react'
//useCallback를 이용한 박스 사이즈변경 예제
const Box = ({boxStyle}) => {
    const [style, setStyle] = useState();
    const countRender = useRef(0);

    useEffect(()=>{
        countRender.current = countRender.current + 1;
        console.log('박스사이즈 함수가 생성', countRender.current);
        setStyle(boxStyle);
    }, [boxStyle]);

  return (
    <div style={ style }>Box</div>
  )
}
export default Box