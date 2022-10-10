import React, { useState } from "react";
// import Video from "./fontfinder.png";
import { Button } from "../ButtonElement";

const Banner = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="banner-container" id="home">
      <div className="banner-video-container">
        <video
          className="banner-video"
          autoPlay
          loop
          muted
          src={"/videos/video.mp4"}
          type="video/mp4"
        />
      </div>
      <div className="banner-content">
        <h1 className="banner-title">Best jewellerystore ever</h1>
        <p className="banner-text">
          Sale Now on! Order before 1pm for same day dispatch
        </p>
        <div className="banner-button-wrapper">
          {/* <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Order now! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
