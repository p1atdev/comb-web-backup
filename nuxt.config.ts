import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "海城コンピューター部",
        htmlAttrs: {
            lang: "ja",
            prefix: "og: http://ogp.me/ns#",
        },
        meta: [
            { charset: "utf-8" },
            { property: "viewport", name: "width=device-width, initial-scale=1" },
            {
                property: "twitter:card",
                content: "/assets/images/twitter-opg.png",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        components: true,
    },
})
