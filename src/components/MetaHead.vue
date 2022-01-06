<script lang="ts" setup>
type Props = {
    title: string
    description: string
    image?: URL
    path?: string
}

const { title, image, description, path } = defineProps<Props>()

const config = useRuntimeConfig()

const currentURL = config.BASE_URL + (path || "")

const ogImage = image?.href || config.BASE_URL + "/ogp/twitter.png"

useMeta({
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
<template>
    <div>
        <!-- 
            
                __ __      _   _       ______                            __           
   / //_/___ _(_) (_)___  / ____/___  ____ ___  ____  __  __/ /____  _____
  / ,< / __ `/ / / / __ \/ /   / __ \/ __ `__ \/ __ \/ / / / __/ _ \/ ___/
 / /| / /_/ / / / / /_/ / /___/ /_/ / / / / / / /_/ / /_/ / /_/  __/ /    
/_/ |_\__,_/_/_/ /\____/\____/\____/_/ /_/ /_/ .___/\__,_/\__/\___/_/     
            /___/                           /_/                           

-->
    </div>
</template>
