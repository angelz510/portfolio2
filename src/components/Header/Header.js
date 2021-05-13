import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <Link className='nav-link' to={'/'}>Home</Link>
        <Link className='nav-link' to={'/about'}>About</Link>
        <Link className='nav-link' to={'/projects'}>Projects</Link>
        <Link className='nav-link' to={'/blog'}>Blog</Link>
        <Link className='nav-link' to={'/contact'}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;