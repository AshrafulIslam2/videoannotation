import React from "react";
import HighThought from "../../../Components/ImageAnnotaionComponents/HighThoughtandEnterprise/HighThought";
import ImageAnnotationBanner from "../../../Components/ImageAnnotaionComponents/ImageAnnotationBanner";
import ImageAnnotationKey from "../../../Components/ImageAnnotaionComponents/ImageAnnotationKeyFeture/ImageAnnotationKey";
import ImageAnnotationType from "../../../Components/ImageAnnotaionComponents/ImageAnnotationTyoe/ImageAnnotationType";

const ImageAnnotaion = () => {
  return (
    <div>
      <ImageAnnotationBanner></ImageAnnotationBanner>
      <ImageAnnotationType></ImageAnnotationType>
      <ImageAnnotationKey></ImageAnnotationKey>
      <HighThought></HighThought>
    </div>
  );
};

export default ImageAnnotaion;
