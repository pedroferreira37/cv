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
        wiggle: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-4px)",
          },
        },
      },

      animation: {
        wiggle: "wiggle 0.6s ease-in-out infinite alternate",
      },

      colors: {
        "green-default": "#1F883D",
        "green-hover": "#219141",
      },
    },
  },
  plugins: [],
};
