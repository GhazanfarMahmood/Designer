import React from "react";
import "./HomeDiscover.css";
import HomeDiscoverImg from "../../../Assets/images/whats-trending-item-image.jpg";

const HomeDiscover = () => {
  return (
    <>
      <div className="home-discover-container">
        <div className="discover-left-Box">
          <h1>
            CHECK OUT WHATS <br /> TRENDING IN
            <br /> <em> OUR INTERIOR WORK</em>.
          </h1>
          <p>
            Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm
            tokito adipcingi elit, sed do eismuod larehai med at vero eos et
            suscipit neque rerum molestias accusamus et iusto odio dignissimos
            ducimus qui blanditis.
          </p>
          <button className="all-btn">Discover More</button>
        </div>
        <div className="hover-effect">
          <div className="discover-img-box">
            <img src={HomeDiscoverImg} alt="Discover-img-1" />
          </div>
        <div className="hover-text">
          <h4>Modernized Interior</h4>
          <span>Guest Room Decoration</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomeDiscover;
