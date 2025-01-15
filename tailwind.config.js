/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair", "serif"],
        arabic: ['IBM Plex Sans Arabic', "sans-serif"],
        urdu: ["Noto Nastaliq Urdu", "serif"]
      },
    },
  },
  plugins: [require("daisyui")],
};
