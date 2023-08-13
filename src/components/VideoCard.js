import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  var t = title;
  var l = t.slice(0, 25);

  return (
    <div className="  p-2 m-2 w-75 shadow-lg rounded-xl ">
      <img className="rounded-lg " alt="video" src={thumbnails.medium.url} />

      <ul>
        <li className="font-bold ">{l}......</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
// higher orde component 
const ADVideoCard = (VideoCard) => {
  return (
    <div className=" p-1 m-1 border border-red-900">
      <VideoCard />
    </div>
  );
};

export default VideoCard;
