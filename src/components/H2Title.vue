<script lang="ts" setup>
import { HashtagIcon } from "@heroicons/vue/solid/index.js"

type Props = {
    id: string
    title: string
}

const { id, title } = defineProps<Props>()
</script>

<template>
    <div class="font-bold px-4 md:px-8 lg:px-10 xl:px-14" :id="id">
        <NuxtLink class="flex items-center" :to="'#' + id" :href="'#' + id" v-smooth-scroll>
            <HashtagIcon class="w-10 fill-primary" />
            <p class="text-3xl">{{ title }}</p>
        </NuxtLink>
    </div>
</template>
