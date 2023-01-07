import React from "react";

const ImageAnnotationKey = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-10">
        Image annotation key features
      </h1>
      <div className="flex justify-center items-center my-28">
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
            <source src="https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/60ffe2a7e8a4e7a47adf752e_super-transcode.mp4" />
          </video>
        </div>
        <div className="ml-16">
          <h1 className="font-bold text-xl">Superpixel</h1>
          <p className="text-sm">
            Pixel-accurate ML-assisted segmentation, segment an object with just
            a few click.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-28">
        <div className="mr-16">
          <h1 className="font-bold text-xl">Bounding box-segmentation</h1>
          <p className="text-sm">
            Pixel-wise object labeling by drawing a bounding boxes.
          </p>
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
            <source src="https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/60ffe241910b13067bca95ab_bbs-transcode.mp4" />
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center my-28">
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
            <source src="https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/60ffe31df8f49673c514f061_fs-transcode.mp4" />
          </video>
        </div>
        <div className="ml-16">
          <h1 className="font-bold text-xl">Frames Classification</h1>
          <p className="text-sm">
            Pre-label up to 80 common classes automatically by clicking on
            auto-label. Improve your productivity by 7x.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageAnnotationKey;
