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
        shake: {
          "0%, 100%": {
            transform: "translateY(-2px)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        wiggle: "wiggle 0.4s ease-in-out infinite alternate",
        shake: "shake 1s ease-in-out infinite  ",
      },

      colors: {
        "green-default": "#1F883D",
        "green-hover": "#219141",
        "default-gray": "#eee",
      },
    },
  },
  plugins: [],
};
