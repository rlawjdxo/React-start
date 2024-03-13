import React, {useState, useMemo, useCallback} from 'react'
import MemoChild from './MemoChild'

const MemoExample = () => {
    const [parentAge, setParentAge] = useState(0);
    const incrementParentAge = () => {
        setParentAge(parentAge+1);
    };
    const name = useMemo(()=> {  //name 값을 메모리에 저장 후 저장 주소를 사용하므로 렌더링 될 때마다 같은 주소를 사용한다
        return {
            lastName:'홍',
            firstName:'길동'
        }
    }, []); 

    const telMe = useCallback(() => {
        console.log('공부해요!')        //컴포넌트가 렌더링 될 때마다 함수 주소가 달라지므로 props값도 변경된다
    }, []);
    

    console.log('부모 컴포넌트 렌더링');
  return (
    <div style={{ border: '2px solid navy', padding:' 10px' }}>
        <h1>부모</h1>
        <p>age: { parentAge }</p>
        <button onClick={ incrementParentAge }>부모 나이 증가</button>
        <MemoChild name={ name } telMe={ telMe }/>
    </div>
  )
}

export default MemoExample