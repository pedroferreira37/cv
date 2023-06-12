/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        wiggle: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-4px)",
          },
        },
        shake: {
          "0%, 100%": {
            transform: "translateY(-2px)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          from: {
            transform: "translateY(20px)",
            opacity: 0,
            visibily: "hidden",
          },
          to: {
            transform: "translateY(0px)",
            opacity: 1,
            visibily: "visible",
          },
        },
        "slide-down": {
          from: {
            transform: "translateY(0px)",
            opacity: 1,
            visibility: "visible",
          },
          to: {
            transform: "translateY(20px)",
            opacity: 0,
            visibility: "hidden",
          },
        },
      },

      animation: {
        wiggle: "wiggle 0.4s ease-in-out infinite alternate",
        shake: "shake 1s ease-in-out infinite  ",
        "slide-up": "slide-up 0.2s ease-in-out forwards",
        "slide-down": "slide-down 0.2s ease-out  forwards",
      },

      colors: {
        dark: "#141414",
        "default-gray": "#eee",
      },
    },
  },
  plugins: [],
};
