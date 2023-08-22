import React from 'react'
// import Post from '../data/Post';
import { Link } from "react-router-dom";
import  { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate= useNavigate()
  const[cookies,setCookie, removeCookie]=useCookies(['name'])

const logout=()=>{
  alert('You want to logout.')
removeCookie('name');
// removeCookie('password');
navigate("/login")
}


  return (
    <div>
      <header className='header-class'>
      <Link className='myblog-class' href="/"> Myblog</Link>
        <nav className='nav-class'>
          {/* <span onClick={logout} className='fw-bold'>Logout</span> */}
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/newblog">New Blog</Link>
          {/* <Link to={"/delete"}>delete</Link> */}
          <button className='btn btn-dark  logout-btn' onClick={logout}>Logout</button>
        </nav>
      </header>
    
    </div>
  )
}

export default Header;
