<script lang="ts" setup>
import moment from "moment-timezone"
import { CalendarIcon } from "@heroicons/vue/solid/index.js"

type Props = {
    date: Date
}

const { date } = defineProps<Props>()

const timeDiff = (() => {
    moment.locale("ja")
    return moment(date).startOf("hour").fromNow()
})()
</script>

<template>
    <div class="flex items-center text-gray-600">
        <CalendarIcon class="w-4 h-4 mr-1" />
        <p class="text-sm">
            {{ timeDiff }}
        </p>
    </div>
</template>
