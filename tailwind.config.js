/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      dropShadow: {
        c: "0 1px 1px rgba(0, 0, 0, 0.50)",
      },
      fontFamily: {
        custom: ["Ubuntu", "sans-serif"],
      },
      height: {
        89: "89%",
        "2x": "200vh",
        720: "720px",
      },
      width: {
        plan: "600px",
      },
      zIndex: {
        negative: "-10",
      },
      colors: {
        "b-trans": "rgba(0, 0, 0, 0.5)",
        smart: "#004BA0",
      },
      spacing: {
        negative: "-24rem",
        upper: "0vh",
      },
    },
  },
  plugins: [],
};
