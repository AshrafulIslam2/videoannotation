import React from "react";
import "./HomeDataStudio.css";

const HomeDataStudio = () => {
  return (
    <div className=" datastudio  ">
      <div className="data z-50 sticky top-0 mt-6">
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
              loop
              muted
              autoPlay={true}
              //   playsinline=""
              //   data-wf-ignore="true"
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

      <div className="relative bg-[#292933] px-7 rounded-tl-2xl rounded-tr-2xl m-10 flex ">
        <div>
          <img
            className="absolute -left-10 -top-10 t-3"
            src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/63aaec08e473f332b0a9aff3_Ranked%20%231%20css.svg"
            width={100}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <h1 className="text-3xl text-white tracking-tight font-bold mt-10 py-6">
            Annotation Services
          </h1>
          <p className="text-white">
            Access a global marketplace of 400+ vetted, trained, and
            professionally-managed annotation teams that speak up to 18
            languages.
          </p>
          <div className="flex text-white mb-2 mt-2">
            <img
              className="mr-2"
              src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/635bd7a4332189b0a34aae45_Check.svg"
              alt=""
              srcset=""
            />
            <p>
              Guarantee stellar project delivery with SuperAnnotate’s dedicated
              annotation project manager.
            </p>
          </div>
          <div className="flex  text-white mb-2">
            <img
              className="mr-2"
              src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/635bd7a4332189b0a34aae45_Check.svg"
              alt=""
              srcset=""
            />
            <p>
              Guarantee stellar project delivery with SuperAnnotate’s dedicated
              annotation project manager.
            </p>
          </div>
        </div>
        <div>
          <img
            className="pt-4 relative top-[38px]"
            src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a6f6ed9e321889cf6e0f7d_Services.png"
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div className="relative bg-[#292933] px-7 rounded-tl-2xl rounded-tr-2xl ml-10 mr-10 mt-10 mb-10 flex  items-center  ">
        <div className="">
          <img
            width={1000}
            className="relative top-[50px] -left-5 ml-3"
            src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a6fa8c8d62e6aab5bd3c00_Project%20Managment.png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <h1 className="text-3xl text-white tracking-tight font-bold mt-10 py-6">
            Project management
          </h1>
          <p className="text-white py-4">
            Enhance team and project performance with advanced analytics and
            management systems.
          </p>
          <div className="flex text-white mb-2">
            <img
              className="mr-2"
              src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/635bd7a4332189b0a34aae45_Check.svg"
              alt=""
              srcset=""
            />
            <p>
              Guarantee stellar project delivery with SuperAnnotate’s dedicated
              annotation project manager.
            </p>
          </div>
          <div className="flex  text-white mb-2">
            <img
              className="mr-2"
              src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/635bd7a4332189b0a34aae45_Check.svg"
              alt=""
              srcset=""
            />
            <p>
              Guarantee stellar project delivery with SuperAnnotate’s dedicated
              annotation project manager.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDataStudio;
