import React from "react";

const ImagePreview = ({ dataUri }) => {
  return (
    <div>
      <img src={dataUri} alt="imagePreview" width="440" height="auto" />
    </div>
  );
};

export default ImagePreview;
