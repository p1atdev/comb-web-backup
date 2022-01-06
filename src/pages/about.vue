<script lang="ts" setup>
import DefaultLayout from "../layouts/DefaultLayout.vue"
import Parallax from "../components/UI/Parallax.vue"
</script>
<template>
    <DefaultLayout>
        About

        <h2>test</h2>

        <div class="p-10">
            <Parallax>
                <div class="p-4 w-40 h-40 bg-primary rounded">
                    hello
                    <img src="../assets/images/pc.webp" />
                </div>
            </Parallax>
        </div>
    </DefaultLayout>
</template>
