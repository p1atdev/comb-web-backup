<script lang="ts" setup>
type Props = {
    title: string
    description: string
    image?: URL
    path?: string
}

const { title, image, description, path } = defineProps<Props>()

const config = useRuntimeConfig()

const currentURL = config.BASE_URL + (path || "")

const ogImage = image?.href || config.BASE_URL + "/ogp/twitter.png"

useMeta({
    title: title,
    meta: [
        {
            name: "description",
            content: description,
        },
        {
            property: "og:title",
            content: title,
        },
        {
            property: "og:description",
            content: description,
        },
        {
            property: "og:url",
            content: currentURL,
        },
        {
            property: "og:image",
            content: ogImage,
        },
    ],
})
</script>
<template></template>
