import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const CameraRecord = () => {
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto....", dataUri);
  }
  return (
    <div>
      {" "}
      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
        onCameraStart={() => console.log("on camera on")}
        onCameraStop={() => console.log("on camera staop")}
        onCameraError={() => console.log("on camera Errro")}
        idealResolution={{ width: 640, height: 480 }}
      />
    </div>
  );
};

export default CameraRecord;
