import React from "react";

const SliderImgs = ({ banners, slidersToggle }) => {
  return (
    <div className="slider_imgs">
      <div
        className="left_slider"
        // style={{ marginLeft: slidersToggle * -500 + "px" }}
        style={{ transform: `translateX(${slidersToggle * -500}px)` }}
      >
        {banners.length &&
          banners.map((banner, index) => (
            <div className="left_slider_img" key={index}>
              <img src={banner.src} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SliderImgs;
