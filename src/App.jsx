import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reflection from "./pages/Reflection/Reflection";
import Mirrors from "./pages/Reflection/Mirrors/Mirrors";
import ConcaveMirrors from "./pages/Reflection/Mirrors/ConcaveMirrors";
import ConvexMirrors from "./pages/Reflection/Mirrors/ConvexMirrors";
import LongPageName from "./pages/LongPageName";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="long-page-name" element={<LongPageName />} />
        <Route path="reflection" element={<Reflection />} />
        <Route path="reflection/mirrors" element={<Mirrors />} />
        <Route
          path="reflection/mirrors/concave-mirrors"
          element={<ConcaveMirrors />}
        />
        <Route
          path="reflection/mirrors/convex-mirrors"
          element={<ConvexMirrors />}
        />
      </Route>
    </Routes>
  );
}

export default App;
