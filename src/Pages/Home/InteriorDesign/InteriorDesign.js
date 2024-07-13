import React from "react";
import InteriorImg1 from "../../../Assets/images/explore-work-left-image.jpg";
import { BsFillMapFill, BsCalendarDateFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./InteriorDesign.css";

const InteriorDesign = () => {
  const Interiordata = [
    {
      id: 2,
      heading1: " Interior Design",
      date1: "January " + 22 + ", " + 2022,
      title1: "The Waterfront Cafe and Resturant",
      coutry1: "Florida, USA",
      Design1:
        "Designer HTML5 Template is 100% free to download provided by TemplateMo website.",
    },
    {
      id: 3,
      heading1: " Building & Developing",
      date1: "January " + 22 + ", " + 2022,
      title1: "Home Land Port Canaveral Suites",
      coutry1: "Miami Beach, Florida, USA",
      Design1:
        "Designer HTML5 Template is 100% free to download provided by TemplateMo website.",
    },
    {
      id: 4,
      heading1: " Giving Your Brand Power",
      date1: "January " + 18 + ", " + 2022,
      title1: "Hallandale Beach Motal Design",
      coutry1: "North City Beach Park",
      Design1:
        "Designer HTML5 Template is 100% free to download provided by TemplateMo website.",
    },
    {
      id: 5,
      heading1: " Boost Up Your Style",
      date1: "January " + 16 + ", " + 2022,
      title1: "Interior for Marina Beach Resort",
      coutry1: "Sunny Isles Beach, FL 33160",
      Design1:
        "Designer HTML5 Template is 100% free to download provided by TemplateMo website.",
    },
  ];
  return (
    <>
      <div className="interior-container">
        <div className="interior-top-text">
          <h1>
            explore some of our latest <br />
            <em>interior design work</em>
          </h1>
        </div>
        <div className="interior-box">
          <img src={InteriorImg1} alt="Interior" />
          <div className="interior-card">
            {Interiordata.map((items) => {
              return (
                <div className="interior-box-1" key={items.id}>
                  <h1>{items.heading1}</h1>
                  <div className="date-1">
                    <BsCalendarDateFill style={{ marginRight: "10px" }} />
                    {items.date1}
                  </div>
                  <h3>
                    {items.title1}
                    <AiOutlineArrowRight style={{ marginLeft: "10px" }} />
                  </h3>
                  <div className="country-1">
                    <BsFillMapFill style={{ marginRight: "10px" }} />
                    {items.coutry1}
                  </div>
                  <p className="Design-1">{items.Design1}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default InteriorDesign;
