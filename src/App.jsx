import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reflection from "./pages/Reflection/Reflection";
import Mirrors from "./pages/Reflection/Mirrors/Mirrors";
import Concave_mirrors from "./pages/Reflection/Mirrors/Concave_mirrors";
import Convex_mirrors from "./pages/Reflection/Mirrors/Convex_mirrors";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="reflection" element={<Reflection />} />
        <Route path="reflection/mirrors" element={<Mirrors />} />
        <Route
          path="reflection/mirrors/concave_mirrors"
          element={<Concave_mirrors />}
        />
        <Route
          path="reflection/mirrors/convex_mirrors"
          element={<Convex_mirrors />}
        />
      </Route>
    </Routes>
  );
}

export default App;
