export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui"],

  devtools: {
    enabled: true,
  },

  ui: {
    fonts: false,
  },

  css: ["~/assets/css/main.css", "~/assets/MiSans/mi-sans.css"],

  compatibilityDate: "2025-10-15",
});
