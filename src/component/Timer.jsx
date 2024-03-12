import React, { useEffect } from 'react'

const Timer = () => {
    useEffect(()=>{
        const Timer = setInterval(()=>{
            console.log('타이머 돌아가는중...')
        }, 1000);
        return ()=> {
            clearInterval(Timer);
            console.log('타이머가 종료');
        }
    },[])

    return (
        <div>
            <span>타이머 시작. 콘솔보이소</span>
        </div>
    )
}

export default Timer