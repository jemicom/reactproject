import React from "react";
import { Sliders, FullPagePager, SwiperSlider } from "../components";
import Tabs from "../components/Tabs";
import MotionSlider from "../components/MotionSlider";
// import FullPagePager from "../components/FullPagePager";

const Home = () => {
  const style = {
    // height: "2000px",
    background: "skyblue",
  };
  return (
    <div style={style}>
      <FullPagePager />
      <section id="section1">
        <Sliders />
      </section>
      <section id="section2">
        <Tabs />
      </section>
      <section id="section3">
        <div style={{ width: "500px", height: "300px" }}>
          <SwiperSlider />
        </div>
      </section>
      <section id="section4">
        <MotionSlider />
      </section>
    </div>
  );
};

export default Home;

// https://swiperjs.com/
// https://getbootstrap.com/docs/5.3/getting-started/introduction/
// https://tailwindcss.com/
// https://ant.design/
