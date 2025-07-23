import Header from "../../../components/Header";
import React, { useState, useRef } from "react";

const Mirrors = () => {
  const mirrorSize = 22;
  const rectangleSize = { x: 800, y: 400 + mirrorSize };
  const mirrorCentre = { x: rectangleSize.x / 2, y: mirrorSize };
  const arcDistance1 = 45;
  const arcDistance2 = 85;
  const circleRadius = 60;
  const circleSize = { width: circleRadius, height: circleRadius };

  const [position, setPosition] = useState({
    x: rectangleSize.x / 4,
    y: mirrorSize + (rectangleSize.y - mirrorSize) / 2,
  });
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newAngleRad = Math.atan(
      (mirrorCentre.x - x) / (y - mirrorCentre.y)
    );
    const newAngleDeg = (newAngleRad * 180) / Math.PI;

    // Restrict movement to the left half
    if (
      x < mirrorCentre.x &&
      x >= 0 &&
      y >= mirrorCentre.y &&
      y <= rect.height &&
      newAngleDeg <= 90 &&
      newAngleDeg >= 0
    ) {
      setPosition({ x, y });
    }
  };

  const getArcPath = (position, arcLength, reflection) => {
    const dx = mirrorCentre.x - position.x;
    const dy = position.y - mirrorCentre.y;

    const endX = mirrorCentre.x;
    const endY = mirrorCentre.y + arcLength;

    if (dy === 0) {
      if (reflection) {
        return `M ${mirrorCentre.x + arcLength} ${
          mirrorCentre.y
        } A ${arcLength} ${arcLength} 0 0 1 ${endX} ${endY}`;
      } else {
        return `M ${mirrorCentre.x - arcLength} ${
          mirrorCentre.y
        } A ${arcLength} ${arcLength} 0 0 0 ${endX} ${endY}`;
      }
    }

    const slope = dx / dy;
    const denominator = Math.sqrt(1 + Math.pow(slope, 2));

    const arcStartY = mirrorCentre.y + arcLength / denominator;
    if (reflection) {
      const arcStartX = mirrorCentre.x + (arcLength * slope) / denominator;
      return `M ${arcStartX} ${arcStartY} A ${arcLength} ${arcLength} 0 0 1 ${endX} ${endY}`;
    } else {
      const arcStartX = mirrorCentre.x - (arcLength * slope) / denominator;
      return `M ${arcStartX} ${arcStartY} A ${arcLength} ${arcLength} 0 0 0 ${endX} ${endY}`;
    }
  };

  const getReflection = () => {
    const dx = mirrorCentre.x - position.x;
    const dy = position.y - mirrorCentre.y;

    if (dy === 0)
      return (
        <line
          x1={mirrorCentre.x}
          y1={mirrorCentre.y}
          x2={mirrorCentre.x * 2}
          y2={mirrorCentre.y}
          stroke="red"
          strokeWidth="2"
        />
      );

    const slope = dx / dy;

    const x1 = mirrorCentre.x;
    const y1 = mirrorCentre.y;

    let y2 = rectangleSize.y;
    let x2 = x1 + (y2 - y1) * slope;

    if (x2 > rectangleSize.x) {
      x2 = rectangleSize.x;
      y2 = y1 + (x2 - x1) / slope;
    }

    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" strokeWidth="2" />
    );
  };

  const angleOfIncidenceRadians = Math.atan(
    (mirrorCentre.x - position.x) / (position.y - mirrorCentre.y)
  );
  const angleOfIncidenceDegrees = (angleOfIncidenceRadians * 180) / Math.PI;

  return (
    <div>
      <Header title="Mirrors" />
      <div style={{ padding: "2rem" }}>
        <p>Mirrors are reflecty things.</p>
        <p> Play with the reflecting mirror below!</p>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              width: `${rectangleSize.x}px`,
              height: `${rectangleSize.y}px`,
              display: "flex",
              border: "2px solid black",
              userSelect: "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "20px",
                backgroundColor: "#ffffff",
                borderBottom: "2px solid black",
                zIndex: 3,
              }}
            />
            <div
              style={{
                flex: 1,
                backgroundColor: "#f0f0f0",
                position: "relative",
              }}
            ></div>
            <div style={{ flex: 1, backgroundColor: "#ddd" }}></div>
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
            >
              <line
                x1={mirrorCentre.x}
                y1={mirrorCentre.y}
                x2={position.x}
                y2={position.y}
                stroke="red"
                strokeWidth="2"
              />
            </svg>
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
            >
              <line
                x1={position.x + circleSize.width / 2}
                y1={position.y}
                x2={position.x - circleSize.width / 2}
                y2={position.y}
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
            >
              <line
                x1={position.x}
                y1={position.y + circleSize.height / 2}
                x2={position.x}
                y2={position.y - circleSize.height / 2}
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
            >
              <path
                d={getArcPath(position, arcDistance1, false)}
                stroke="#fa3838"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div
              onMouseDown={handleMouseDown}
              style={{
                width: circleSize.width,
                height: circleSize.height,
                borderRadius: "50%",
                // backgroundColor: "blue",
                border: "1px solid black",
                position: "absolute",
                left: position.x - circleSize.width / 2,
                top: position.y - circleSize.height / 2,
                cursor: "grab",
              }}
            />
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
            >
              {getReflection()}
            </svg>
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
            >
              <path
                d={getArcPath(position, arcDistance2, true)}
                stroke="#fa3838"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div style={{ paddingLeft: "2rem" }}>
            <p>Angle of incidence: {angleOfIncidenceDegrees.toFixed(2)}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mirrors;
