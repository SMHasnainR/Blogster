import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Chip from '../../../common/Chip'
import './style.css'
// import {  } from 'react-router-dom';

function BlogItem({ 
    blog: {
        id,
        title, 
        author, 
        category,
        authorName,
        authorAvatar,
        authorUserName,
        description, 
        createdAt,
        cover 
    } }) 
{
    const navigate = useNavigate();
    return (
        <div className="blogItem-wrap">
            <div className='blogItem-head'>
                <img src={cover} alt="Image cover" className='blogItem-cover' />
                
                <div className='blogItem-body'>
                    <Chip label={category} color='secondary' />
                    
                    <h4> 
                        <Link className="blogItem-link" to={`/blog/${id}`}> {title} </Link>
                    </h4>
                    
                    {/* <p className="blogItem-desc">{description}</p> */}
                </div>
            </div>
            <footer>
                <div className="blogItem-author" onClick={() => navigate('/@'+authorUserName)} >
                    <img src={authorAvatar} alt="avatar" />
                    <p>{authorName}</p>
                </div>
                <p>{createdAt}</p>
                {/* <Link className="blogItem-link" to={`/blog/${id}`}> &#x2192; </Link> */}
            </footer>
        </div>
    )
}

export default BlogItem