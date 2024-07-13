import React from 'react'
import './WorkDesign.css'
import WorkDesginImg from '../../../Assets/images/explore-item-01.jpg'

const WorkDesign = () => {
  return (
    <>
      <div className="work-design-card">
      <h2>MINIMALISTIC DESIGN FOR 2 BEDROOMS</h2>
         <img src={WorkDesginImg} alt="work-design" />
      </div>
      <div className="work-design-box">
        <div className="row">
            <h6>Architect:</h6>
            <span>Catherine Rose</span>
        </div>
        <div className="row">
            <h6>Client:</h6>
            <span>TemplateMo</span>
        </div>
        <div className="row">
            <h6>Terms:</h6>
            <span>6-12 Months</span>
        </div>
        <div className="row">
            <h6>Project Type:</h6>
            <span>Interior Design</span>
        </div>
        <div className="row">
            <h6>Strategy:</h6>
            <span>Clean & Minimal</span>
        </div>
        <div className="row">
            <h6>Date:</h6>
            <span>January 22, 2022</span>
        </div>
      </div>
    </>
  )
}

export default WorkDesign
