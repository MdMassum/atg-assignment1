import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import img1 from '../../../assets/articleImg.png'

function ArticlePosts() {
  return (
    <>
        <ArticleCard
        header="What if famous brands had regular fonts? Meet RegulaBrands!"
        description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        bgImg={img1}
        PostedBy="Sarthak Kamra"
        type="Article"
        />
    </>
  )
}

export default ArticlePosts