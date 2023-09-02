/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./guides/**/*.html",
    "./maxpups/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "blorange-100": "#a29bfe",
        "blorange-200": "#bc92f4",
        "blorange-300": "#d28ae7",
        "blorange-400": "#e481d8",
        "blorange-500": "#f379c6",
        "blorange-600": "#fd73b2",
        "blorange-700": "#ff6f9d",
        "blorange-800": "#ff6f88",
        "blorange-900": "#ff7173",
        "blorange-1000": "#ff765e",
      },
    },
  },
  plugins: [],
};
