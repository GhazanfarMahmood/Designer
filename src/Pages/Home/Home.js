import React from 'react'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeCenterForm from './HomeCenterForm/HomeCenterForm'
import HomeTopForm from './HomeTopForm/HomeTopForm'
import HomeDiscover from './HomeDiscover/HomeDiscover'
import InteriorDesign from './InteriorDesign/InteriorDesign'


const Home = () => {
   return (
    <>
      <HomeBanner/>
      <HomeTopForm/>
      <InteriorDesign/>
      <HomeDiscover/>
      <HomeCenterForm/>
    </>
  )
}

export default Home
