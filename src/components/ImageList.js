import React from "react";

const ImageList = (props) => {
  const imagesURLs = props.images.map((image, index) => {
    return <img key={index} src={image.urls.regular} />;
  });
  console.log(imagesURLs);
  return <div>{imagesURLs}</div>;
};

export default ImageList;
