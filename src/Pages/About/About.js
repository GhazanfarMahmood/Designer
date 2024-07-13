import React from 'react'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutService from './AboutService/AboutService'
import AboutDesign from './AboutDesign/AboutDesign'
import Testimonial from './Testimonial/Testimonial'
import Hire from '../../components/Hire/Hire'

const About = () => {
  return (
    <>
      <AboutHeader/>
      <AboutService/>
      <AboutDesign/>
      <Testimonial/>
      <Hire/>
    </>
  )
}

export default About
