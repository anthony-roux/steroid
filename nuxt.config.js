export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "steroid",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap",
      },
    ],
  },

  // customize the progress bar color
  loading: {
    color: "#00afef5a",
    failedColor: "red",
    height: "10px",
    duration: 5000,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/vuetify",
      {
        /* module options */
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://steroid-4e07e-default-rtdb.europe-west1.firebasedatabase.app",
  },

  router: {
    // linkActiveClass: 'active-link'
  },

  transition: {
    name: "fade",
    mode: "out-in",
  },

  publicRuntimeConfig: {
    assetsPath: process.env.NODE_ASSETS_PATH,
  },
};
