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
    <PagesIndexLanguagesList />
    <div class="my-4 lg:mx-6 xl:mx-8">
        <IntroProgramming />
        <UIH2 id="music" title="音楽制作" />

        <UIH2 id="3dcg" title="3DCG" />

        <UIH2 id="art" title="デジタルアート" />
    </div>
</template>
