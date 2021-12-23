<script lang="tsx" setup>
useMeta({
    title: "Hello World",
    meta: [
        {
            property: "description",
            content: "This is a example of a meta description",
        },
        {
            property: "og:title",
            content: "Hello, World",
        },
        { property: "og:image", content: process.env.baseUrl + "/assets/images/twitter-ogp.png" },
    ],
})
</script>
<template>
    <h1>This is the index</h1>
    <img src="@/assets/images/twitter-ogp.png" />
</template>
