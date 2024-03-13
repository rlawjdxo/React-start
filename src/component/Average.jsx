import React, { useState, useMemo, useEffect } from 'react'
import { useRef, useCallback } from 'react' //추가
// useCallback을 이용한 Average 함수 변경
// 렌더링해야 할 컴포넌트의 개수가  많아지면 이 부분을 최적화시킴
const getAverage = (numbers) => {
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    console.log('평균값');
    return sum/numbers.length;
}

const Average = () => {
    const [list, setList] = useState([10,20,30]);
    const [number, setNumber] = useState();
    const countRender = useRef(0); //추가

    const onInsert = useCallback(() => { //추가callback/////////////(3)
        setList(list.concat(parseInt(number)));
        setNumber('');
    }, [number, list]);//추가 number,list가 변경되면 함수 생성

useEffect(()=>{ /////////////////////////(4)
    countRender.current = countRender.current + 1;
    console.log('onlnsert함수 생성', countRender.current);
}, [onInsert]); //추가 onlnsert 변경되면 함수 생성    


//const avg = getAverage(list); //렌더링이 될때마다 새로 평균값을 구한다.
const avg = useMemo(()=>{
        return getAverage(list);
    }, [list]); //list값이 변경되지 않으면 저장된 평균값을 꺼내온다.

const onChange = useCallback((e)=>{ ///////(1)
    setNumber(e.target.value);
}, []); //처음 렌더링 함수 생성

useEffect(()=>{ ///////(2)
    countRender.current = countRender.current + 1;
    console.log('onChange함수 생성', countRender.current);
}, [onChange]); //onchange가 변경되면  렌더링

  return (
    <div>
        <input type="number" value={ number } onChange={ onChange }/>
        <button onClick={ onInsert }>등록</button>
        <ul>
    { list.map(( value, index ) => <li key={ index }>{ value }</li>) }
    </ul>
    <h2>평균값: { avg }</h2>
    </div>
  );
}

// usecallback의 첫번째 파라미터 생성후, 두번째 파라미터에 배열을 넣으면 된다. 이배열에 어떤값이 바뀌었을때 함수를 새로 생성해야함.
// onChange처럼 비어 있는 배열을 넣게되면 컴포넌트가 렌더링될때 만들엇던 함수를 계속해서 재사용하게 되면 onlnsert처럼 배열안에 number와 list를 넣게되면
// input내용이 바뀌거나 새로운 항목이 추가될때 새로 만들어진 함수를 사용하게 된다.

export default Average