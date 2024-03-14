import React from 'react'
import { Route, Link, Routes, NavLink } from 'react-router-dom'
import Profile from './Profile'

const Profiles = () => {
  return (
    <div>
        <h1>프로파일목록</h1>
        <ul>
        <li><NavLink className={ ({ isActive })=>isActive && 'active' } to="/profiles/shim">심청이</NavLink></li>
        <li><NavLink className={ ({ isActive })=>isActive && 'active' } to="/profiles/hong">홍길동</NavLink></li>
        <li><NavLink className={ ({ isActive })=>isActive && 'active' } to="/profiles/lee">이순신</NavLink></li>
        </ul>
        <Routes>
            <Route path="/" element={ <div>사용자를 선택해주세요.</div>} />
            <Route path=":username" element={ <Profile/> }/>
        </Routes>
    </div>
  )
}

export default Profiles