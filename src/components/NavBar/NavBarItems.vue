<script lang="ts" setup>
import { SearchIcon } from "@heroicons/vue/solid/index.js"

type Props = {
    searchButtonClicked: () => void
    hideItemsWhenSM: boolean
}

const { searchButtonClicked, hideItemsWhenSM } = defineProps<Props>()
</script>

<template>
    <div
        :class="hideItemsWhenSM ? 'hidden' : 'flex'"
        class="sm:flex justify-around items-center space-x-6 lg:mx-8 xl:mx-12"
    >
        <NavBarItemsRow title="概要" to="/about" />
        <NavBarItemsRow title="作品" to="/about" />
        <NavBarItemsRow title="記事" to="/about" />
        <NavBarItemsRow title="実績" to="/about" />
        <NavBarItemsRow title="文化祭" to="/about" />
        <!-- TODO: これを押したらAlgoliaの検索のポップアップを出す -->
        <button
            class="w-8 h-8 lg:w-24 lg:px-2 bg-stone-100 text-gray-600 hover:shadow-sm rounded-full border-2 border-transparent hover:border-primary flex justify-between items-center"
            @click="searchButtonClicked"
        >
            <div class="w-5 mx-auto lg:mx-0">
                <SearchIcon />
            </div>
            <p class="hidden lg:block my-auto">検索</p>
        </button>
    </div>
</template>
