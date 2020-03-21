import React from "react";

const ImagePreview = ({ dataUri, isFullscreen }) => {
  return (
    <div>
      <img src={dataUri} alt="imagePreview" />
    </div>
  );
};

export default ImagePreview;
