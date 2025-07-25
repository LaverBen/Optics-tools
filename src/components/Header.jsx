import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

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

function NavItem({ item, level, location }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const [open, setOpen] = useState(false);

  return (
    <li style={{ padding: 0 }}>
      <div style={{ display: "flex", alignItems: "flex-start", margin: "0.25rem 0" }}>
        {hasChildren && (
          <button
            type="button"
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label={open ? "Collapse submenu" : "Expand submenu"}
            onClick={() => setOpen(!open)}
          />
        )}
        <NavLink to={item.path} label={item.label} location={location} />
      </div>
      {hasChildren && open && (
        <NavList items={item.children} level={level + 1} location={location} />
      )}
    </li>
  );
}

function NavList({ items, level = 0, location }) {
  return (
    <ul className="nav-menu" style={{ margin: 0, paddingLeft: `${level}rem` }}>
      {items.map((item) => (
        <NavItem key={item.path || item.label} item={item} level={level} location={location} />
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
          zIndex: 10,
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
            <summary className="nav-summary">Navigate</summary>
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#fff",
                padding: "0.5rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                zIndex: 1,
                width: "30rem",
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
