// import Vue, { createApp } from "vue"
import Vue from "vue"
// vue3-smooth-scrollの修正用
declare module "vue" {
    export type PluginFunction<T> = (app: Vue.App, ...options: any[]) => any
}
import App from "./App.vue"
import router, { routes } from "./router"
import Vue3SmoothScroll from "vue3-smooth-scroll"
import { registerSW } from "virtual:pwa-register"
import { createHead } from "@vueuse/head"
import { ViteSSG } from "vite-ssg"

// PWA用のregisterSW
registerSW()

export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    { routes },
    // function to have custom setups
    ({ app, router, routes, isClient, initialState }) => {
        // install plugins etc.
        app.component("router", router)

        app.component("vue3-smoothscroll", Vue3SmoothScroll)

        app.component("vue-head", createHead())
    }
)

// app.mount("#app")

// parallax
