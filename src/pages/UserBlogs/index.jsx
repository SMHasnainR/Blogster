import React from 'react'
import BlogListLayout from '../../layouts/BlogListLayout'
import AuthorHero from '../../components/common/AuthorHero'

function UserBlogs() {
  return (
    
    <div>
      <BlogListLayout header='sticky' >

        <AuthorHero />

      </BlogListLayout>
    </div>
  )
}

export default UserBlogs