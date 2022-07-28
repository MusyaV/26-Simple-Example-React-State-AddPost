import React from "react";
import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
    return (
        <div className="nav">
            <div><NavLink className='navlink' to="/home">Home</NavLink></div>
            <div><NavLink className='navlink' to="/about">About</NavLink></div>
            <div><NavLink className='navlink' to="/news">News</NavLink></div>
        </div>
    )
}

export default Nav;