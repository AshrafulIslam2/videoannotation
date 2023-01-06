import React from "react";
import Button from "../../../SharedComponents/Button";

const Work = () => {
  return (
    <div className="flex my-16 items-center">
      <div className="mr-10">
        <h1 className="text-2xl font-bold py-3">
          Plainsight Builds, Manages, and Oversees Transformative Vision AI
          Solutions
        </h1>
        <p className="text-sm leading-[30px] tracking-widest py-3">
          We help customers and partners across industries succeed quickly and
          efficiently with the power of computer vision.
        </p>
        <p className="text-xs leading-[30px] tracking-wider">
          Improve operations, enhance product lines, and increase revenue
          opportunities that reshape business models to carve out competitive
          advantages.
        </p>
        <Button titile={"Learn More"} color={"red"}></Button>
      </div>
      <div>
        <video
          controls
          className="rounded-xl w-[1600px] shadow-2xl shadow-black"
        >
          <source
            type="video/mp4"
            src="https://plainsightprd.wpengine.com/wp-content/uploads/2022/12/home-page_explainer-video-fullversion-1080p.mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Work;
