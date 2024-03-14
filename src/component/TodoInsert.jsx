import { useState, useCallback } from 'react';
import React, { MdAdd } from 'react-icons/md'

const TodoInsert = ({ onlnsert }) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((e)=>{
        setValue(e.target.value);  //리렌더링될때 마다 함수 새로 만들지말고 재사용
    }, []);

    const onSubmit = useCallback((e)=>{
        onlnsert(value);
        setValue(''); //value값 초기화
        e.preventDefault(); //submit 이벤트는 새로고침이 발생 방지
    }, [onlnsert, value]);

  return (
    <form className='TodoInsert' onSubmit={ onSubmit }>
        <input placeholder='할일 입력' value={ value } onChange={ onChange }/>
        <button type='submit'><MdAdd/></button>
    </form>
  )
}

export default TodoInsert;