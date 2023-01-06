import React from "react";
import "./HomeDataStudio.css";

const HomeDataStudio = () => {
  return (
    <div className="relative datastudio ">
      <div className="data relative">
        {" "}
        <h1 className="w-full h-72px rounded-[54px] px-[56px] bg-[#1f1a2e]">
          Data Studio
        </h1>
      </div>
      <div className="flex mt-16 px-10">
        <div className="bg-black rounded-l-2xl">
          <div className="flex pt-6 px-4 pb-16">
            <div className="mr-4 ">
              <img
                src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/633ad8d87b7cb7ad0bcbaa8a_G2-2.svg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-white">#1 Data Labeling Software</h1>
              <div className="flex">
                <p className="text-white">4.9 stars</p>
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a5b5716ccbdb06ca60ebea_Stars.svg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div>
            <video
              controls
              loop=""
              muted=""
              playsinline=""
              data-wf-ignore="true"
              data-object-fit="cover"
              width={1200}
            >
              <source src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/63aaf39501ed678f9d1c3bd4_Image-transcode.mp4" />
            </video>
          </div>
        </div>
        <div className="bg-[#292933] px-6 rounded-r-2xl">
          <h1 className="text-white text-2xl font-semibold pt-6 ">
            Annotation software
          </h1>
          <p className="text-white text-base font-semibold py-6">
            Create accurate training data across multiple data types with our
            annotation software, which is supercharged with advanced tools and
            automation features.
          </p>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-3xl text-white tracking-tight font-bold">
            Annotation Services
          </h1>
          <p className="text-white">
            Access a global marketplace of 400+ vetted, trained, and
            professionally-managed annotation teams that speak up to 18
            languages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDataStudio;
