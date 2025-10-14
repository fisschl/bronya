<script setup lang="ts">
useHead({
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "zh-CN",
  },
});

useSeoMeta({
  title: "大数据与网络传输技术探索",
});
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <UIcon name="i-lucide-panda" size="24" />
      </template>
      <AppNavigationMenu />
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
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
