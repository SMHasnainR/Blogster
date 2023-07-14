import React, { useEffect, useState } from 'react'
import MainLayout from '../MainLayout'
import { Spinner } from 'react-bootstrap'
import BlogList from '../../components/Home/BlogList'
import EmptyList from '../../components/common/EmptyList'
import axios from 'axios'

function BlogListLayout(props) {
    
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let http = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
    });

    useEffect(() => {
        setLoading(true);
        
        // Getting Posts data from API 
        http.get('/api/posts').then((response) => {
            setLoading(false);
            setBlogs(response.data.data);
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
            setError(error.message);
        });
        

    },[]);

    return (
        <div>
            <MainLayout header={props.header ?? 'fixed'} >

                <div>
                    {props.children}
                </div>
                
                <div className="container">
                    
                    {/* Blog List & Empty List */}
                    { loading ? 
                    <div className='text-center py-5'>
                        <Spinner animation="border" />
                    </div> :
                    !loading && !blogs.length ? <EmptyList /> : 
                    <BlogList blogs={blogs} />
                    }

                    { error ? <div className='error text-danger d-flex justify-content-center'> {error} </div> : '' }
                
                </div>
            </MainLayout>
        </div>
    
    )
}

export default BlogListLayout