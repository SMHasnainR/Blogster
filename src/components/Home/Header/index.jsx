import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header(props) {

  const [navClass, setNavClass] = useState('');

  const changeNav = () => {
    // set nav class to active when scrolled down
    // set nav class to inactive when scrolled up
    setNavClass(window.scrollY > 0  ? 'active' : '');
  }

  window.addEventListener('scroll', changeNav);

  return (

    <header className={'navbar '+ navClass + ' position-'+props.position } >
      <nav className='nav container'>
        <Link to='/#' className='logo'>
          <span>Blog</span>ster
        </Link>

        <Link to='/login' className='btn-primary'>
          Login
        </Link>
      </nav>
    </header>
  )
}

export default Header
