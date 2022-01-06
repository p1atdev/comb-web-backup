<script lang="ts" setup>
import { useHead } from "@vueuse/head"

type Props = {
    title: string
    description: string
    image?: URL
}

const { title, image, description } = defineProps<Props>()

const currentURL = import.meta.env.BASE_URL || new URL(location.href, import.meta.url).href

const ogImage = image?.href || import.meta.env.BASE_URL + "/ogp/twitter.png"

useHead({
    title: title,
    meta: [
        {
            name: "description",
            content: description,
        },
        {
            property: "og:title",
            content: title,
        },
        {
            property: "og:description",
            content: description,
        },
        {
            property: "og:url",
            content: currentURL,
        },
        {
            property: "og:image",
            content: ogImage,
        },
    ],
})
</script>
