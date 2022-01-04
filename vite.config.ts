import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import ViteImages from "vite-plugin-vue-images"
import { imagetools } from "vite-imagetools"

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
    ],
})
