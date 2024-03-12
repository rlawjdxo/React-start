// import React from 'react'


// data배열을 컴포넌트 배열로 변환 : 자바스크립트 배열 객체의 내장 함수만 map함수 사용해 반복 렌더링(1)
// const IterationSample = () => {
//     const names = [ '눈사람', '얼음', '눈', '바람'];
//     const namesList = names.map(name=><li>{ name }</li>);
//     //console창에 'key' prop 없다는 경고 메세지 출력
//     //const namesList = names.map((name, index)=><li key ={index}>{name}</li>);
//   return (
//     <div><ol>{ namesList }</ol></div>
//   )
// }


// 배열 내장함수 concat를 사용해 항목 추가 setName를 통해 상태 업데이트
import React, { useState } from 'react'

const IterationSample = () => {
    const [names, setNames] = useState([
        { id:1, text: '눈사람'}, { id:2, text: '얼음'}, { id:3, text: '눈'}, { id:4, text: '바람'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 ID

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({ //push는 기존 배열 자체를 변경해 주는 반면 concat은 새로운 배열을 만들어 준다(불연성)
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const namesList=names.map(name=><li key={ name.id }>{ name.text }</li>);

  return (
    <div>
        <input value={ inputText } onChange={ onChange }/>
        <button onClick={ onClick }>추가</button>
        <ol>{ namesList }</ol>
    </div>
  )
}


export default IterationSample