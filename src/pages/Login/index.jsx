import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './style.css';
import Header from '../../components/Home/Header';

const Login = () => {
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
    <div>

      {/*  Page Header */}
      <Header position='sticky' />

      <Link className='blog-goBack' to='/'> 
        <span>&#8592;</span> Go Back 
      </Link>
      
    </div>
  )
}

export default Login
