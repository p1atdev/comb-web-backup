import { defineNuxtPlugin } from "#app"
import VueSmoothScroll from "vue3-smooth-scroll"

export default defineNuxtPlugin((nuxtApp) => {
    // 使う
    nuxtApp.vueApp.use(VueSmoothScroll)
})
