// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Frontend Mentor | Space Tourism Website",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
  googleFonts: {
    families: {
      Bellefair: true,
      Barlow: [400, 700],
      "Barlow+Condensed": [400, 700],
    },
  },
});
