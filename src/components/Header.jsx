import { Link, Outlet, useLocation } from "react-router-dom";

function NavLink({ to, label, location }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: location.pathname === to ? "underline" : "none",
        fontWeight: location.pathname === to ? "bold" : "normal",
        color: "black",
        display: "block",
        whiteSpace: "normal",
        wordBreak: "break-word",
      }}
    >
      {label}
    </Link>
  );
}

function NavList({ items, level = 0, location }) {
  return (
    <ul className="nav-menu" style={{ margin: 0, paddingLeft: `${level}rem` }}>
      {items.map((item) => (
        <li key={item.path || item.label} style={{ padding: 0 }}>
          {item.children ? (
            <details style={{ margin: "0.25rem 0" }}>
              <summary style={{ cursor: "pointer", listStyle: "none" }}>
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

const DEFAULT_NAV_ITEMS = [
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

function Header({ title, navItems = DEFAULT_NAV_ITEMS }) {
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
        <div
          style={{
            position: "absolute",
            left: "1rem",
            top: "0.5rem",
          }}
        >
          <details style={{ position: "relative" }}>
            <summary style={{ cursor: "pointer" }}>Navigate</summary>
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#fff",
                padding: "0.5rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                zIndex: 1,
                maxWidth: "30rem",
              }}
            >
              <NavList items={navItems} location={location} />
            </div>
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
