<template>
  <div class="flex flex-1 flex-col">
    <UiBanner />
    <div class="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_min(600px,100%)_1fr]">
      <div class="hidden lg:flex flex-col items-end">
        <Sidebar />
      </div>
      <div class="flex flex-col px-8 lg:px-0">
        <NuxtPage />
      </div>
      <div class="hidden lg:block"></div>
    </div>
    <Footer />
    <UiNotifications />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  description: 'My portfolio',
  ogUrl: 'https://abaza.dev',
  twitterImage: '/img/og-image.png',
  charset: 'utf-8',
  author: 'Maher Abaza, maher.abaza@proton.me',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  ogTitle: 'Maher Abaza',
  ogDescription: 'My portfolio',
  ogType: 'profile',
  ogImage: '/img/og-image.png',
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
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
