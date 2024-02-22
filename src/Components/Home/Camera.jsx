import React, { useEffect, useRef, useState } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Link } from "react-router-dom";

function Camera() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [data,setData] = useState(null)
  const [id,setId] = useState(null) 

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };
  const drawRect = (detections, ctx) => {
    // Loop through each prediction
    detections.forEach((prediction) => {
      // Extract boxes and classes
      const [x, y, width, height] = prediction["bbox"];
      const text = prediction["class"];

      // Set styling
      const color = Math.floor(Math.random() * 16777215).toString(16);
      ctx.strokeStyle = "#" + color;
      ctx.font = "18px Arial";

      // Draw rectangles and text
      ctx.beginPath();
      ctx.fillStyle = "#" + color;
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height);
      ctx.stroke();

      async function gets() {
        const blogsRef = collection(db, "blogs");

        // Create a query against the collection.
        const q = query(blogsRef, where("Tag", "==", text.toLowerCase()));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setId(doc.id)
          setData(doc.data())
        });
        // console.log(q);
      }
      gets();
    });
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className=" w-full h-screen flex items-center gap-3">
      <div className=" relative">
        <Webcam
          ref={webcamRef}
          muted={true}
          id="img"
          className=" w-[600px] h-[600px]"
          // style={{
          //   position: "absolute",
          //   marginLeft: "auto",
          //   marginRight: "auto",
          //   left: 0,
          //   right: 0,
          //   textAlign: "center",
          //   zindex: 9,
          //   width: 640,
          //   height: 480,
          // }}
        />

        <canvas
          ref={canvasRef}
          className=" absolute w-[600px] h-[400px] top-20"
          // style={{
          //   position: "absolute",
          //   marginLeft: "auto",
          //   marginRight: "auto",
          //   left: 0,
          //   right: 0,
          //   textAlign: "center",
          //   zindex: 8,
          //   width: 640,
          //   height: 480,
          // }}
        />
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
        <Link to={"/"}> close camera</Link>
      </button>
    </div>
  );
}

export default Camera;
