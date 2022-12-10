/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('~/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('~/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('~/assets/home/background-home-desktop.jpg')",

        "destination-mobile":
          "url('~/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('~/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('~/assets/destination/background-destination-desktop.jpg')",

        "crew-mobile": "url('~/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('~/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('~/assets/crew/background-crew-desktop.jpg')",

        "technology-mobile":
          "url('~/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('~/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('~/assets/technology/background-technology-desktop.jpg')",
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
