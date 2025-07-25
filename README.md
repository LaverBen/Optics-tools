# Optics Tools

This project contains a collection of small interactive tools for learning about optics.
It is built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).

## Available scripts

- `npm run dev` – start the development server with hot reload
- `npm run build` – create an optimized production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint against the source code
- `npm test` – run unit tests in watch mode
- `npm run coverage` – generate a coverage report

## Project structure

Source files live under [`src/`](src) and are grouped by feature. Pages are
stored under [`src/pages/`](src/pages) and reusable components under
[`src/components/`](src/components).

The interactive mirrors example is located in
[`src/pages/Reflection/Mirrors`](src/pages/Reflection/Mirrors).

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The application will be available at <http://localhost:5173> by default.

To run the test suite once and generate coverage:

```bash
npm test -- --run
npm run coverage
```
