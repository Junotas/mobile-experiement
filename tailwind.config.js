/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind';

export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    extract, // Required for Fluid Tailwind
  },
  theme: {
    screens: {
      xs: '20rem', // Add custom screens (optional)
    },
    extend: {
      fluid: ({ theme }) => ({
        defaultScreens: ['20rem', theme('screens.lg')], // Customize default start/end breakpoints
      }),
    },
  },
  plugins: [fluid],
};
