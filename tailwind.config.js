/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        // Default sans now uses Inter
        sans: ["Inter", "ui-sans-serif", "system-ui"],

        // Add custom fonts
        montserrat: ["Montserrat", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
