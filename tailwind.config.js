/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        unbounded: ["Unbounded"],
      },
      colors: {
        "polkadot-pink": "#E6007A",
      },
    },
  },
  plugins: [],
};
