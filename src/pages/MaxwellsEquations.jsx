import Equation from "../components/Equation";
import Header from "../components/Header";
import Overview from "../components/Overview";

function MaxwellsEquations() {
  const keyInfo = [
    "Maxwell's equations describe the relationships between electric and magnetic fields",
    "This is important in optics as light is electromagnetic radiation. This means it is a wave comprised of electric field and magnetic field",
    "Maxwell's equations of electromagnetism are:",
    "Gauss's law for electric field",
    "Gauss's law for magnetic field",
    "Faraday's law",
    "Ampère-Maxwell law",
  ];
  return (
    <div>
      <Header title="Maxwells Equations" />
      <div className="page_content">
        <Overview list={keyInfo} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            width: "100%",
            height: "400px",
            border: "2px solid black",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid black",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              Gauss's Law for Electric Field
            </h2>
            <Equation id="equation1" number={1}>
              {
                "\\oint \\vec{\\mathrm{E}} \\cdot \\mathrm{d} \\vec{\\mathrm{A}} \\mathrm{=} \\frac{\\mathrm{Q}_\\mathrm{encl}}{\\mathrm{\\epsilon}_\\mathrm{0}}"
              }
            </Equation>
          </div>
          <div
            style={{
              backgroundColor: "rgba(200, 200, 200, 0.5)",
              border: "1px solid black",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              Gauss's Law for Magnetic Field
            </h2>
            <Equation id="equation2" number={2}>
              {
                "\\oint \\vec{\\mathrm{B}} \\cdot \\mathrm{d} \\vec{\\mathrm{A}} \\mathrm{=} \\mathrm{0}"
              }
            </Equation>
          </div>
          <div
            style={{
              backgroundColor: "rgba(200, 200, 200, 0.5)",
              border: "1px solid black",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Faraday's Law</h2>
            <Equation id="equation3" number={3}>
              {
                "\\oint \\vec{\\mathrm{E}} \\cdot \\mathrm{d} \\vec{\\mathrm{l}} \\mathrm{=} \\mathrm{-} \\frac{\\mathrm{d} \\mathrm{\\Phi}_\\mathrm{B}}{\\mathrm{dt}}"
              }
            </Equation>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid black",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Ampère-Maxwell Law</h2>
            <Equation id="equation4" number={4}>
              {
                "\\oint \\vec{\\mathrm{B}} \\cdot \\mathrm{d} \\vec{\\mathrm{l}} \\mathrm{=} \\mathrm{\\mu}_\\mathrm{0} (\\mathrm{i}_\\mathrm{C} + \\mathrm{\\epsilon}_\\mathrm{0} \\frac{\\mathrm{d} \\mathrm{\\Phi}_\\mathrm{E}}{\\mathrm{dt}})_\\mathrm{encl}"
              }
            </Equation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaxwellsEquations;
