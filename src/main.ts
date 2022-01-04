import Vue, { createApp } from "vue"
// vue3-smooth-scrollの修正用
declare module "vue" {
    export type PluginFunction<T> = (app: Vue.App, ...options: any[]) => any
}
import App from "./App.vue"
import router from "./router"
import VueKinesis from "vue-kinesis" // 型定義ファイルがないのでimportできない
import Vue3SmoothScroll from "vue3-smooth-scroll"

const app = createApp(App)

// parallax
app.use(VueKinesis)

app.use(router)

app.use(Vue3SmoothScroll)

app.mount("#app")
