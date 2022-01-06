<script setup lang="ts">
import "./assets/scss/global.scss"
import "./assets/scss/slide.scss"

import { useHead } from "@vueuse/head"

useHead({
    meta: [
        {
            property: "og:type",
            content: "website",
        },
        {
            name: "msapplication-TileColor",
            content: "#F6D000",
        },
        {
            name: "msapplication-config",
            content: "/favicon/browserconfig.xml",
        },
        {
            name: "theme-color",
            content: "#F6D000",
        },
        {
            property: "og_site_name",
            content: "海城コンピューター部",
        },
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
    link: [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/favicon/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon/favicon-16x16.png",
        },
        {
            rel: "manifest",
            href: "/favicon/site.webmanifest",
        },
        {
            rel: "mask-icon",
            href: "/favicon/safari-pinned-tab.svg",
            color: "#F6D000",
        },
        {
            rel: "shortcut icon",
            href: "/favicon/favicon.ico",
        },
        {
            rel: "alternate",
            type: "application/rss+xml",
            href: "/feed.xml",
        },
    ],
})
</script>

<template>
    <main>
        <router-view />
    </main>
</template>

<style></style>
