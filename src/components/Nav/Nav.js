import React from 'react';
// import { Link } from 'react-router-dom';
import './Nav.scss';

const Header = () => {
  return (
    <div className='nav-menu'>
      <a className='nav-link' href='/'>Home</a>
      <a className='nav-link' href='/about'>About</a>
      <a className='nav-link' href='/projects'>Projects</a>
      <a className='nav-link' to={'/blog'}>Blog</a>
      <a className='nav-link' to={'/contact'}>Contact</a>
    </div>
  );
};

export default Header;