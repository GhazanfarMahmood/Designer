import React from "react";
import "./TrendBox.css";
import trendImg1 from "../../../Assets/images/trending-item-01.jpg";
import trendImg2 from "../../../Assets/images/trending-item-02.jpg";
import trendImg3 from "../../../Assets/images/trending-item-03.jpg";
import trendImg4 from "../../../Assets/images/trending-item-04.jpg";
import trendImg5 from "../../../Assets/images/trending-item-05.jpg";
import trendImg6 from "../../../Assets/images/trending-item-06.jpg";
import trendImg7 from "../../../Assets/images/trending-item-07.jpg";
import trendImg8 from "../../../Assets/images/trending-item-08.jpg";

const itemData = [
  {
    img: trendImg1,
    title: "Interior Design",
  },
  {
    img: trendImg5,
    title: "Tea Table Design",
  },
  {
    img: trendImg8,
    title: "Specific Interior Design",
  },
  {
    img: trendImg4,
    title: "Little Bungalow",
  },
  {
    img: trendImg3,
    title: "Exterior Design",
  },
  {
    img: trendImg4,
    title: "Little Bungalow",
  },
  {
    img: trendImg7,
    title: "White Theme Interior",
  },
  {
    img: trendImg1,
    title: "Interior Design",
  },
  {
    img: trendImg2,
    title: "Bedroom Design",
  },
  {
    img: trendImg6,
    title: "Interior Bed Design",
  },
  {
    img: trendImg2,
    title: "Bedroom Design",
  },
  {
    img: trendImg5,
    title: "Tea Table Design",
  },
];

const TrendBox = () => {
  return (
    <>
      <div className="gallery">
        {itemData.map((items, index) => {
          return (
            <div className="hover-effect1">
              <div className="pics" key={index}>
                <img
                  src={items.img}
                  alt={items.title}
                  style={{ width: "100%" }}
                />
                <span>{items.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TrendBox;
