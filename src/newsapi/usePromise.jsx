import React, { useEffect, useState } from 'react'

export default function usePrimise(promiseCreator, deps){ //파라미터 deps배열은 usePromise 내부의 useEffect의 의존 배열로 설정한다. 
    //대기중, 완료, 실패에 대한 상태 관리
    const [loading, setLoading] = useState(false); 
    const [resolved, setResolved] = useState(null); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const process = async () => {
            setLoading(true); 
            try{
                const resolved = await promiseCreator(); 
                setResolved(resolved); 
            }catch(e){
                setError(e); 
            }
            setLoading(false); 
        }; 
        process(); // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, deps); 
    return[loading, resolved, error];
   }
