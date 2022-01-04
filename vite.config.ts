import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import ViteImages from "vite-plugin-vue-images"

// https://vitejs.dev/config/
export default defineConfig({
    // css: {
    //     postcss: {
    //         plugins: [
    //             {
    //                 postcssPlugin: "internal:charset-removal",
    //                 AtRule: {
    //                     charset: (atRule) => {
    //                         if (atRule.name === "charset") {
    //                             atRule.remove()
    //                         }
    //                     },
    //                 },
    //             },
    //         ],
    //     },
    //     preprocessorOptions: { css: { charset: false } },
    // },
    plugins: [
        vue(),
        ViteImages({
            // Relative paths of image search directories
            dirs: ["src/assets/images"],
        }),
        Components({
            /* options */
        }),
    ],
})
