import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header(props) {

  const userStr = localStorage.getItem('user');
  const [navClass, setNavClass] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(userStr ? true : false);

  const changeNav = () => {
    // set nav class to active when scrolled down
    // set nav class to inactive when scrolled up
    setNavClass(window.scrollY > 0  ? 'active' : '');
  }

  window.addEventListener('scroll', changeNav);

  // handleLogout function 
  function handleLogout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (

    <header className={'navbar '+ navClass + ' position-'+props.position } >
      <nav className='nav container'>
        <Link to='/#' className='logo'>
          <span>Blog</span>ster
        </Link>

        { isLoggedIn ? 
          <Link to='#' onClick={handleLogout} className='btn-primary'>
            Logout
          </Link> :
          <Link to='/login' className='btn-primary'>
            Login
          </Link>
        }

      </nav>
    </header>
  )
}

export default Header
