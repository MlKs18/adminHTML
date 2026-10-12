<script setup>
import {RouterView, useRoute} from 'vue-router'
import {computed} from "vue";
import FrontLayouts from "@/layouts/FrontLayouts.vue";

const route = useRoute()

const currentLayout = computed(() => route.meta.layout ?? FrontLayouts)
</script>

<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>

<style scoped>

</style>
