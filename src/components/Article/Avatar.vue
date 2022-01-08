<script lang="ts" setup>
import { Author } from "~~/src/@types/author"

type Props = {
    author: Author
}
const { author } = defineProps<Props>()
</script>

<template>
    <div class="flex items-center text-gray-600 px-2">
        <img :src="author.icon.url" class="w-7 h-7 mr-2" />
        <p class="text-md hover:underline">{{ author.name }}</p>
    </div>
</template>
