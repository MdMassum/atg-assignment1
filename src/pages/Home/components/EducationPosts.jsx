import React from 'react'
import img2 from '../../../assets/educationImg.png'
import ArticleCard from '../../../components/ArticleCard'

function EducationPosts() {
  return (
    <>
        <ArticleCard
        header="Tax Benefits for Investment under National Pension Scheme launched by Government"
        description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        bgImg={img2}
        PostedBy="Sarah West"
        type="Education"
        />
    </>
  )
}

export default EducationPosts