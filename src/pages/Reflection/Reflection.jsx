import Header from "../../components/Header";
import Overview from "../../components/Overview";
import Ray from "../../components/Ray";

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
        <p>
          Reflection is one of the key features of light propagation. Whenever
          light encounters the interface between two different media a portion
          of that light is reflected and a portion is refracted. Reflection
          covers the element of the light that is re-directed towards the
          incident ray.
        </p>
        <div
          style={{
            left: 0,
            backgroundColor: "var(--color-header-bg)",
            padding: "0.5rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 1,
            width: "30rem",
          }}
        >
          <ul>
            <li>Incident ray</li>
            <ul>
              <li>The ray of light incoming to the interface</li>
            </ul>
            <li>Reflected ray</li>
            <ul>
              <li>The ray of light incoming to the interface</li>
            </ul>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "2rem",
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
              maxWidth: "100%",
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
              <Ray
                x2="0"
                y2="250"
                x1="210"
                y1="130"
                stroke="blue"
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
              <text x="105" y="35" fontSize="14" textAnchor="middle" fill="red">
                Incident ray
              </text>
              <text
                x="105"
                y="225"
                fontSize="14"
                textAnchor="middle"
                fill="blue"
              >
                Reflected ray
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reflection;
