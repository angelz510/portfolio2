import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Header = () => {
  return (
    <div className='nav-menu'>
      <Link className='nav-link' to={'/'}>Home</Link>
      <Link className='nav-link' to={'/about'}>About</Link>
      <Link className='nav-link' to={'/projects'}>Projects</Link>
      {/* <a className='nav-link' href='/blog'>Blog</a> */}
      <Link className='nav-link' to={'/contact'}>Contact</Link>
    </div>
  );
};

export default Header;