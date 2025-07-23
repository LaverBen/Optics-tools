# Components

Reusable React components used across the application live in this directory.
Currently it contains a `Header` component that renders the page title and a
hierarchical navigation menu. The menu is hidden behind a dropdown and nested
subpages have their own dropdowns so the structure is easy to follow. When the
dropdown opens it appears on a white background that grows to fit whichever
submenus are expanded. Links are separated by light borders and highlight on
 hover, and long page names wrap automatically within a 30rem-wide container. The
`Header` accepts an optional `navItems` prop so tests can supply custom
navigation lists.
