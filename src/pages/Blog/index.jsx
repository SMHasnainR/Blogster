import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import Header from '../../components/Home/Header';
import Spinner from 'react-bootstrap/Spinner'
import { blogList } from '../../config/data';
import './style.css';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
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
    http.get('/api/posts/'+id).then((response) => {
      setLoading(false);
      setBlog(response?.data?.data);
    });

    // let blog = blogList.find(blog => blog.id === parseInt(id));

    // if(blog){
    //   setBlog(blog);
    // }

  }, [])
  console.log(blog);
  return (
    <div>

      {/*  Page Header */}
      <Header position='sticky' />

      <Link className='blog-goBack' to='/'> 
        <span>&#8592;</span> Go Back 
      </Link>
      
      { 
        !loading ? ( blog ? 
        <div className='blog-wrap'>
          <header>
            <Chip label={blog.category} color='primary' />

            <h1>{blog.title}</h1>
            
            <div className='d-flex mt-3'>
              {blog.authorName}
              <p className='blog-date'>{blog.createdAt} </p>
            </div>
            {/* <div className='blog-subCategory'>
              {
                blog.subCategory.map( (category, index) => {
                  <div>
                    <Chip key={index} label={category}></Chip>
                  </div>
                })
              }
            </div> */}

          </header>


          <img className='blog-img' src={blog.cover} alt="cover" />
          <p className='blog-desc'>{blog.description}</p>
        </div> : <EmptyList />) : 
        <div className='text-center py-5'>
            <Spinner animation="border" />
        </div>
       }
    </div>
  )
}

export default Blog
