import React from "react";

const SlidersPagers = ({ banners, setSlidersToggle, slidersToggle }) => {
  const prevHandle = () => {
    setSlidersToggle((prev) => (prev <= 0 ? banners.length - 1 : prev - 1));
  };

  const nextHandle = () => {
    setSlidersToggle((prev) => (prev >= banners.length - 1 ? 0 : prev + 1));
  };
  return (
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
  );
};

export default SlidersPagers;
