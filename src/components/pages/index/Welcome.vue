<script lang="ts" setup>
type Props = {
    copy: string
}

const { copy } = defineProps<Props>()

const getSentences = () => {
    return copy.split("\\n")
}

const isMounted = ref(false)

onMounted(() => {
    isMounted.value = true
})
</script>

<template>
    <div>
        <div class="relative">
            <ClientOnly>
                <!-- スマホ用リボン -->
                <img
                    class="mobile-ribbon absolute z-10 w-full pl-20 pt-20 sm:hidden"
                    src="@/assets/images/ribbon-sm.svg"
                />

                <!-- PC用リボン -->
                <img
                    class="pc-ribbon absolute hidden sm:block z-0 w-max lg:-mr-10 xl:-mr-20 mt-8 lg:mt-0 xl:-mt-10"
                    src="@/assets/images/ribbon-lg.svg"
                />
            </ClientOnly>
            <!-- キャッチコピー -->
            <div class="absolute w-max ml-14 sm:ml-20 lg:ml-36 xl:ml-48 mt-14 lg:mt-12 xl:mt-10 z-50" :strength="0">
                <div
                    class="font-bold text-4xl lg:text-5xl xl:text-6xl flex flex-col"
                    v-for="sentence in getSentences()"
                >
                    <span class="py-2 lg:py-3">{{ sentence }}</span>
                </div>
            </div>

            <!--  PC -->
            <div class="relative z-10 pl-24 sm:w-7/12 lg:w-6/12 sm:ml-auto mr-4 pt-48 sm:pt-10 lg:pt-0 xl:pr-24">
                <div v-show="!isMounted">
                    <img class="invisible" :width="596" :height="689" />
                </div>
                <ClientOnly>
                    <UIParallax :strength="10" :translate="true" :rotate="false">
                        <img :width="596" :height="689" src="@/assets/images/pc.webp" />
                    </UIParallax>
                </ClientOnly>
            </div>
        </div>

        <div class="px-3 py-3 flex items-center justify-between border-b">
            <NavBarItems class="w-full" :searchButtonClicked="() => {}" :hideItemsWhenSM="false" />
        </div>
    </div>
</template>

<style scoped>
.pc-ribbon {
    -webkit-mask-image: linear-gradient(to right, transparent 25%, black 75% 100%);
    mask-image: linear-gradient(to right, transparent 25%, black 75% 100%);
    mask-size: 400% 100%;
    mask-repeat: no-repeat;
    animation: pc-ribbon-mask 1.8s ease-in;
    animation-fill-mode: forwards;
    /* animation-delay: 1s; */
}

@keyframes pc-ribbon-mask {
    0% {
        mask-position: 0% 0%;
    }
    50% {
        mask-position: 25% 0%;
    }
    100% {
        mask-position: 100% 0%;
    }
}

.mobile-ribbon {
    -webkit-mask-image: linear-gradient(to top, transparent 25%, black 75% 100%);
    mask-image: linear-gradient(to top, transparent 25%, black 75% 100%);
    mask-size: 100% 400%;
    mask-repeat: no-repeat;
    animation: mobile-ribbon-mask 1.8s ease-in;
    animation-fill-mode: forwards;
    /* animation-delay: 1; */
}

@keyframes mobile-ribbon-mask {
    0% {
        mask-position: 0% 100%;
    }
    50% {
        mask-position: 0% 75%;
    }
    100% {
        mask-position: 0% 0%;
    }
}
</style>
