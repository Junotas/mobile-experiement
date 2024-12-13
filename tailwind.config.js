/** @type {import('tailwindcss').Config} */
import fluid from 'tailwindcss-fluid';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    fluid(),
  ],
};
