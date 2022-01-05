<script lang="ts" setup>
import { ref } from "vue"

type Props = {
    title: string
    description?: string
    to: string
}
const { title, description, to } = defineProps<Props>()

var hover = ref(false)
</script>

<template>
    <router-link :to="to" class="" @mouseover="hover = true" @mouseleave="hover = false">
        <div class="bg-position-left-out px-4 py-3 group flex">
            <span class="text-lg font-semibold w-20">{{ title }}</span>
            <span class="">{{ description }}</span>
        </div>
    </router-link>
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
