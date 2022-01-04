<script setup lang="ts">
import "./assets/scss/global.scss"
import "./assets/scss/slide.scss"
</script>

<template>
    <teleport to="head">
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </teleport>
    <router-view />
</template>

<style></style>
