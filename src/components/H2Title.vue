<script lang="ts" setup>
import { HashtagIcon } from "@heroicons/vue/solid/index.js"

type Props = {
    id: string
    title: string
}

const { id, title } = defineProps<Props>()
</script>

<template>
    <div class="flex font-bold items-center px-4 md:px-8 lg:px-10 xl:px-14">
        <a class="w-10" :href="'#' + id">
            <HashtagIcon class="fill-primary" />
        </a>
        <p class="text-3xl">{{ title }}</p>
    </div>
</template>
