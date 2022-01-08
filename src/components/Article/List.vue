<script lang="ts" setup>
import { Article } from "~~/src/@types/article"

type Prpos = {
    articles: Article[]
}

const { articles } = defineProps<Prpos>()
</script>

<template>
    <UIH2 id="new" title="最新記事" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-4 mx-8 md:mx-10 lg:mx-20">
        <div v-for="article in articles">
            <div class="flex flex-col">
                <!-- カバー画像 -->
                <img
                    :src="article.coverImage.url"
                    class="w-full h-64 object-contain transition-all hover:scale-105 ease-in-out"
                />
                <!-- 文字データなど -->
                <div class="px-1 py-2 hover:opacity-70">
                    <p class="text-xl font-semibold py-2">
                        {{ article.title }}
                    </p>
                    <p class="text-md">{{ article.description }}</p>
                    <div class="pt-3 flex space-x-2">
                        <img :src="article.author.icon.url" class="w-10 h-10 mr-1 object-contain" />
                        <div class="flex flex-col">
                            <p class="text-sm">{{ article.author.name }}</p>
                            <ArticleUpdateAt :date="article.updatedAt" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
