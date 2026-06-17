# HAAT_BAZAR

HAAT_BAZAR is a React + Vite e-commerce storefront UI built with modern libraries and styling tools. It is designed as a landing page for product categories, flash sales, and featured items.

**Live Demo:** [https://haat-bazar-ecommerces.vercel.app/](https://haat-bazar-ecommerces.vercel.app/)

## Key Features

- React 19 with functional components and JSX
- Vite for fast development and production builds
- Tailwind CSS for utility-first styling
- Material UI (`@mui/material`) for reusable UI controls
- React Router for page routing
- React Icons for scalable iconography
- Simple e-commerce category and flash sale layout

## Project Structure

- `src/App.jsx` — main router setup
- `src/pages/Home.jsx` — home page content and sections
- `src/layout/RootLayout.jsx` — shared page layout wrapper
- `src/components` — reusable UI components
- `src/assets` — image and asset files

## Setup and Usage

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Preview production build locally:

```bash
npm run build
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Dependencies

- `react`
- `react-dom`
- `react-router`
- `@mui/material`
- `@emotion/react`
- `@emotion/styled`
- `tailwindcss`
- `react-icons`

## Notes

This repository currently provides the UI and routing structure for the storefront. You can extend it with product data, shopping cart state, API integration, and authentication as needed.
