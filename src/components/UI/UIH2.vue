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
        <router-link class="flex items-center group" :to="'#' + id" :href="'#' + id" v-smooth-scroll>
            <HashtagIcon
                class="block opacity-0 group-hover:opacity-100 border-b-2 border-transparent hover:border-primary w-9 fill-primary"
            />
            <span class="text-3xl border-b-2 border-black border-opacity-0 group-hover:border-opacity-40">{{
                title
            }}</span>
        </router-link>
    </div>
</template>
