import "./box.css";
import { useState } from "react";
function Box({ value, onclick }) {
  let boxclass = value === "X" ? "box x" : "box o";
  return (
    <button className={boxclass} onClick={onclick}>
      {value}
    </button>
  );
}

export default Box;
