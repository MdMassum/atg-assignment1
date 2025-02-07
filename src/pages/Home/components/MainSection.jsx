import React from 'react'
import PostSection from './PostSection'
import RightSection from './RightSection'

function MainSection({tab,login}) {
  return (
    <div className='md:w-[80%] mx-auto flex justify-between'>
        <PostSection tab={tab}/>
        <RightSection login={login}/>
    </div>
  )
}

export default MainSection