import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/product'>products</Link>
            <Link to ='/friend'>Friends</Link>
        </div>
    );
};

export default Header;