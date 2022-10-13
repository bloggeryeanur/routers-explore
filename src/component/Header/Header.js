import React from 'react';
import './header.css'
import '../../App.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='App header'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contac'>Contac</Link>
            <Link to='/friends'>Friends</Link>
        </div>
    );
};

export default Header;