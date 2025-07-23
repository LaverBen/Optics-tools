import { Link, Outlet, useLocation } from "react-router-dom";

function Header({ title }) {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home", level: 0 },
    { path: "/about", label: "About", level: 0 },
    { path: "/reflection", label: "Reflection", level: 0 },
    { path: "/reflection/mirrors", label: "Mirrors", level: 1 },
    {
      path: "/reflection/mirrors/concave-mirrors",
      label: "Concave Mirrors",
      level: 2,
    },
    {
      path: "/reflection/mirrors/convex-mirrors",
      label: "Convex Mirrors",
      level: 2,
    },
  ];

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
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {title}
        </div>
        <nav style={{ marginTop: "0.5rem" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.path} style={{ marginLeft: `${item.level}rem` }}>
                <Link
                  to={item.path}
                  style={{
                    textDecoration:
                      location.pathname === item.path ? "underline" : "none",
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                    color: "black",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
