<template>
  <main class="flex flex-1 flex-col p-8">
    <div
      class="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_min(600px,100%)_1fr] gap-8"
    >
      <div
        class="hidden lg:flex flex-col items-end border-e border-grey-300 dark:border-grey-800"
      >
        <Sidebar />
      </div>

      <div class="flex-1 flex flex-col px-8 lg:px-0">
        <NuxtPage />
      </div>

      <div class="hidden lg:flex items-start"></div>
    </div>

    <UiNotifications />

    <ClientOnly>
      <UiColorMode class="fixed top-8 right-8 z-10" />
      <Live class="fixed bottom-8 right-8 z-10" />
    </ClientOnly>
  </main>
</template>

<script setup lang="ts">
defineOgImage('Default', {
  title: 'Maher Abaza',
  description: 'My personal website'
})

useSeoMeta({
  description: 'My personal website',
  ogUrl: 'https://abaza.dev',
  charset: 'utf-8',
  author: 'Maher Abaza, maher.abaza@proton.me',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  ogTitle: 'Maher Abaza',
  ogDescription: 'My personal website',
  ogType: 'profile',
  themeColor: '#040606'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [{ rel: 'icon', href: '/img/abaza738-512.png' }],
  title: 'Maher Abaza'
})
</script>
