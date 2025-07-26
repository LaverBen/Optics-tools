import React from "react";

function Ray({ x1, y1, x2, y2, stroke = "black", strokeWidth = 1, ...rest }) {
  const mx = (Number(x1) + Number(x2)) / 2;
  const my = (Number(y1) + Number(y2)) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const size = 4 * Number(strokeWidth);
  const spread = Math.PI / 6; // 30 degree arrowhead

  const ax1 = mx - size * Math.cos(angle - spread);
  const ay1 = my - size * Math.sin(angle - spread);
  const ax2 = mx - size * Math.cos(angle + spread);
  const ay2 = my - size * Math.sin(angle + spread);

  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={strokeWidth} {...rest} />
      <polygon points={`${mx},${my} ${ax1},${ay1} ${ax2},${ay2}`} fill={stroke} />
    </g>
  );
}

export default Ray;
