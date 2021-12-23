import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    env: {
        baseUrl: process.env.BASE_URL || "http://localhost:3000",
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
            { property: "og:description", content: "海城コンピューター部の公式サイトです" },
            { property: "og:type", content: "website" },
            { property: "og:url", content: "https://kaijocomputer.github.io" },
            { property: "og:image", content: process.env.baseUrl + "/assets/images/twitter-ogp.png" },
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
        components: true,
    },
})
