<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"
</script>

<template>
    <UIH2 id="programming" title="プログラミング" />

    <div class="px-8 xl:px-12 md:flex w-full">
        <div class="px-8 md:px-10 py-4 w-full sm:w-4xl">
            <Carousel
                class="w-full"
                :items-to-show="1.5"
                :autoplay="2500"
                :wrapAround="true"
                :pauseAutoplayOnHover="true"
            >
                <Slide key="1">
                    <Previewable>
                        <img src="@/assets/images/nuxt.webp" />
                    </Previewable>
                </Slide>
                <Slide key="2">
                    <Previewable>
                        <img src="@/assets/images/xcode.webp" />
                    </Previewable>
                </Slide>
                <Slide key="3">
                    <Previewable>
                        <img src="@/assets/images/js.webp" />
                    </Previewable>
                </Slide>
                <Slide key="4">
                    <Previewable>
                        <img src="@/assets/images/python.webp" />
                    </Previewable>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
        <p class="p-3 text-md md:w-3/5 min-w-min">
            吾輩は猫である。名前はまだ無い。<br />
            　どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。
        </p>
    </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/global.scss";
</style>
