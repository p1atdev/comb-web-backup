module.exports = {
    darkMode: "class",
    content: [
        "./app.vue",
        "./src/components/**/*.{js,vue,ts}",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFD800",
                "primary-darker": "#F6D000",
            },
            zIndex: { 100: "100" },
        },
    },
    plugins: [],
    variants: {
        textDecoration: ["group-hover"],
        position: ["group-hover"],
    },
}
