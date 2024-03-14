import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const WithRouterExample = () => {
    const params = useParams(); 
    const location = useLocation(); 
    const navigator = useNavigate();

  return (
    <div>
        <h4>Location</h4>
        <textarea 
            rows={ 10 } readOnly={ true }
            value={ JSON.stringify(location, null, 2) }/>
         <h4>Parmas</h4>
        <textarea
            rows={ 10 } readOnly= { true }
            value={ JSON.stringify(params, null, 2) }/>
        <button onClick={ ()=>navigator('/') }>홈으로</button>
    </div>
  )
}

export default WithRouterExample