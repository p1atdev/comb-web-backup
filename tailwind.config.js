module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
