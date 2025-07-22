<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import { useAutoDarkMode } from "./utils/dark";
import "@fontsource-variable/fira-code";
import "@fontsource-variable/noto-sans-sc";

useAutoDarkMode();
</script>

<template>
  <RouterView />
  <AppFooter />
</template>
