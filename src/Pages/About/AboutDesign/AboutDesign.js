import React from "react";
import "./AboutDesign.css";
import interiorLeftImg from '../../../Assets/images/interior-design-left-image.jpg'
import Faq from '../Faq/Faq'

const AboutDesign = () => {
  return (
    <>
      <div className="design-container">
      <div className="design-text-box">
        <h2>A COMPANY WHO SPECIALIZES <br />
        <em> IN INTERIOR DESIGN</em>.</h2>
        <img src={interiorLeftImg} alt="interior design left" />
        </div>
        <div className="design-card">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui quis aut, iusto dolorum iure similique molestias quo nemo, amet incidunt fuga. Officia, accusantium ipsam. Quaerat debitis dolore soluta quasi minima dolor blanditiis tempore amet ab voluptatem, illo quam nemo consequuntur at esse doloremque dicta sit voluptate.</p><br /><p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="faq">
        <h1>How It Works</h1>
        <Faq/>
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutDesign;
