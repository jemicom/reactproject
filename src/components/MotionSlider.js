import React, { useState } from "react";
import { motion } from "framer-motion";
import "./MotionSlider.css";

const MotionSlider = () => {
  const [num, setNum] = useState(2);
  return (
    <div>
      <motion.div className="slider" animate={{ x: num * -300 }}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </motion.div>

      <ul className="btns">
        {[0, 1, 2].map((a) => (
          <motion.li
            onClick={() => setNum(a)}
            className="btn"
            animate={{ backgroundColor: num === a ? "red" : "gray" }}
          >
            {a}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default MotionSlider;
