import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
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
            { property: "og:site_name", content: "海城コンピューター部" },
            { property: "og:title", content: "海城コンピューター部" },
            { property: "og:description", content: "海城コンピューター部の公式Webサイトです" },
            { property: "og:type", content: "website" },
            { property: "og:url", content: process.env.BASE_URL },
            { property: "og:image", content: process.env.BASE_URL + "/assets/images/twitter-ogp.png" },
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
    buildModules: [],
    ssr: true,
    css: ["@/assets/css/global.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
        transpile: [],
    },
})
