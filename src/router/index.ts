import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Index from "../pages/index.vue"
import About from "../pages/about.vue"

const routers: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Index,
    },
    {
        path: "/about",
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
})

export default router
