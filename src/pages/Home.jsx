import { useState } from "react";
import Header from "../components/Header";

function Home() {
  const [count_click, setCountClick] = useState(0);
  const [count_hover, setCountHover] = useState(0);

  return (
    <div>
      <Header title="Optics Tools" />
      <div style={{ padding: "2rem" }}>
        <p>You clicked the button {count_click} times</p>
        <button onClick={() => setCountClick(count_click + 1)}>
          Click me, hovering does nothing
        </button>
        <p>You hovered over the other button {count_hover} times</p>
        <button onMouseOver={() => setCountHover(count_hover + 1)}>
          Hover over me, clicks do nothing
        </button>
      </div>
    </div>
  );
}

export default Home;
