<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

useSeoMeta({
  title: "大数据与网络传输技术探索",
});

const items = computed<NavigationMenuItem[]>(() => {
  return [
    {
      label: "Demo 示例",
      to: "/demo/pixi-drag",
      icon: "i-lucide-hammer",
    },
  ];
});
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <UIcon name="i-lucide-telescope" size="22" />
      </template>
      <UNavigationMenu :items="items" />
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <p class="m-6 text-center">探索互联网新境界</p>
    </UMain>

    <USeparator icon="i-lucide-terminal" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">Built with Nuxt UI • © {{ new Date().getFullYear() }}</p>
      </template>
      <template #right>
        <UButton
          to="https://github.com/fisschl/bronya"
          target="_blank"
          icon="i-lucide-github"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
