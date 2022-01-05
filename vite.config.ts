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
                lang: "ja",
                name: "海城コンピュータ部",
                short_name: "コンピューター部",
                background_color: "#fff",
                theme_color: "#F6D000",
                display: "standalone",
                // GitHub Pagesにpushする場合はリポジトリ名を入れる必要がある
                // scope: "/repository-name/",
                // start_url: "/repository-name/",
                icons: [
                    {
                        src: "/favicons/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/favicons/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },

                    {
                        src: "/favicons/favicon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                ],
            },
            workbox: {
                // workbox options for generateSW
            },
        }),
    ],
})
