<script lang="ts" setup>
import NoNavBar from "../layouts/NoNavBar.vue"
import Meta from "../components/Meta.vue"
import Welcome from "../components/pages/Index/PagesIndexWelcome.vue"
</script>
<template>
    <Meta title="ホーム｜海城コンピューター部" description="海城コンピューター部の公式サイトです" />
    <NoNavBar>
        <PagesIndexWelcome copy="新しい\n世界に\n踏み込む" />
        <PagesIndexLanguagesList />
        <div class="my-4 lg:mx-6 xl:mx-8">
            <IntroProgramming />
            <UIH2 id="music" title="音楽制作" />

            <UIH2 id="3dcg" title="3DCG" />

            <UIH2 id="art" title="デジタルアート" />
        </div>
    </NoNavBar>
</template>
