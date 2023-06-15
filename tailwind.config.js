/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "scale-out": {
          "0%": {
            transform: "scale(1)",
            opacty: 1,
          },
          "100%": {
            transform: "scale(0)",
            opacity: 0,
          },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0)",
            opacty: 0,
          },
          "50%": {
            transform: "scale(1.01)",
            opacty: 1,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
      animation: {
        "scale-in": "scale-in 0.4s linear forwards",
        "scale-out": "scale-out 0.4s linear forwards",
      },
      container: {
        center: true,
      },
      colors: {
        "dark-blue": "#24292f",
        "green-field": "#1a7f37",
      },
    },
  },
  plugins: [],
};
