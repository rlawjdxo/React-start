import React, { memo } from 'react'

const MemoChild = ({ name, telMe }) => {
    console.log('자녀도 렌더링이 되었네요.'); 
    return (
        <div style={{ border: '2px solid aqua', padding: '10px', marginTop: '10px' }}>
        <h3>자녀</h3>
        <p>이름: { name }</p>
        <button onClick={ telMe }>길동아 뭐하니?</button>
    </div>
 );
};
export default memo(MemoChild); //memo함수는 자식 컴포넌트를 메모리에 저장해두고 props가 변경될 경우만 다시 렌더링 된다.