<script lang="ts" setup>
import { HashtagIcon } from "@heroicons/vue/solid/index.js"

type Props = {
    id: string
    title: string
}
const { id, title } = defineProps<Props>()
</script>

<template>
    <div class="font-bold px-2 md:px-4 lg:px-10 xl:px-14" :id="id">
        <div class="flex items-center group">
            <NuxtLink class="" :to="'#' + id" :href="'#' + id" v-smooth-scroll>
                <HashtagIcon
                    class="w-8 block sm:opacity-0 hover:opacity-100 border-opacity-0 hover:border-opacity-100 border-b-2 border-primary fill-primary"
                />
            </NuxtLink>
            <span class="text-3xl">{{ title }}</span>
        </div>
    </div>
</template>
