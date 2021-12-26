<script lang="ts" setup>
import { TransitionRoot } from "@headlessui/vue"
type Props = {
    title: string
    to: string
}

const { title, to } = defineProps<Props>()
</script>

<template>
    <NuxtLink :to="to" class="group">
        <span class="font-semibold px-1">{{ title }}</span>
        <div
            class="transition-all translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-primary h-1"
        ></div>
    </NuxtLink>
</template>
