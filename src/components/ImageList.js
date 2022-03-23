import "./ImageList.css";
import ImageCard from "../ImageCard";
import React from "react";

const ImageList = (props) => {
  const imagesURLs = props.images.map((image, index) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className='image-list'>{imagesURLs}</div>;
};

export default ImageList;
