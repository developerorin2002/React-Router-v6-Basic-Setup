import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive})=> isActive?'active':undefined} to='/home'>Home</NavLink>
            <NavLink to='/product'>products</NavLink>
            <NavLink to ='/friend'>Friends</NavLink>
            <NavLink to ='/posts'>Posts</NavLink>
        </div>
    );
};

export default Header;