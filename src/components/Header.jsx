import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import NAV_ITEMS from "./navItems";

function NavLink({ to, label, location }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: location.pathname === to ? "underline" : "none",
        fontWeight: location.pathname === to ? "bold" : "normal",
        color: "var(--color-nav-link)",
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
      <div
        style={{ display: "flex", alignItems: "center", margin: "0.25rem 0" }}
      >
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
        <NavItem
          key={item.path || item.label}
          item={item}
          level={level}
          location={location}
        />
      ))}
    </ul>
  );
}

const DEFAULT_NAV_ITEMS = NAV_ITEMS;

function Header({ title, navItems = DEFAULT_NAV_ITEMS }) {
  const location = useLocation();
  const detailsRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (detailsRef.current && detailsRef.current.open) {
        if (!detailsRef.current.contains(event.target)) {
          detailsRef.current.open = false;
        }
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "var(--color-header-bg)",
          paddingTop: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid var(--color-header-border)",
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
          <details ref={detailsRef} style={{ position: "relative" }}>
            <summary className="nav-summary">Navigate</summary>
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "var(--color-nav-bg)",
                padding: "0.5rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                zIndex: 1,
                width: "18rem",
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
