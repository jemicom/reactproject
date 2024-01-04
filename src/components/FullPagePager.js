import React, { useState } from "react";
import "./FullPagePager.css";

const pagers = ["section1", "section2", "section3", "section4"];
const FullPagePager = () => {
  const [num, setNum] = useState();
  //   const mouseOverHandle = (index) => {};
  return (
    <div className="indecator_container">
      <div className="indecator">
        <ul>
          {pagers.map((pager, index) => (
            <li key={pager} className={num === index ? "active" : ""}>
              <a href={`#${pager}`} onClick={() => setNum(index)}>
                {pager}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
{
  /* <a href="#section1">section1</a>
        <a href="#section2">section2</a>
        <a href="#section3">section3</a>
        <a href="#section4">section4</a> */
}
export default FullPagePager;
