<script setup lang="ts">
import "./assets/scss/global.scss"
import "./assets/scss/slide.scss"
import OG from "./components/OG.vue"
</script>

<template>
    <teleport to="head">
        <OG property="twitter:card" content="summary_large_image" />
        <OG property="twitter:site" content="@KaijoComputer" />
        <OG property="twitter:creator" content="@KaijoComputer" />
    </teleport>
    <router-view />
</template>

<style></style>
