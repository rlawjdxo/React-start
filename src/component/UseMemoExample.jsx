import React, { useState, useMemo} from 'react'


// useMeom를 이용한 에제1
// const hardCalculator = (number) => {
//     let now = Date.now();
//     let start = now;
//     //2초간 반복
//     while( now < start + 2000){
//         now = Date.now();
//     }
//     console.log('어려운 계산기...');
//     return number + 1000;
// }
// const easyCalculater = (number)=> {
//     console.log('쉬운 계산기...')
//     return number + 1;
//    }

// const UseMemoExample = ()=> {
//     const [hardNumber, setHardNumber] = useState(0); 
//     const [easyNumber, setEasyNumber] = useState(0);
 
    
//     //렌더링 될 때마다 새로운 값을 구한다. //const easySum = easyCalculater(easyNumber); 
//     const easySum = useMemo(()=> {
//         return easyCalculater(easyNumber); 
//     }, [easyNumber]); //easyNumber가 변경되지 않으면 저장된 계산값을 꺼내온다. 
    
//     //const hardSum = hardCalculator(hardNumber); 
//     //렌더링 될 때마다 새로운 값을 구한다. 
    
//     const hardSum = useMemo(()=> {
//         return hardCalculator(hardNumber); 
//     }, [hardNumber]); //hardNumber가 변경되지 않으면 저장된 계산값을 꺼내온다
  
//     return (
//     <div>
//         <h3>어려운 계산기</h3>
//         <input 
//             type="number"
//             value = { hardNumber }
//             onChange = { (e)=> setHardNumber(parseInt(e.target.value)) }/>
//         <span> + 1000 = { hardSum } </span>
//         <h3>쉬운 계산기</h3>
//         <hr/>
//         <input 
//             type="number"
//             value = { easyNumber }
//             onChange = { (e)=> setEasyNumber(parseInt(e.target.value)) }/>
//         <span> + 1 = { easySum } </span>
//     </div>
//   )
// }

//useMemo 예제2
const UseMemoExample = () => {
    const [ number, setNumber ] = useState(0);
    const [ isKorea, setIsKorea ] = useState(true);
    
    const location = (korea)=>{
        console.log('korea값',korea);
        return korea ? 'korea' : 'other';
    }

    //const country = location(isKorea); 렌더링될때 새로운 country값 구함
    const country = useMemo (()=>{
        return location(isKorea);
    }, [isKorea]); //isKorea값이 변하지 않으면 저장된 country값을 꺼내옴

  return (
    <div>
        <h2>하루에 몇 끼를 먹어요?</h2>
         <input type="number" value={ number } onChange = { (e)=> setNumber(e.target.value) }/>
        <h2>어느 나라에 있어요?</h2>
        <p>나라: { country }</p>
        <button onClick={ ()=> setIsKorea(!isKorea) }>비행기를 타자</button>
    </div>
  )
}


export default UseMemoExample