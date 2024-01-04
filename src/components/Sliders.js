import React, { useEffect, useState } from "react";
import banners from "../constants/img_data.js";

import "./Sliders.css";
import SlidersPagers from "./SlidersPagers.js";
import SliderImgs from "./SliderImgs.js";

const Sliders = () => {
  const [slidersToggle, setSlidersToggle] = useState(0);

  return (
    <div class="sliders">
      <SliderImgs banners={banners} slidersToggle={slidersToggle} />
      <SlidersPagers
        banners={banners}
        setSlidersToggle={setSlidersToggle}
        slidersToggle={slidersToggle}
      />
    </div>
  );
};

export default Sliders;
