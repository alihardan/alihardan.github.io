// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/style.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@nuxt/content"],
  // features: {
  //   inlineStyles: false,
  //   noScripts: true
  // },
  // experimental: {
  //   payloadExtraction: false
  // }
})