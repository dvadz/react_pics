import React from "react";

const ImageList = (props) => {
  const imagesURLs = props.images.map((image, index) => {
    return <img key={image.id} src={image.urls.regular} alt={image.description} />;
  });
  return <div>{imagesURLs}</div>;
};

export default ImageList;
