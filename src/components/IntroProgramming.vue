<script lang="ts" setup>
import SwiperCore, { EffectCards } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

// install Swiper modules
SwiperCore.use([EffectCards])
</script>

<template>
    <H2Title id="programming" title="プログラミング" />

    <div class="px-8 xl:px-12">
        <div class="px-8 md:px-10 xl:px-12 py-4 md:float-left md:w-1/2">
            <swiper class="w-full" :effect="'cards'" :grabCursor="true">
                <swiper-slide>
                    <img src="@/assets/images/nuxt.png" />
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/xcode.png" />
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/js.png" />
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/python.png" />
                </swiper-slide>
            </swiper>
        </div>
        <p class="p-3 text-md">
            吾輩は猫である。名前はまだ無い。<br />
            　どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。
        </p>
    </div>
</template>
<style scoped>
.swiper {
    background-color: transparent;
}
.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
}
.swiper-slide:nth-child(1n) {
    background-color: rgba(255, 216, 0, 0.1);
}

.swiper-slide:nth-child(2n) {
    background-color: rgba(255, 216, 0, 0.1);
}

.swiper-slide:nth-child(3n) {
    background-color: rgba(255, 216, 0, 0.1);
}

.swiper-slide:nth-child(4n) {
    background-color: rgba(255, 216, 0, 0.1);
}
.swiper-slide:nth-child(5n) {
    background-color: rgba(255, 216, 0, 0.1);
}

.swiper-slide:nth-child(6n) {
    background-color: rgba(1, 1, 1, 0);
}

.swiper-slide:nth-child(7n) {
    background-color: transparent;
}

.swiper-slide:nth-child(8n) {
    background-color: transparent;
}

.swiper-slide:nth-child(9n) {
    background-color: transparent;
}

.swiper-slide:nth-child(10n) {
    background-color: transparent;
}
</style>
