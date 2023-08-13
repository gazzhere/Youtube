import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setvideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((videos) => (
        <Link key={videos.id} to={"/watch?v="+videos.id}><VideoCard  info={videos} /></Link>
      ))}
    </div>
  );
};


export default VideoContainer;
