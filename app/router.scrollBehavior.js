export default function (to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    }

    if (to.hash) {
        let el = document.querySelector(to.hash)
        if ("scrollBehavior" in document.documentElement.style) {
            const OFFSET = 60
            return window.scrollTo({ top: el.offsetTop - OFFSET, behavior: "smooth" })
        } else {
            return window.scrollTo(0, el.offsetTop)
        }
    }

    return { x: 0, y: 0 }
}
