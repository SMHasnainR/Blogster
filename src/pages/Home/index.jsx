import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmptyList from '../../components/common/EmptyList'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header/index'
import Hero from '../../components/Home/Hero/index'
import SearchBar from '../../components/Home/SearchBar/index'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css';
// import { blogList } from '../../config/data'

const Home = () => {

    const [blogs, setBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState('');
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

    // Search Submit
    const handleSearchSubmit = event => {
        event.preventDefault();
        handleSearchResults();
    }

    const handleSearchResults = () => {
        const allBlogs = blogs;
        const filteredBlogs = allBlogs.filter(blog => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()))
        setBlogs(filteredBlogs)
    }
  
    const handleClearSearch = () => {
        setBlogs(blogs)
        setSearchKey('')
    }

    return (
    <div>
            
        {/*  Page Header */}
        <Header position='fixed' />

        {/*  Hero Section */}
        <Hero />
        
        {/*  Search Bar */}
        <SearchBar 
            value={searchKey} 
            clearSearch={handleClearSearch}
            formSubmit={handleSearchSubmit} 
            handleSearchKey={(e)=> setSearchKey(e.target.value)} 
        />

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
    </div>
  )
}

export default Home