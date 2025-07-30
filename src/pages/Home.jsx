import { useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NAV_ITEMS from "../components/navItems";

function flatten(items) {
  return items.reduce((acc, item) => {
    if (item.path) {
      acc.push({ path: item.path, label: item.label });
    }
    if (item.children) {
      acc.push(...flatten(item.children));
    }
    return acc;
  }, []);
}

function Home() {
  const bricks = useMemo(() => {
    const pages = flatten(NAV_ITEMS).filter((p) => p.path !== "/");
    for (let i = pages.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [pages[i], pages[j]] = [pages[j], pages[i]];
    }
    return pages.map((p) => {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 40) + 60;
      const lightness = Math.floor(Math.random() * 40) + 30;
      return {
        ...p,
        bg: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        color: lightness > 50 ? "#000" : "#fff",
      };
    });
  }, []);

  return (
    <div>
      <Header title="Optics Tools" />
      <div className="brick-grid">
        {bricks.map((b) => (
          <Link
            key={b.path}
            to={b.path}
            className="brick"
            style={{
              backgroundColor: b.bg,
              color: b.color,
            }}
          >
            {b.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
