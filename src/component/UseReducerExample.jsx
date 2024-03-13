import React, { useState, useReducer } from 'react'
import Student from './Student'
import { act } from 'react-dom/test-utils';
// useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것이다.
// useReducer를 이용한 예제(1)
// const reducer = (state, action) => {
//     switch(action.type){
//         case 'INCREMENT':
//             return { value: state.value + 1}
//         case 'DECREMENT':
//             return { value: state.value - 1}
//         default:
//             return false; //아무것도 해당하지 않는 기본상태
//     }
// }

// const UseReducerExample = () => {
//     const [state, dispatch] = useReducer(reducer, { value: 0});

//   return (
//     <div>
//         <p>
//             현재카운터 값 <b>{ state.value }</b>
//         </p>
//         <button onClick={ ()=>dispatch({ type: 'INCREMENT' }) }>+1</button>
//         <button onClick={ ()=>dispatch({ type: 'DECREMENT' }) }>-1</button>
//     </div>
//   )
// }


// useReducer를 이용한 예제(2)
// reducer: state를 업데이트 하는 역할 (은행)
// dispatch: state 업데이트 요구 (고객의 요구행위)
// action: 거래자의 요구 내용 (입금, 출금)
// state : 통장의 입출금 내역
// payload: 변경될 값 (입출금액)
// const ACTION_TYPES = {
//     deposit: 'deposit',
//     withdraw: 'withdraw'
// }

// const reducer = (state, action)=>{
//     console.log('reducer가 일을 합니다', state, action);

//     switch(action.type){
//         case ACTION_TYPES:deposit:
//             return state + action.payload;
//         case ACTION_TYPES:withdraw:
//             return state - action.payload;
//         default:
//             return state;
//     }
// }

// const UseReducerExample = () => {
//     const [number, setNumber] = useState(0);
//     const [money, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//         <h2>은행에 오신 걸 환영합니다.</h2>
//         <p>잔고: { money }원</p>
//         <input 
//             type="number"
//             value={ number }
//             step={ 3000 }
//             onChange={ (e)=> setNumber(parseInt(e.target.value)) }/>
//         <button onClick={ ()=>dispatch({ type: ACTION_TYPES.deposit, payload: number }) }>예금</button>
//         <button onClick={ ()=>dispatch({ type: ACTION_TYPES.withdraw, payload: number }) }>출금</button>
//     </div>
//   )
// }

// useReducer를 이용한 예제(3)
const reducer = (state, action) => {
    console.log('reducer실행....', state, action);
    switch(action.type){
        case 'add':
            const name = action.payload.name;
            const newStudent = { id:Date.now(), name: name, usHere: false};
            return {
                count: state.count + 1,
                Students: [...state.Student, newStudent]
            };
        case 'delete':
            return{
                count: state.count -1,
                Students: state.Students.filter((s)=>s.id !==action.payload.id)
            }
        case 'check':
            const newStudents = state.students.map((s)=>{
                if(s.id === action.payload.id){
                    return {...s, isHere: !s.isHere};
                } else{
                    return s;
                }
            });
            return {
                count: state.count,
                students: newStudents
            }
        default:
            return state;
    }
};

const initialState = {
    count: 1,
    Student: [
        {id: Date.now(), name: 'James', ishere:false},
    ]
};

const UseReducerExample = () => {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>출석부</h1>
            <p>총학생 수: { studentsInfo.count }</p>
            <input 
            type='text'
            placeholder='이름 입력'
            value={name}
            onChange={(e)=> setName(e.target.value)}/>
            <button onClick={ ()=>dispatch({ type: 'add' , payload: { name } }) }>추가</button>
            <hr/>
            { studentsInfo.students.map((s)=>
            <Student key={ s.id } student={ s } dispatch={ dispatch }/>
            )}
        </div>
    )
}

export default UseReducerExample