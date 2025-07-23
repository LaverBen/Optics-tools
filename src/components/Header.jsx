import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "#f0f0f0ff",
          paddingTop: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid #ccc",
        }}
      >
        <div style={{ position: "absolute", left: "1rem", top: "0.5rem" }}>
          <select
            value={location.pathname}
            onChange={(e) => navigate(e.target.value)}
          >
            <option value="/">→ Home</option>
            <option value="/about">→ About</option>
            <option value="/reflection">→ Reflection</option>
            <option value="/reflection/mirrors">→ → Mirrors</option>
            <option value="/reflection/mirrors/concave-mirrors">
              → → → Concave Mirrors
            </option>
            <option value="/reflection/mirrors/convex-mirrors">
              → → → Convex Mirrors
            </option>
          </select>
        </div>

        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {title}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
