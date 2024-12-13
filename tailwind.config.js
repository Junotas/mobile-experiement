/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind';

export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    extract, 
  },
  theme: {
    screens: {
      xs: '20rem', 
    },
    extend: {
      fluid: ({ theme }) => ({
        defaultScreens: ['20rem', theme('screens.lg')], 
      }),
    },
  },
  plugins: [fluid],
};
