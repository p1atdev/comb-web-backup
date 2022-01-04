<script setup lang="ts">
// import { TransitionRoot } from "@headlessui/vue"
import { ref } from "vue"

var searchFieldHovered = ref(false)
var isMenuOpened = ref(false)

const toggleSearchField = () => {
    searchFieldHovered.value = !searchFieldHovered.value
}
</script>

<template>
    <nav class="z-40 w-full">
        <div class="px-3 py-1 flex items-center justify-between border-b">
            <div class="">
                <router-link to="/">
                    <img class="sm:hidden h-12" src="../../assets/logo/svg/full-type2.svg" />
                    <img class="hidden sm:block h-12" src="../../assets/logo/svg/medium.svg" />
                </router-link>
            </div>
            <div class="sm:hidden">
                <!-- ボタンの参考元 -->
                <!-- https://konradstaniszewski.com/blog/tailwind-hamburger -->
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
            <NavBarItems :searchButtonClicked="toggleSearchField" :hideItemsWhenSM="true" />
        </div>

        <!-- モバイル用でメニューを表示するとき -->
        <!-- TODO: 背景色は後でダークモード対応に -->
        <div class="sm:hidden absolute w-full shadow-lg bg-white z-40">
            <transition name="menu">
                <div v-if="isMenuOpened" class="flex flex-col -z-20 divide-y">
                    <NavBarCol title="概要" to="/about" />
                    <NavBarCol title="作品" to="/about" />
                    <NavBarCol title="記事" to="/about" />
                    <NavBarCol title="実績" to="/about" />
                    <NavBarCol title="文化祭" to="/about" />
                </div>
            </transition>
        </div>
        <transition name="menu_bg">
            <div
                v-if="isMenuOpened"
                class="sm:hidden absolute w-full h-full bg-stone-800 bg-opacity-20"
                @click="isMenuOpened = false"
            />
        </transition>
    </nav>
</template>

<style lang="scss" scoped>
// モバイル用のメニュー
.menu-leave-active,
.menu-enter-active {
    @apply transition-transform ease-in-out duration-75;
}
.menu-enter-from {
    @apply -translate-y-4;
}

.menu-enter-to {
    @apply translate-y-0;
}

.menu-leave-from {
    @apply translate-y-0;
}

.menu-leave-to {
    @apply -translate-y-4;
}

// メニューの影
.menu_bg-leave-active,
.menu_bg-enter-active {
    @apply transition-opacity ease-in-out duration-150;
}
.menu_bg-enter-from {
    @apply opacity-0;
}

.menu_bg-enter-to {
    @apply opacity-100;
}

.menu_bg-leave-from {
    @apply opacity-100;
}

.menu_bg-leave-to {
    @apply opacity-0;
}
</style>
