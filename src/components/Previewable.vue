<script lang="ts" setup>
var show = ref(false)
const toggle = () => {
    show.value = !show.value
}
</script>

<template>
    <div @click="toggle">
        <slot />
    </div>

    <div v-if="show">
        <teleport to="body">
            <!-- 以下要素がid="teleport-target"内に描画される -->
            <div class="fixed inset-0 bg-black bg-opacity-30 w-full h-full justify-center z-50" @click="toggle">
                <!-- place the slot on center -->
                <div class="w-full h-full p-4 flex justify-center items-center">
                    <slot />
                </div>
            </div>
        </teleport>
    </div>
</template>
