import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Index from "../pages/index.vue"
import About from "../pages/about.vue"

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "index",
        component: Index,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router
