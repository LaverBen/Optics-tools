import { Link, Outlet, useLocation } from "react-router-dom";

function NavLink({ to, label, location }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: location.pathname === to ? "underline" : "none",
        fontWeight: location.pathname === to ? "bold" : "normal",
        color: "black",
      }}
    >
      {label}
    </Link>
  );
}

function NavList({ items, level = 0, location }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, paddingLeft: `${level}rem` }}>
      {items.map((item) => (
        <li key={item.path || item.label}>
          {item.children ? (
            <details>
              <summary style={{ cursor: "pointer" }}>
                <NavLink to={item.path} label={item.label} location={location} />
              </summary>
              <NavList items={item.children} level={level + 1} location={location} />
            </details>
          ) : (
            <NavLink to={item.path} label={item.label} location={location} />
          )}
        </li>
      ))}
    </ul>
  );
}

function Header({ title }) {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      path: "/reflection",
      label: "Reflection",
      children: [
        {
          path: "/reflection/mirrors",
          label: "Mirrors",
          children: [
            {
              path: "/reflection/mirrors/concave-mirrors",
              label: "Concave Mirrors",
            },
            {
              path: "/reflection/mirrors/convex-mirrors",
              label: "Convex Mirrors",
            },
          ],
        },
      ],
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
            position: "absolute",
            left: "1rem",
            top: "0.5rem",
          }}
        >
          <details>
            <summary style={{ cursor: "pointer" }}>Navigate</summary>
            <NavList items={navItems} location={location} />
          </details>
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
