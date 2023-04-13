import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../common/Chip'
import './style.css'

function BlogItem({ 
    blog: {
        id,
        title, 
        author, 
        category,
        authorName,
        authorAvatar,
        description, 
        createdAt,
        cover 
    } }) 
{
  return (
    <div className="blogItem-wrap">
        <div className='blogItem-head'>
            <img src={cover} alt="Image cover" className='blogItem-cover' />
            
            <div className='blogItem-body'>
                <Chip label={category} />
                
                <h4> 
                    <Link className="blogItem-link" to={`/blog/${id}`}> {title} </Link>
                </h4>
                
                {/* <p className="blogItem-desc">{description}</p> */}

            </div>
        </div>

        <footer>
            <div className="blogItem-author">
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