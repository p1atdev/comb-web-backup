import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    privateRuntimeConfig: {
        ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
        ALGOLIA_APP_KEY: process.env.ALGOLIA_APP_KEY,
        STRAPI_URL: process.env.STRAPI_URL || "http://localhost:1337",
    },
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL,
    },
    meta: {
        title: "海城コンピューター部",
        htmlAttrs: {
            lang: "ja",
            prefix: "og: http://ogp.me/ns#",
        },
        meta: [
            { charset: "utf-8" },
            { property: "viewport", name: "width=device-width, initial-scale=1" },
            { property: "og:type", content: "website" },
            { property: "og:image", content: process.env.BASE_URL + "/ogp/twitter.png" },
            {
                property: "twitter:card",
                content: "summary_large_image",
            },
            {
                property: "twitter:site",
                content: "@KaijoComputer",
            },
            {
                property: "twitter:creator",
                content: "@KaijoComputer",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    srcDir: "src/",
    buildModules: ["@nuxtjs/pwa", "@nuxtjs/sitemap", "@pinia/nuxt"],
    ssr: true,
    css: ["@/assets/css/global.scss", "@/assets/css/slide.scss", "vue-skeletor/dist/vue-skeletor.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },

        transpile: [],
    },
    vite: {
        css: { preprocessorOptions: { css: { charset: false } } },
    },
})
