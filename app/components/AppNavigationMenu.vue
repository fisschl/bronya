<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => {
  return [
    {
      label: "PixiJS 拖拽示例",
      to: "/pixi-drag",
      icon: "i-lucide-move",
    },
    {
      label: "DOM 虚拟列表示例",
      to: "/virtual-list",
      icon: "i-lucide-list",
    },
  ];
});
</script>

<template>
  <UNavigationMenu :items="items" />
</template>
