import React from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import HistoryExample from './HistoryExample';

const RouterExample = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/about?detail=true&query=노트북&page=1">소개</Link></li>
            <li><Link to="/info">Information</Link></li>
            <li><Link to="/profiles">프로파일목록</Link></li>
            <li><Link to="/history">History예제</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/" element={ <About/> }/>
            <Route path="/info" element={ <About/> }/>
            <Route path="/profiles/*" element={ <profiles/> }/>
            <Route path="/history" element={ <HistoryExample/> }/>
        </Routes>
    </div>
  )
}

export default RouterExample



