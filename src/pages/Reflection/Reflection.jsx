import Header from "../../components/Header";
import Overview from "../../components/Overview";
import Ray from "../../components/Ray";
import Vector from "../../components/Vector";
import Equation from "../../components/Equation";
import EquationReference from "../../components/EquationReference";

function Reflection() {
  const keyInfo = [
    "When a light wave hits a smooth interface, it is partially reflected and partially refracted",
    "In reflection incident rays have the component of their direction perpendicular to the interface flipped",
    "The angle of reflection is equal to the angle of incidence",
  ];

  return (
    <div>
      <Header title="Reflection" />
      <div className="page_content">
        <Overview list={keyInfo} />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "260px",
              position: "relative",
              border: "2px solid black",
              userSelect: "none",
              minWidth: "300px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "70%",
                backgroundColor: "rgba(85, 200, 260, 0.5)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                width: "30%",
                backgroundColor: "rgba(255, 0, 190, 0.5)",
              }}
            />
            <svg
              width="100%"
              height="100%"
              overflow="visible"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
            >
              <Ray
                x1="0"
                y1="0"
                x2="210"
                y2="130"
                stroke="red"
                strokeWidth="2"
              />
              <Ray
                x2="0"
                y2="260"
                x1="210"
                y1="130"
                stroke="blue"
                strokeWidth="2"
              />
              <text x="105" y="35" fontSize="14" textAnchor="middle" fill="red">
                Incident ray
              </text>
              <text
                x="105"
                y="235"
                fontSize="14"
                textAnchor="middle"
                fill="blue"
              >
                Reflected ray
              </text>
            </svg>
          </div>
          <div style={{ paddingLeft: "2rem" }}>
            <p>
              <b>Reflection</b> is one of the key features of light propagation.
              Whenever light encounters the interface between two different
              media{" "}
              <b>
                a portion of that light is reflected and a portion is refracted
              </b>
              . Reflection covers the element of the light that is re-directed
              towards the incident ray.
            </p>
            <div
              style={{
                left: 0,
                backgroundColor: "var(--color-header-bg)",
                padding: "1rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                zIndex: 1,
                width: "30rem",
                marginTop: "2rem",
              }}
            >
              <ul>
                <li>
                  <b>Incident ray</b>
                </li>
                <ul>
                  <li>The ray of light incoming to the interface</li>
                </ul>
                <li>
                  <b>Reflected ray</b>
                </li>
                <ul>
                  <li>The ray of light travelling away from the interface</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: `300px`,
              height: `260px`,
              display: "flex",
              border: "2px solid black",
              userSelect: "none",
              position: "relative",
              minWidth: "300px",
            }}
          >
            <div
              style={{
                width: `70%`,
                backgroundColor: "rgba(85, 200, 260, 0.5)",
                position: "relative",
              }}
            ></div>
            <div
              style={{
                width: `30%`,
                backgroundColor: "rgba(255, 0, 190, 0.5)",
              }}
            ></div>
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
              <Vector
                x2="0"
                y2="130"
                x1="210"
                y1="130"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="210"
                y1="0"
                x2="210"
                y2="260"
                stroke="white"
                strokeWidth="2"
              />
              <text
                x="220"
                y="135"
                fontSize="20"
                textAnchor="middle"
                fill="white"
                transform="rotate(90, 220, 135)"
              >
                Interface
              </text>
              <text
                x="105"
                y="115"
                fontSize="20"
                textAnchor="middle"
                fill="black"
              >
                Normal
              </text>
            </svg>
          </div>
          <div style={{ paddingLeft: "2rem" }}>
            <p>
              Reflection causes the component of the light ray in the direction
              of the normal to be inverted. The 'normal' refers to the direction
              which meets the interface at exactly 90° (the orthogonal
              direction). All other components of the light ray remain the same.
            </p>
            <p>
              From this principle we can derive the <b>law of reflection </b>
              <EquationReference id="eq-law-reflection" number={1} />.
            </p>
            <Equation id="eq-law-reflection" number={1}>
              {"\\theta_i = \\theta_r"}
            </Equation>
          </div>
          <div
            style={{
              width: `300px`,
              height: `260px`,
              display: "flex",
              border: "2px solid black",
              userSelect: "none",
              position: "relative",
              minWidth: "300px",
              marginLeft: "2rem",
            }}
          >
            <div
              style={{
                flex: 7,
                backgroundColor: "rgba(85, 200, 260, 0.5)",
                position: "relative",
              }}
            ></div>
            <div
              style={{ flex: 3, backgroundColor: "rgba(255, 0, 190, 0.5)" }}
            ></div>
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
                x1="0"
                y1="0"
                x2="210"
                y2="130"
                stroke="black"
                strokeWidth="2"
              />
              <Ray
                x2="0"
                y2="260"
                x1="210"
                y1="130"
                stroke="black"
                strokeWidth="2"
              />
              <Vector
                x1="105"
                y1="65"
                x2="155"
                y2="65"
                stroke="red"
                strokeWidth="2"
              />
              <Vector
                x1="105"
                y1="65"
                x2="105"
                y2="115"
                stroke="blue"
                strokeWidth="2"
              />
              <Vector
                x1="105"
                y1="195"
                x2="55"
                y2="195"
                stroke="red"
                strokeWidth="2"
              />
              <Vector
                x1="105"
                y1="195"
                x2="105"
                y2="245"
                stroke="blue"
                strokeWidth="2"
              />
              <text x="125" y="55" fontSize="16" textAnchor="middle" fill="red">
                +x
              </text>
              <text x="85" y="185" fontSize="16" textAnchor="middle" fill="red">
                -x
              </text>
              <text x="85" y="90" fontSize="16" textAnchor="middle" fill="blue">
                +y
              </text>
              <text
                x="120"
                y="225"
                fontSize="16"
                textAnchor="middle"
                fill="blue"
              >
                +y
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reflection;
