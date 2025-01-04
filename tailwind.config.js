import animatePlugin from 'tailwindcss-animate';
import { tailwindPlugin } from './src/tailwind';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [tailwindPlugin, animatePlugin],
};

module.exports = tailwindConfig;
