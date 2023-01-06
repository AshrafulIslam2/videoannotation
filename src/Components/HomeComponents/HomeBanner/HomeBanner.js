import React from "react";

import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <div>
        <h1 className="text-3xl text-center font-bold ">
          A Short Introduction to Video Annotation for AI [2023]
        </h1>
        <p className="text-xl  font-light leading-[30px]  py-7 mx-6">
          Find out what video annotation is and how it can be used in computer
          vision. Explore different techniques to annotate videos for AI and
          learn best practices.
        </p>
      </div>
      <div className="imagediv">
        <img
          src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/63b413df0e8909b984768684_636b93cd13f59132579e68b8_Hero%2520video%2520annotation.jpeg"
          alt=""
        />
      </div>
      <div></div>
    </div>
  );
};

export default HomeBanner;
