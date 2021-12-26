<script lang="ts" setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis"

type Props = {
    copy: string
}

const { copy } = defineProps<Props>()

const getSentences = () => {
    return copy.split("\\n")
}
</script>

<template>
    <kinesis-container class="relative">
        <!-- スマホ用リボン -->
        <img class="absolute z-10 w-full pl-20 pt-20 sm:hidden" src="@/assets/images/ribbon-sm.svg" />

        <!-- PC用リボン -->
        <img
            class="absolute hidden sm:block z-0 w-max lg:-mr-10 xl:-mr-20 mt-8 lg:mt-0 xl:-mt-10"
            src="@/assets/images/ribbon-lg.svg"
        />

        <!-- キャッチコピー -->
        <div class="absolute w-max ml-14 sm:ml-20 lg:ml-36 xl:ml-48 mt-14 lg:mt-12 xl:mt-10 z-50" :strength="0">
            <div class="font-bold text-4xl lg:text-5xl xl:text-6xl flex flex-col" v-for="sentence in getSentences()">
                <span class="py-2 lg:py-3">{{ sentence }}</span>
            </div>
        </div>

        <!--  PC -->
        <kinesis-element
            class="relative z-10 pl-24 sm:w-7/12 lg:w-6/12 sm:ml-auto mr-4 pt-48 sm:pt-10 lg:pt-0 xl:pr-24"
            :strength="10"
        >
            <img class="" src="@/assets/images/pc.png" />
        </kinesis-element>
    </kinesis-container>

    <kinesis-container>
        Here, you can put
        <kinesis-element :strength="10"> whatever </kinesis-element>
        <kinesis-element :strength="20"> content! </kinesis-element>
    </kinesis-container>
</template>
