<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

useSeoMeta({
  title: "Demo 示例",
});

const items = computed<NavigationMenuItem[]>(() => {
  return [
    [
      {
        label: "回到首页",
        to: "/",
        icon: "i-lucide-arrow-left",
      },
    ],
    [
      {
        label: "PixiJS 拖拽示例",
        to: "/demo/pixi-drag",
        icon: "i-lucide-move",
      },
      {
        label: "DOM 虚拟列表示例",
        to: "/demo/virtual-list",
        icon: "i-lucide-list",
      },
    ],
  ];
});
</script>

<template>
  <UApp>
    <div class="flex h-screen">
      <UNavigationMenu orientation="vertical" :items="items" class="w-64 shrink-0 p-3" />
      <NuxtPage />
    </div>
  </UApp>
</template>
