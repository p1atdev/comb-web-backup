<script lang="ts" setup>
type Props = {
    property: string
    content: string
}
const { property, content } = defineProps<Props>()
</script>
<template>
    <meta :property="property" :content="content" />
</template>
