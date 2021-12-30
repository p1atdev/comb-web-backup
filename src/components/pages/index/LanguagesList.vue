<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css"

// devicon list
const devicons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
    "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/123b01d6a1700e326dc7c017d0d78a7383aa7b39/icons/brainfuck.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    "/icon/Xcode.png",
    "/icon/studio.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
]
</script>
<template>
    <!-- div with center text -->
    <div class="w-full h-full p-4 flex justify-center items-center">
        <p class="text-3xl font-semibold">創造。</p>
    </div>
    <div class="mt-2 my-5">
        <div class="flex w-full overflow-hidden rotate-1">
            <div class="devicons flex flex-nowrap space-x-1">
                <div class="inline-block w-20" v-for="index in devicons.length * 2" :key="index">
                    <img
                        class="object-contain select-none"
                        :src="devicons[(index - 1 + devicons.length) % devicons.length]"
                    />
                </div>
            </div>
        </div>
        <div class="flex w-full overflow-hidden rotate-1">
            <div class="devicons flex flex-nowrap space-x-1">
                <div class="inline-block w-20" v-for="index in devicons.length * 2" :key="index">
                    <img class="object-contain" :src="devicons[(index + 10 + devicons.length) % devicons.length]" />
                </div>
            </div>
        </div>
        <div class="flex w-full overflow-hidden rotate-1">
            <div class="devicons flex flex-nowrap space-x-1">
                <div class="inline-block w-20" v-for="index in devicons.length * 2" :key="index">
                    <img class="object-contain" :src="devicons[(index + 20 + devicons.length) % devicons.length]" />
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white text-lg mx-auto py-4 w-4/5 lg:w-3/5">
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum vel iusto similique inventore eos alias minus
            molestias, reiciendis repudiandae, culpa dignissimos itaque. Quia saepe eos officiis architecto inventore
            recusandae! Explicabo!
        </p>
    </div>

    <!-- TODO: change this button into some prensenting link -->
    <div class="w-full h-full flex justify-center items-center">
        <button
            class="
                border-2 border-primary
                rounded-xl
                transition-all
                hover:-translate-y-2 hover:shadow-xl hover:bg-primary hover:rounded-lg
            "
        >
            <p class="font-bold py-3 px-6">詳しく見る</p>
        </button>
    </div>
</template>

<style scoped>
.devicons {
    transform: translate(-1%, 0);
    animation: 100s devicons-scroll linear infinite;
}

@keyframes devicons-scroll {
    0% {
        transform: translate(-1%, 0);
    }
    100% {
        transform: translate(-51%, 0);
    }
}
</style>
