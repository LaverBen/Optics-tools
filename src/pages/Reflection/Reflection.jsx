import Header from "../../components/Header";
import Overview from "../../components/Overview";

function Reflection() {
  const keyInfo = [
    "When a light wave hits a smooth interface, it is partially reflected and partially refracted",
    "In reflection incident rays have the component of their direction perpendicular to the interface flipped",
    "The angle of reflection is equal to the angle of incidence",
  ];

  return (
    <div>
      <Header title="Reflection" />
      <div style={{ padding: "2rem" }}>
        <Overview list={keyInfo} />
        <p>Reflection is one of the key features of light propagation.</p>
      </div>
    </div>
  );
}

export default Reflection;
