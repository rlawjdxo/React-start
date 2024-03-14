import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const HistoryExample = ({ history }) => {
    const goBack = () => {
        history.go(-1); //history.goBack()
    }

    const goHome = () => {
        history.push('/');
    }

    useEffect(()=>{
        const message = history.block((location, action)=> { //마운트 시 메시지 생성
            if(action==='POP') return window.confirm('Are you sure?'); 
        }); 
        return ()=> {
            if(message) message(); //언마운트 시 메시지가 있으면 메시지 출력
        }
    }, [history]);

  return (
    <div>
        <button onClick={ goBack }>뒤로가기</button>
        <button onClick={ goHome }>홈으로가기</button>
    </div>
  )
}

export default HistoryExample