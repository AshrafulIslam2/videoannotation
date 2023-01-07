import React from "react";

const ImageAnnotationBanner = () => {
  return (
    <div className="bg-gray-100 pt-14">
      <h1 className="text-3xl font-semibold text-center my-10">
        The world’s most intuitive <br></br>annotation tool for your velocity
      </h1>
      <p className="text-center my-10">
        Annotation editor supercharged with advanced and user-friendly tools.
      </p>
      <div className="flex justify-center my-10">
        <button type="button" className="bg-cyan-700 py-3 text-white  px-4">
          60 Days Free Trail
        </button>
      </div>
      <img
        className="relative top-40 left-28"
        width="800"
        src="https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/61001872853173c7594849de_image-1-p-1600.jpeg"
        alt=""
      />
    </div>
  );
};

export default ImageAnnotationBanner;
