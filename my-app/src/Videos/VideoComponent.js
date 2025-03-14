import "../css/style.css";
import {  useMemo } from "react";

import bigvideo from "./video/large_2x.mp4"
import video from "./video/WhatsApp Video 2024-11-19 at 15.26.40_6eba21f2.mp4";
import video2 from "./video/WhatsApp Video 2024-11-19 at 15.28.41_10b66782.mp4";
import video3 from "./video/WhatsApp Video 2024-11-19 at 15.28.41_f6c4eb3e.mp4";
export default function VideoComponent() {
  const videos = useMemo(() => [
    video, 
    video2, 
    video3
  ], []);

  const allVideos = videos.map((vid) => {
    return (
      <div className="data-section flexbox">
      <div  className="data-section-left flexbox">
        <h1>Online Shop</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod voluptatibus voluptatem quia perspiciatis laboriosam.
          Voluptatibus, dolores aliquid atque consectetur aliquam natus quae?
          Dolorum, doloribus. Dignissimos necessitatibus quod quia. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, quod
          voluptatibus voluptatem quia perspiciatis laboriosam. Voluptatibus,
          dolores aliquid atque consectetur aliquam natus quae? Dolorum,
          doloribus. Dignissimos necessitatibus quod quia.{" "}
        </h3>
      </div>
      <div className="data-section-right">
      <video id="video"  key={vid} src={vid} controls></video>
        </div>
    </div>
    )
  } ); 


  return (
    <>
      <div style={{backgroundColor:"whiteSmoke",width:"100%"}}>
        <video style={{width:"100%"}} id="video" src={bigvideo} autoPlay  loop></video>
      </div>

      {allVideos}
    </>
  );
}
