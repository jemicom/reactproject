import React from "react";
import img1 from "../assets/img_banner1_1.jpg";
// 이미지가 많은 경우 관리 힘들어지고

import banners from "../constants";

const Home = () => {
  const style = {
    height: "2000px",
    background: "skyblue",
  };
  return (
    <div style={style}>
      <div className="indecator">
        <a href="#section1">section1</a>
        <a href="#section2">section2</a>
        <a href="#section3">section3</a>
        <a href="#section4">section4</a>
      </div>
      <section id="section1">
        <img src="./images/img_banner1_1.jpg" />
        {/* public 폴더에 images 폴더 사용, 코드가 지저분해지고 */}
      </section>
      <section id="section2">
        <img src={img1} />
      </section>
      <section id="section3">
        <img src={banners[0]} />
      </section>
      <section id="section4">
        {banners.map((banner) => (
          <img src={banner} />
        ))}
      </section>
    </div>
  );
};

export default Home;
