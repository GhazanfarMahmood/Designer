import React from "react";
import "./Project.css";
import projectImg1 from "../../../Assets/images/pagination-right-image.jpg";
import projectImg2 from "../../../Assets/images/pagination-left-image.jpg";

const Project = () => {
  return (
    <>
      <div className="project-box">
        <div className="project-card">
          <img src={projectImg1} alt="project first" />
          <div className="project-text">
          <h6>Minimalistic Living Room</h6>
          <p>Interior Design</p>
          </div>
        </div>
        <div className="project-card-2">
          <img src={projectImg2} alt="project second" />
        <div className="project-text" style={{textAlign : "right"}}>
          <h6>Futuristic Interior Concept</h6>
          <p>Interior Design</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
