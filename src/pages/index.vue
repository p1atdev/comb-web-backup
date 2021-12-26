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
    <Welcome copy="新しい\n世界に\n踏み込む" />
    <div class="my-4">
        <IntroProgramming />

        <!-- <H2Title id="music" title="音楽制作" />

        <H2Title id="3dcg" title="3DCG" />

        <H2Title id="art" title="デジタルアート" /> -->
    </div>
</template>
