<script lang="ts" setup>
const { data: articles } = await useFetch("/api/articles")
</script>

<template>
    <div class="py-8 lg:px-6">
        <LazyArticlePickUp :articles="articles" />
        <ArticleList :articles="articles" />
    </div>
</template>
