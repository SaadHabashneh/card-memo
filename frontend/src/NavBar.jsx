import {useState} from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

const NavBar = () => {
  return (
    <div className='nav'>
        <Link to="/" className='navBtn'>Home</Link>
        <Link to="/register" className='navBtn'>Register</Link>
        <Link to="/login" className='navBtn'>Login</Link>
    </div>
  )
};

export default NavBar;