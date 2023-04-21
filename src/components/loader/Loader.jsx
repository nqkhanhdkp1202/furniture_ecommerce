import React from "react";

const Loader = ({width = 40, height = 40, color = "#dfcd50"}) => {
  return (
    <>
    <>
  {/*?xml version="1.0" encoding="utf-8"?*/}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: "auto",
      background: "rgb(255, 255, 255)",
      display: "block",
      shapeRendering: "auto"
    }}
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx={50}
      cy={50}
      fill="none"
      stroke={color}
      strokeWidth={8}
      r={35}
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
    {/* [ldio] generated by https://loading.io/ */}
  </svg>
</>

      </>
  );
};

export default Loader;
