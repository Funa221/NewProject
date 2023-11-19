<script setup>
import { RouterView } from "vue-router";
import headerHome from "./header/headerHome.vue";
</script>

<template>
    <!-- 可任意更改背景顏色，也可放置圖片。 -->
    <div class="relative min-h-[100dvh] bg-slate-100">
        <headerHome />
        <RouterView />
    </div>
</template>

<style scoped></style>
