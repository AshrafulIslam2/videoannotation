import React, { useState } from "react";

const ImageAnnotationType = () => {
  const images = [
    {
      id: "1",
      image:
        "https://uploads-ssl.webflow.com/60f7efa6a00ee7409ecf4fa8/60f80a5d3895c40cb226fbfe_2D%20Bounding%20Box.jpg",
    },
    {
      id: "2",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/60ff6b032024c874673d9675_Group%20101.jpg",
    },
    {
      id: "3",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/60ff6b02138fae017e42f163_Group%20105.jpg",
    },
    {
      id: "4",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/60ff6b0371024c40c83ce21c_Group%20103.jpg",
    },
    {
      id: "5",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/60ff6b03f08b354c4e91c9a3_Group%20104.jpg",
    },
  ];
  const [id, setId] = useState("1");
  const findImage = images.find((img) => img.id === id);
  console.log(findImage);
  return (
    <div className="mt-56">
      {" "}
      <h1 className="text-3xl font-bold tracking-[10px] text-center my-10">
        Image Annotation Types
      </h1>
      <p className="text-center tracking-[6px] my-6">
        Supporting all types of unique cases
      </p>
      <div className="flex justify-center my-10">
        <button
          type="button"
          className="bg-cyan-700 hover:bg-cyan-500 py-3 text-white  px-4"
          onClick={() => setId("1")}
        >
          2D Bounding Box
        </button>
        <button
          type="button"
          className="bg-cyan-700 hover:bg-cyan-500 py-3 text-white  px-4"
          onClick={() => setId("2")}
        >
          3D Bounding Box
        </button>
        <button
          type="button"
          className="bg-cyan-700 hover:bg-cyan-500 py-3 text-white  px-4"
          onClick={() => setId("3")}
        >
          Polyline
        </button>
        <button
          type="button"
          className="bg-cyan-700 hover:bg-cyan-500 py-3 text-white  px-4"
          onClick={() => setId("4")}
        >
          Key Points
        </button>
        <button
          type="button"
          className="bg-cyan-700 hover:bg-cyan-500 py-3 text-white  px-4"
          onClick={() => setId("5")}
        >
          Semantic Segmentation
        </button>
      </div>
      <div className="flex justify-center">
        {<img src={findImage?.image} alt="" srcset="" />}
      </div>
    </div>
  );
};

export default ImageAnnotationType;
