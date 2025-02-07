import React from 'react'
import AllPosts from './AllPosts'
import ArticlePosts from './ArticlePosts'
import EducationPosts from './EducationPosts'
import JobPosts from './JobPosts'

function PostSection({tab}) {
  return (
    <div className='flex md:w-[85%] mx-auto py-4'>
        {
        tab === "All" ? <AllPosts/> 
        : tab === "Article" ? <ArticlePosts/>
        : tab === "Education" ? <EducationPosts/>
        : <JobPosts/>
        }
    </div>
  )
}

export default PostSection