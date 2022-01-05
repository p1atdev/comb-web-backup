<script lang="ts" setup>
type Props = {
    title: string
    description?: string
    image?: URL
}

const { title, image } = defineProps<Props>()

const ogImage = image?.href || new URL("/ogp/twitter.png", import.meta.url).href
const currentURL = import.meta.url
</script>
<template>
    <teleport to="head">
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" :content="title" />
        <meta property="og:site_name" :content="title" />
        <meta property="og:description" :content="description" />
        <meta property="og:type" content="website" />
        <meta property="og:url" :content="currentURL" />
        <meta property="og:image" :content="ogImage" />
    </teleport>
</template>
