import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import MeetupCard from '../../../components/MeetupCard'
import JobCard from '../../../components/JobCard'
import img1 from '../../../assets/articleImg.png'
import img2 from '../../../assets/educationImg.png'

function AllPosts() {
  return (
    <div >
      <ArticleCard
      header="What if famous brands had regular fonts? Meet RegulaBrands!"
      description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
      bgImg={img1}
      PostedBy="Sarthak Kamra"
      type="Article"
      />
      <ArticleCard
      header="Tax Benefits for Investment under National Pension Scheme launched by Government"
      description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
      bgImg={img2}
      PostedBy="Sarah West"
      type="Education"
      />
      <MeetupCard/>
      <JobCard/>
    </div>
  )
}

export default AllPosts