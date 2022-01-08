<script lang="ts" setup>
import { Article } from "~~/src/@types/article"
import { Skeletor } from "vue-skeletor"
import Avatar from "./Avatar.vue"

type Props = {
    articles: Article[]
}

const { articles } = defineProps<Props>()

// rondom pickup article from articles
const randomArticle: Article = (() => {
    const randomIndex = Math.floor(Math.random() * articles.length)
    return articles[randomIndex]
})()
</script>

<template>
    <UIH2 id="pickup" title="ピックアップ記事" />
    <div
        class="mx-8 md:mx-auto my-8 lg:my-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl flex flex-col md:flex-row space-x-4 cursor-pointer"
    >
        <div class="flex-grow flex flex-col md:max-w-md lg:max-w-none group">
            <div class="group-hover:opacity-70">
                <!-- タイトル -->
                <p v-if="randomArticle.title" class="text-2xl font-semibold">
                    {{ randomArticle.title }}
                </p>
                <Skeletor v-else />
            </div>
            <div class="flex grow group-hover:opacity-70">
                <!-- 説明 -->
                <p v-if="randomArticle.description" class="flex-grow text-lg py-4 md:px-2">
                    {{ randomArticle.description }}
                </p>
                <Skeletor v-else />
            </div>

            <div class="felx">
                <!-- 著者情報とか日付とか -->
                <div class="flex items-center flex-row-reverse">
                    <!-- 著者 -->
                    <Avatar :author="randomArticle.author" />

                    <!-- 最終更新 -->
                    <ArticleUpdateAt :date="randomArticle.updatedAt" />
                </div>
            </div>
        </div>
        <div class="flex-shrink mx-auto md:w-8/12 transition-all hover:scale-105 ease-in-out">
            <img
                v-if="randomArticle.coverImage.url"
                class="m-2 rounded"
                :src="randomArticle.coverImage.url"
                alt="ピックアップ記事のカバー画像"
            />
            <Skeletor v-else />
        </div>
    </div>
</template>
