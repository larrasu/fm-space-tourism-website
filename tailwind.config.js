/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('~/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('~/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('~/assets/home/background-home-desktop.jpg')",
      },
      colors: {
        accent: "#0B0D17",
        primary: "#D0D6F9",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Bellefair", "serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
