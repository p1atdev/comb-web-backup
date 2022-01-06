<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useMouse } from "@vueuse/core"

type Props = {
    strength: number
    translate: boolean // translateするか
    rotate: boolean
}

const { strength, translate, rotate } = defineProps<Props>()

// generate random id
const id = (() => {
    return "P" + Math.random().toString(36).substring(2, 9)
})()

const isHovering = ref(false)
const mouseLeaveDelay = ref(0)

const mouse = useMouse({ touch: false })

let target: HTMLElement

onMounted(() => {
    target = document.getElementById(id)!
})

const onMouseEnter = () => {
    isHovering.value = true
}

const onMouseOut = () => {
    try {
        if (isHovering.value) {
            setTimeout(() => {
                target!.style.transform = "rotate3d(0, 0, 0, 0deg) translate(0, 0)"
                isHovering.value = false
            }, mouseLeaveDelay.value)
        }
    } catch (e) {
        console.log(e)
    }
}

const onMouseDown = () => {
    // parallax effect to #id
    try {
        // get parallax element's position
        const position = target!.getBoundingClientRect()

        const mouseX = mouse.x.value - position.x - position.width / 2
        const mouseY = mouse.y.value - position.y - position.height / 2

        const vecX = mouseX / position.width
        const vecY = mouseY / position.height

        const transform = (() => {
            let result = ""
            if (translate) {
                result += `translate(${vecX * strength}px, ${vecY * strength}px)`
            }
            if (rotate) {
                result += `rotateX${vecY * -8 * strength}deg) rotateY(${vecX * 8 * strength}deg)`
            }
            return result
        })()
        target!.style.transform = transform
    } catch (e) {
        console.log(e)
    }
}
</script>
<template>
    <div class="flex">
        <div :id="id" class="parallax" @mouseenter="onMouseEnter" @mouseout="onMouseOut" @mousemove="onMouseDown">
            <slot />
        </div>
    </div>
</template>
