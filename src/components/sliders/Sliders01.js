import React, { useEffect, useState } from "react";
import banners from "../constants";
import "./Sliders.css";

const Sliders = () => {
  const [slidersToggle, setSlidersToggle] = useState(0);

  useEffect(() => {
    setInterval(() => {
      //   setSlidersToggle((prev) => (prev >= banners.length - 1 ? 0 : prev + 1));
      setSlidersToggle(
        slidersToggle >= banners.length - 1 ? 0 : slidersToggle + 1
      );
      // 0 1 2 3
    }, 3000);
  }, [slidersToggle]);

  return (
    <div className="slider_container">
      {banners.length &&
        banners.map((banner, index) => (
          <div
            className="slider_img"
            key={index}
            style={{ opacity: index === slidersToggle ? 1 : 0 }}
          >
            <img src={banner} />
          </div>
        ))}
    </div>
  );
};

export default Sliders;
