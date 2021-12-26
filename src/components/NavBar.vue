<script setup lang="ts">
import { TransitionRoot } from "@headlessui/vue"
import { MenuIcon, SearchIcon } from "@heroicons/vue/solid"

var searchFieldHovered = ref(false)
var isMenuOpened = ref(false)

const toggleSearchField = () => {
    searchFieldHovered.value = !searchFieldHovered.value
}
const toggleMenu = () => {
    isMenuOpened.value = !isMenuOpened.value
}
</script>

<template>
    <div class="flex-col z-50">
        <div class="px-3 py-1 flex items-center justify-between border-b">
            <div class="w-72">
                <NuxtLink to="/" class="">
                    <img class="" src="@/assets/logo/svg/medium.svg" />
                </NuxtLink>
            </div>
            <div class="sm:hidden">
                <button
                    type="button"
                    class="flex flex-col h-12 w-12 rounded justify-center items-center group"
                    @click="isMenuOpened = !isMenuOpened"
                >
                    <div
                        :class="
                            isMenuOpened ? 'rotate-45 translate-y-2 opacity-100' : 'opacity-50 group-hover:opacity-100'
                        "
                        class="h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300"
                    />
                    <div
                        :class="isMenuOpened ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'"
                        class="h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300"
                    />
                    <div
                        :class="
                            isMenuOpened
                                ? '-rotate-45 -translate-y-2 opacity-100'
                                : 'opacity-50 group-hover:opacity-100'
                        "
                        class="h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300"
                    />
                </button>
            </div>
            <!-- ナビバーのボタンたち -->
            <div class="hidden sm:flex justify-around items-center space-x-6">
                <NuxtLink to="/about" class="">
                    <span class="">概要</span>
                </NuxtLink>
                <NuxtLink to="/about" class="">
                    <span class="">作品</span>
                </NuxtLink>
                <NuxtLink to="/about" class="">
                    <span class="">記事</span>
                </NuxtLink>
                <NuxtLink to="/about" class="">
                    <span class="">実績</span>
                </NuxtLink>
                <NuxtLink to="/about" class="">
                    <span class="">文化祭</span>
                </NuxtLink>
                <!-- TODO: これを押したらAlgoliaの検索のポップアップを出す -->
                <button
                    class="w-8 h-8 lg:w-24 lg:px-2 bg-stone-100 text-gray-600 hover:shadow-sm rounded-full border-2 border-transparent hover:border-primary flex justify-between items-center"
                    @click="toggleSearchField"
                >
                    <div class="w-5 mx-auto lg:mx-0">
                        <SearchIcon />
                    </div>
                    <p class="hidden lg:block my-auto">検索</p>
                </button>
            </div>
        </div>

        <!-- モバイル用でメニューを表示するとき -->
        <!-- TODO: 背景色は後でダークモード対応に -->
        <div class="sm:hidden absolute w-full shadow-lg bg-white">
            <TransitionRoot
                :show="isMenuOpened"
                enter="transition-transform  ease-in-out duration-75"
                enter-from="-translate-y-1 "
                enter-to="translate-y-0 "
                leave="transition-opacity  ease-in-out duration-75"
                leave-from="translate-y-0 "
                leave-to="-translate-y-1"
            >
                <div class="flex flex-col -z-20 divide-y">
                    <NavBarCol title="概要" to="/about" />
                    <NavBarCol title="作品" to="/about" />
                    <NavBarCol title="記事" to="/about" />
                    <NavBarCol title="実績" to="/about" />
                    <NavBarCol title="文化祭" to="/about" />
                </div>
            </TransitionRoot>
        </div>
    </div>
</template>

<style scoped></style>
