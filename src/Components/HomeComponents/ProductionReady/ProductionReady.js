import React from "react";

const ProductionReady = () => {
  return (
    <div className="bg-[#f3f5f9]">
      <h1 className="text-3xl text-center font-bold py-6">
        Production-Ready Vision AI Insights <br></br> In Days, Not Months
      </h1>
      <p className="text-center py-6">
        By making computer vision innovation centralized, standardized, and
        repeatable, Plainsight enables <br /> enterprises to see the value of
        visual data faster.
      </p>
      <div>
        <video
          loop
          muted
          autoPlay={true}
          className="rounded-xl w-10/12 mx-auto shadow-2xl shadow-black"
        >
          <source
            type="video/mp4"
            src="https://plainsight.ai/wp-content/uploads/2021/09/wild-sheep-demo-v4_stretch.mp4"
          />
        </video>
      </div>
      <div className="grid grid-cols-5 gap-4  mt-10 pb-10 px-10">
        <div className="flex flex-col items-center">
          <img
            className="w-[200px]"
            src="https://plainsight.ai/wp-content/uploads/2020/08/p-devices.png"
            alt=""
          />
          <h1 className="text-center font-medium py-3">
            Data Source Management
          </h1>
          <p className="text-center font-extralight text-sm">
            Easily connect, collect, & integrate live-stream raw video & imagery
            from the Edge, Cloud, and local sources.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[200px]"
            src="https://plainsight.ai/wp-content/uploads/2020/08/p-video-icons.png"
            alt=""
          />
          <h1 className="text-center font-medium py-3">
            Intelligent Image & Video Data Curation
          </h1>
          <p className="text-center font-extralight text-sm">
            Collect accurate training datasets to provide a high-quality
            training foundation for models.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[200px]"
            src="https://plainsight.ai/wp-content/uploads/2020/08/p-ml.png"
            alt=""
          />
          <h1 className="text-center font-medium py-3">
            AI-Powered Data Labeling
          </h1>
          <p className="text-center font-extralight text-sm">
            Accelerate labeling with smart polygon selection, predictive
            labeling, & automated object recognition.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[200px]"
            src="https://plainsight.ai/wp-content/uploads/2020/08/p-annotation.png"
            alt=""
          />
          <h1 className="text-center font-medium py-3">
            Automated Machine Learning
          </h1>
          <p className="text-center font-extralight text-sm">
            Easily train models with a breakthrough process designed to reduce
            time to vision AI solutions.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[200px]"
            src="https://plainsight.ai/wp-content/uploads/2020/08/p-edge-device.png"
            alt=""
          />
          <h1 className="text-center font-medium py-3">
            Operationalized Solutions
          </h1>
          <p className="text-center font-extralight text-sm">
            Quickly deploy, & scale applications at the edge, in the cloud, or
            on-premises to meet business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductionReady;
