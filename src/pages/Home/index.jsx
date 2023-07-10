import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmptyList from '../../components/common/EmptyList'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header/index'
import Footer from '../../components/Home/Footer/index'
import Hero from '../../components/Home/Hero/index'
import SearchBar from '../../components/Home/SearchBar/index'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css';
import MainLayout from '../../layouts/MainLayout'
import BlogListLayout from '../../layouts/BlogListLayout'
// import { blogList } from '../../config/data'

const Home = () => {

    const [searchKey, setSearchKey] = useState('');

    // Search Submit
    // const handleSearchSubmit = event => {
    //     event.preventDefault();
    //     handleSearchResults();
    // }

    // const handleSearchResults = () => {
    //     const allBlogs = blogs;
    //     const filteredBlogs = allBlogs.filter(blog => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()))
    //     setBlogs(filteredBlogs)
    // }
  
    // const handleClearSearch = () => {
    //     setBlogs(blogs)
    //     setSearchKey('')
    // }

    return (
    <div>
        <BlogListLayout>
            
            {/*  Hero Section */}
            <Hero />
            
            {/*  Search Bar */}
            <SearchBar 
                // value={searchKey} 
                // clearSearch={handleClearSearch}
                // formSubmit={handleSearchSubmit} 
                // handleSearchKey={(e)=> setSearchKey(e.target.value)} 
            />

            
        </BlogListLayout>
    </div>
  )
}

export default Home