/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rampart: ["RampartOne-Regular"],
        rock_salt: ["RockSalt-Regular"],
        sans: ["Bariol Regular", "Bariol Bold", "sans-serif"],
        sans_bold: ["Bariol Bold", "sans-serif"],
      },
      colors: {
        primary: {
          // light: "#4574f4",
          DEFAULT: "#3f63aa",
          hover: "#3f63ff",
          // dark: "#1039a9",
        },
        secondary: {
          DEFAULT: "#4A837A",
        },
        danger: {
          DEFAULT: "#ff0000",
        },
        whiteMiddle: {
          DEFAULT: "#f6f9ff",
        },
        textPrimary: {
          DEFAULT: "#2d3748",
        },
      },
    },
  },
  plugins: [],
};
