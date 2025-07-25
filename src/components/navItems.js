const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  {
    path: '/reflection',
    label: 'Reflection',
    children: [
      {
        path: '/reflection/mirrors',
        label: 'Mirrors',
        children: [
          {
            path: '/reflection/mirrors/concave-mirrors',
            label: 'Concave Mirrors',
          },
          {
            path: '/reflection/mirrors/convex-mirrors',
            label: 'Convex Mirrors',
          },
        ],
      },
    ],
  },
];

export default NAV_ITEMS;
