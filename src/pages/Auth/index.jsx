import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './style.css';
import Header from '../../components/Home/Header';

const Auth = () => {
  const [loading, setLoading] = useState(false);

  let http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
  });

  useEffect(() => {
    setLoading(true);

    // Getting Posts data from API 
    // http.get('/api/posts/'+id).then((response) => {
    //   setLoading(false);
    //   setBlog(response?.data?.data);
    // });

  }, [])

  return (
    <div className='auth-wrapper'>
      <div className='left-side col-md-6'>
        <div className="logo">
          <Link to='/#' className='logo'>
            <span>Blog</span>ster
          </Link>
        </div>
      </div>
      <div className='right-side col-md-6'>
        <div className="phone">+92 3132898968</div>
        <div className='image'>
          <img src="/assets/images/Saly-10.png" alt="" />
        </div>
        <div className='auth-text'>
          Sign in to Blogster
        </div>
      </div>
    </div>
  )
}

export default Auth
