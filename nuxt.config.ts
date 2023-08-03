import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  routeRules: {
    "/": {
      redirect: "/sign-in",
    },
  },
  runtimeConfig: {
    public: {
      requestUrl: "https://dummyjson.com",
    },
  },
  css: [
    "~/assets/scss/tailwind.scss",
    "~/assets/scss/reset.scss",
    "~/assets/scss/global.scss",
  ],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  alias: {
    icons: resolve(__dirname, "~/assets/icons"),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/variables.scss";
          `,
        },
      },
    },
  },
});
