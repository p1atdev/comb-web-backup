<script lang="ts" setup>
import { ref } from "vue"

type Props = {
    title: string
    to: string
}
const { title } = defineProps<Props>()

var hover = ref(false)
</script>

<template>
    <!-- <NuxtLink :to="to" class="" @mouseover="hover = true" @mouseleave="hover = false"> -->
    <div :class="hover ? 'text-white' : ''" class="bg-position-left-out px-4 py-3 font-semibold">
        <span class="text-lg">{{ title }}</span>
        <span>{{ hover }}</span>
    </div>
    <!-- </NuxtLink> -->
</template>

<style scoped>
.bg-position-left-out {
    background-size: 200% 100%;
    background-image: linear-gradient(to right, #f6d000 50%, transparent 50%);
    -webkit-transition: background-position 0.4s;
    -moz-transition: background-position 0.4s;
    transition: background-position 0.4s;
    background-position: 100% 0;
}

.bg-position-left-out:hover {
    background-position: 0 0;
}
</style>
