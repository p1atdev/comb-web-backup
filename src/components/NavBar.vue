<script setup lang="ts">
import { TransitionRoot } from "@headlessui/vue"

var searchFieldHovered = ref(false)
var isMenuOpened = ref(false)

const toggleSearchField = () => {
    searchFieldHovered.value = !searchFieldHovered.value
}
</script>

<template>
    <div class="flex-col z-50">
        <div class="px-3 py-1 flex items-center justify-between border-b">
            <div class="">
                <NuxtLink to="/" class="">
                    <img class="sm:hidden h-12" src="@/assets/logo/svg/full-type2.svg" />
                    <img class="hidden sm:block h-12" src="@/assets/logo/svg/medium.svg" />
                </NuxtLink>
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
