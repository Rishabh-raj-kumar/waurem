import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as ml5 from "ml5";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Link } from "react-router-dom";

const dimensions = {
  width: 500,
  height: 300,
};
function Camera() {
  const webcamRef = useRef();
  const canvasRef = useRef();
  const [tag, setTag] = useState(" ");
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {}, []);

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
      if (webcamRef.current) {
        if (webcamRef.current.video.readyState !== 4) {
          console.warn("Video not ready yet");
          return;
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
              ctx.rect(x, y, width / 2, height / 2);
              ctx.stroke();
              setTag(label);
              async function gets() {
                const stateQuery = query(
                  collection(db, "blogs"),
                  where("Tag", "==", tag.toLowerCase())
                );
                const querySnapshot = await getDocs(stateQuery);
                querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  setData(doc.data());
                  setId(doc.id);
                });
              }
              gets();
              // console.log(label)
            });
          }
        });
      }
    };

    return () => {
      if (detectionInterval) {
        clearInterval(detectionInterval);
      }
    };
  }, [tag]);
  return (
    <div className=" w-full h-screen flex items-center gap-3">
      <div className=" relative">
        <Webcam ref={webcamRef} className=" absolute" />
        <canvas ref={canvasRef} className=" relative" />
      </div>
      {data !== null ? (
        <div className=" border-2 h-max text-black flex gap-2 items-center">
          <img src={data.coverImg} className=" w-32" />
          <p>{data.Title}</p>
          <Link className=" text-blue-800 underline" to={"/blog/" + id}>
            {"Explore here"}
          </Link>
        </div>
      ) : null}
        <button className=" bg-red-600 text-white p-3">
        <Link to={"/"}> close camera</Link></button>
    </div>
  );
}

export default Camera;
