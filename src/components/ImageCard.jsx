import React from "react";

const ImageCard = ({ src }) => {
  return (
    <div className="border m-auto">
      <img src={src} className = "w-80" />
    </div>
  );
};

export default ImageCard;
