import React, { useEffect, useState } from "react";
import banners from "../constants";
import "./Sliders03.css";

const Sliders = () => {
  const [slidersToggle, setSlidersToggle] = useState(0);

  const prevHandle = () => {
    setSlidersToggle((prev) => (prev <= 0 ? banners.length - 1 : prev - 1));
  };

  const nextHandle = () => {
    setSlidersToggle((prev) => (prev >= banners.length - 1 ? 0 : prev + 1));
  };
  return (
    <div class="sliders">
      <div
        className="left_slider"
        // style={{ marginLeft: slidersToggle * -500 + "px" }}
        style={{ transform: `translateX(${slidersToggle * -500}px)` }}
      >
        {banners.length &&
          banners.map((banner, index) => (
            <div className="left_slider_img" key={index}>
              <img src={banner} />
            </div>
          ))}
      </div>
      <div className="btn">
        <button onClick={prevHandle}> 이전 </button>
        {banners.length &&
          banners.map((banner, index) => (
            <button
              key={banner}
              onClick={() => setSlidersToggle(index)}
              className={index === slidersToggle ? "active" : ""}
            >
              {index}
            </button>
          ))}
        <button onClick={nextHandle}> 이후 </button>
      </div>
    </div>
  );
};

export default Sliders;
