<script lang="ts" setup>
import NoNavBar from "../layouts/NoNavBar.vue"
</script>
<template>
    <NoNavBar>
        <Welcome copy="新しい\n世界に\n踏み込む" />
        <IndexLanguagesList />
        <div class="my-4 lg:mx-6 xl:mx-8">
            <IntroProgramming />
            <UIH2 id="music" title="音楽制作" />

            <UIH2 id="3dcg" title="3DCG" />

            <UIH2 id="art" title="デジタルアート" />
        </div>
    </NoNavBar>
</template>
