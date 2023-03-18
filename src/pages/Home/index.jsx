import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmptyList from '../../components/common/EmptyList'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header/index'
import Hero from '../../components/Home/Hero/index'
import SearchBar from '../../components/Home/SearchBar/index'
// import { blogList } from '../../config/data'

const Home = () => {

    const [blogs, setBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    // axios.defaults.withCredentials = true;
    let http = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        credentials: true,
    });

    useEffect(() => {
        http.get('/api/posts').then((response) => {
            console.log(response.data.data);
            setBlogs(response.data.data);
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
    <Header />

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
        {/*  Blog List & Empty List */}
        {  !blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}   
    </div>


    </div>
  )
}

export default Home