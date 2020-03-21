import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./imagePreview";

export default () => {
  const [dataUri, setDataUri] = useState("");

  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    setDataUri(dataUri);
  }

  return (
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} />
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          // onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
          // onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
          // onCameraError = { (error) => { handleCameraError(error); } }
          // idealFacingMode = {FACING_MODES.ENVIRONMENT}
          // idealResolution = {{width: 640, height: 480}}
          // imageType = {IMAGE_TYPES.JPG}
          // imageCompression = {0.97}
          // isMaxResolution = {true}
          // isImageMirror = {false}
          // isSilentMode = {false}
          // isDisplayStartCameraError = {true}
          // isFullscreen = {false}
          // sizeFactor = {1}
          // onCameraStart = { (stream) => { handleCameraStart(stream); } }
          // onCameraStop = { () => { handleCameraStop(); } }
        />
      )}
    </div>
  );
};
