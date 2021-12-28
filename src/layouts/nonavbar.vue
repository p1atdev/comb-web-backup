<script lang="ts" setup></script>
<template>
    <div class="px-3 py-1">
        <NuxtLink to="/" class="">
            <img class="sm:hidden h-12" src="@/assets/logo/svg/full-type2.svg" />
            <img class="hidden sm:block h-12" src="@/assets/logo/svg/medium.svg" />
        </NuxtLink>
    </div>
    <slot />
</template>
