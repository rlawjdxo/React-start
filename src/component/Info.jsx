import React, {useEffect, useState} from 'react'

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    };

    //useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행
    useEffect(()=> {
    console.log('렌더링이 완료되었습니다!'); console.log({ name, nickname }); });

  return (
    <div>
        <div>
            <input value={ name } onChange={ onChangeName }/>
            <input value={ nickname } onChange={ onChangeNickname }/>
        </div>
        <div>
            <h1>이름:{ name }</h1>
            <h1>닉네임:{ nickname }</h1>
        </div>
    </div>
  );
};

export default Info