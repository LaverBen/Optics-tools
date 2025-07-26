import Header from "../../../components/Header";
import Ray from "../../../components/Ray";
import React, { useState, useRef, useEffect } from "react";

const Mirrors = () => {
  const mirrorSize = 22;
  const getRectangleWidth = () => Math.min(800, window.innerWidth - 40);
  const [rectangleSize, setRectangleSize] = useState(() => ({
    x: getRectangleWidth(),
    y: 400 + mirrorSize,
  }));
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

  useEffect(() => {
    const handleResize = () => {
      setRectangleSize({ x: getRectangleWidth(), y: 400 + mirrorSize });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setPosition({
      x: rectangleSize.x / 4,
      y: mirrorSize + (rectangleSize.y - mirrorSize) / 2,
    });
  }, [rectangleSize.x, rectangleSize.y]);

  const handleMouseUp = () => handleEnd();
  const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);

  const handleTouchEnd = () => handleEnd();
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      const t = e.touches[0];
      handleMove(t.clientX, t.clientY);
      e.preventDefault();
    }
  };

  const addWindowListeners = () => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const removeWindowListeners = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  const handleStart = () => {
    setDragging(true);
    addWindowListeners();
  };

  const handleEnd = () => {
    setDragging(false);
    removeWindowListeners();
  };

  const handleMove = (clientX, clientY) => {
    if (!dragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const newAngleRad = Math.atan((mirrorCentre.x - x) / (y - mirrorCentre.y));
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

  const handleMouseDown = () => handleStart();

  const handleTouchStart = (e) => {
    e.preventDefault();
    handleStart();
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
        <Ray
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

    return <Ray x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" strokeWidth="2" />;
  };

  const angleOfIncidenceRadians = Math.atan(
    (mirrorCentre.x - position.x) / (position.y - mirrorCentre.y)
  );
  const angleOfIncidenceDegrees = (angleOfIncidenceRadians * 180) / Math.PI;

  const angleTextRadius1 = arcDistance1 + 10;
  const angleTextX1 =
    mirrorCentre.x - Math.sin(angleOfIncidenceRadians / 2) * angleTextRadius1;
  const angleTextY1 =
    mirrorCentre.y + Math.cos(angleOfIncidenceRadians / 2) * angleTextRadius1;

  const angleTextRadius2 = arcDistance2 + 10;
  const angleTextX2 =
    mirrorCentre.x + Math.sin(angleOfIncidenceRadians / 2) * angleTextRadius2;
  const angleTextY2 =
    mirrorCentre.y + Math.cos(angleOfIncidenceRadians / 2) * angleTextRadius2;

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
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              width: `${rectangleSize.x}px`,
              height: `${rectangleSize.y}px`,
              display: "flex",
              border: "2px solid black",
              userSelect: "none",
              position: "relative",
              overflow: "hidden",
              maxWidth: "100%",
              touchAction: "none",
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
              <Ray
                x2={mirrorCentre.x}
                y2={mirrorCentre.y}
                x1={position.x}
                y1={position.y}
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
              onTouchStart={handleTouchStart}
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
            {dragging && (
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
                <text
                  x={angleTextX1}
                  y={angleTextY1}
                  fontSize="14"
                  textAnchor="middle"
                  fill="black"
                >
                  {angleOfIncidenceDegrees.toFixed(2)}°
                </text>
                <text
                  x={angleTextX2}
                  y={angleTextY2}
                  fontSize="14"
                  textAnchor="middle"
                  fill="black"
                >
                  {angleOfIncidenceDegrees.toFixed(2)}°
                </text>
              </svg>
            )}
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
