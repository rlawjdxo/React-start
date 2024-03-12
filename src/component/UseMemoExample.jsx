import React, { useState, useMemo} from 'react'

const hardCalculator = (number) => {
    let now = Date.now();
    let start = now;
    //2초간 반복
    while( now < start + 2000){
        now = Date.now();
    }
    console.log('어려운 계산기...');
    return number + 1000;
}
const easyCalculater = (number)=> {
    console.log('쉬운 계산기...')
    return number + 1;
   }

const UseMemoExample = ()=> {
    const [hardNumber, setHardNumber] = useState(0); 
    const [easyNumber, setEasyNumber] = useState(0);
 
    
    //렌더링 될 때마다 새로운 값을 구한다. //const easySum = easyCalculater(easyNumber); 
    const easySum = useMemo(()=> {
        return easyCalculater(easyNumber); 
    }, [easyNumber]); //easyNumber가 변경되지 않으면 저장된 계산값을 꺼내온다. 
    
    //const hardSum = hardCalculator(hardNumber); 
    //렌더링 될 때마다 새로운 값을 구한다. 
    
    const hardSum = useMemo(()=> {
        return hardCalculator(hardNumber); 
    }, [hardNumber]); //hardNumber가 변경되지 않으면 저장된 계산값을 꺼내온다
  
    return (
    <div>
        <h3>어려운 계산기</h3>
        <input 
            type="number"
            value = { hardNumber }
            onChange = { (e)=> setHardNumber(parseInt(e.target.value)) }/>
        <span> + 1000 = { hardSum } </span>
        <h3>쉬운 계산기</h3>
        <hr/>
        <input 
            type="number"
            value = { easyNumber }
            onChange = { (e)=> setEasyNumber(parseInt(e.target.value)) }/>
        <span> + 1 = { easySum } </span>
    </div>
  )
}

export default UseMemoExample