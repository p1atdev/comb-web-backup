<script lang="ts">
export default {
    layout: "nonavbar",
}
</script>

<script lang="ts" setup>
useMeta({
    title: "ホーム｜海城コンピューター部",
    meta: [
        {
            property: "description",
            content: "海城コンピューター部の公式Webサイトのホームです",
        },
        {
            property: "og:title",
            content: "ホーム｜海城コンピューター部",
        },
    ],
})
</script>

<template>
    <h1>This is the index</h1>
    <p>OGP画像</p>
    <img src="@/assets/ogp/twitter.png" />
</template>
