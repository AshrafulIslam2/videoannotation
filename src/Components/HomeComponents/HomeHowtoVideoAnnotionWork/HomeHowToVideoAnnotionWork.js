import React from "react";

const HomeHowToVideoAnnotionWork = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10">
        How to Annotate your Video
      </h1>
      <div className="grid grid-cols-3 gap-4 items-center">
        <div>
          <img
            src="https://cdn-site-assets.veed.io/Upload_Video_a768094ce3/Upload_Video_a768094ce3.png?width=360&quality=75"
            alt=""
          />
          <h1 className="text-center font-bold">Upload</h1>
          <p className="text-center text-lg">
            Upload the video you wish to annotate. All video file formats are
            supported.
          </p>
        </div>
        <div>
          <img
            src="https://cdn-site-assets.veed.io/Annotate_Video_307a55d3ec/Annotate_Video_307a55d3ec.png?width=360&quality=75"
            alt=""
          />
          <h1 className="text-center font-bold">Annotate Video</h1>
          <p className="text-center text-lg">
            Click ‘Draw’ - select brush size, colour, opacity - and get
            annotating your videos! You can also click ‘Text’ to write your
            annotations.
          </p>
        </div>
        <div>
          <img
            src="https://cdn-site-assets.veed.io/Download_Video_e797eab551/Download_Video_e797eab551.png?width=360&quality=75"
            alt=""
          />
          <h1 className="text-center font-bold">Download</h1>
          <p className="text-center text-lg">
            Finally, click the download button to save your new video with
            annotations included.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHowToVideoAnnotionWork;
