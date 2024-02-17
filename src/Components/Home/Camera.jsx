import React, { useRef } from "react";
import Webcam from "react-webcam";
import * as ml5 from "ml5";

const dimensions = {
  width: 1000,
  height: 1000,
};
function Camera() {
  const webcamRef = useRef();
  const canvasRef = useRef();

  React.useEffect(() => {
    let detectionInterval;
    const ctx = canvasRef.current.getContext("2d");

    // 1. Once the model has loaded, update the dimensions run the model's detection interval
    const modelLoaded = () => {
      const { width, height } = dimensions;
      webcamRef.current.video.width = width;
      webcamRef.current.video.height = height;
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      detectionInterval = setInterval(() => {
        detect();
      }, 200);
    };

    const objectDetector = ml5.objectDetector("cocossd", modelLoaded);

    const detect = () => {
      if (webcamRef.current.video !== null) {
        if (webcamRef.current.video.readyState !== 4) {
          console.warn("Video not ready yet");
          return;
        }
      }

      objectDetector.detect(webcamRef.current.video, (err, results) => {
        const { width, height } = dimensions;
        ctx.clearRect(0, 0, width, height);
        if (results && results.length) {
          results.forEach((detection) => {
            ctx.beginPath();
            ctx.fillStyle = "#FF0000";
            const { label, x, y, width, height } = detection;
            ctx.fillText(label, x, y - 5);
            ctx.rect(x, y, width, height);
            ctx.stroke();
          });
        }
      });
    };

    return () => {
      if (detectionInterval) {
        clearInterval(detectionInterval);
      }
    };
  }, []);
  return (
    <div className=" w-full h-screen">
      <Webcam ref={webcamRef} />
      <canvas ref={canvasRef} className="floating" />
    </div>
  );
}

export default Camera;
