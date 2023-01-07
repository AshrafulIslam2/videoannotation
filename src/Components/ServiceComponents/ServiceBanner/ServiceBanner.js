import React from "react";

const ServiceBanner = () => {
  return (
    <div className="flex justify-between mx-2 items-center">
      <div>
        <h1 className="tracking-[10px] font-bold mt-6">DATA ANNOTATION</h1>
        <h1 className="text-3xl font-semibold my-6">
          High accuracy labelling,<br></br> Delivered fast
        </h1>
        <p className="my-6">
          - Full support for all 2D and 3D labelling types <br></br>-
          Experienced annotation team <br></br>- Complete annnotation lifecycle
          management
        </p>
        <button
          type="button"
          className="text-sm font-bold text-white bg-cyan-700 py-2 px-3 ml-2 hover:bg-cyan-500"
        >
          Request Demo
        </button>
      </div>
      <div>
        <img
          width={400}
          src="https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/633451a56235a5437f8819f7_data-annotation-hero.svg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default ServiceBanner;
