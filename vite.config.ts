import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import ViteImages from "vite-plugin-vue-images"
import { imagetools } from "vite-imagetools"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ViteImages({
            // Relative paths of image search directories
            dirs: ["src/assets/images"],
        }),
        Components({
            /* options */
        }),
        imagetools(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                // content of manifest
                src: "icons/144x144.png",
                sizes: "144x144",
                type: "image/png",
                purpose: "any",
            },
            workbox: {
                // workbox options for generateSW
            },
        }),
    ],
})
