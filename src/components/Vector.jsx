import React from "react";

function Vector({
  x1,
  y1,
  x2,
  y2,
  stroke = "black",
  strokeWidth = 1,
  ...rest
}) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const size = 4 * Number(strokeWidth);
  const spread = Math.PI / 6; // 30 degree arrowhead

  const ax1 = x2 - size * Math.cos(angle - spread);
  const ay1 = y2 - size * Math.sin(angle - spread);
  const ax2 = x2 - size * Math.cos(angle + spread);
  const ay2 = y2 - size * Math.sin(angle + spread);

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}
      />
      <polygon
        points={`${x2},${y2} ${ax1},${ay1} ${ax2},${ay2}`}
        fill={stroke}
      />
    </g>
  );
}

export default Vector;
