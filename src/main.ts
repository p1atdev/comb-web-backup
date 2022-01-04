import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import VueKinesis from "vue-kinesis"
import Vue3SmoothScroll from "vue3-smooth-scroll"

const app = createApp(App)

// parallax
app.use(VueKinesis)

app.use(router)

app.use(Vue3SmoothScroll)

app.mount("#app")
