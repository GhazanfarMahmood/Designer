import React from "react";
import "./AboutService.css";

const AboutService = () => {
  return (
    <>
      <div className="service-container">
        <div className="service-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="62"
            viewBox="0 0 24 24"
            width="62"
            style={{color : "#ff565b"}}
          >
            <g>
              <rect fill="none" height="24" width="24"></rect>
            </g>
            <g>
              <g>
                <path
                  class="icon"
                  d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"
                ></path>
                <circle class="icon" cx="9" cy="13" r="1"></circle>
                <circle class="icon" cx="15" cy="13" r="1"></circle>
                <path
                  class="icon"
                  d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"
                ></path>
              </g>
            </g>
          </svg>
          <h4>Active Support 24/7</h4>
        </div>
        <div className="service-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="62"
            viewBox="0 0 24 24"
            width="62"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              class="icon"
              d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"
            ></path>
          </svg>
          <h4>Customer Care</h4>
        </div>
        <div className="service-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="62"
            viewBox="0 0 24 24"
            width="62"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              class="icon"
              d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
            ></path>
          </svg>
          <h4>Easy to Customize</h4>
        </div>
      </div>
    </>
  );
};

export default AboutService;
