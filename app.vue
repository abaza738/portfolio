<template>
  <div class="flex flex-1 flex-col">
    <Navbar />
    <NuxtPage />
    <Footer />
    <UiNotifications />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  charset: 'utf-8',
  author: 'Maher Abaza, maher.abaza@proton.me',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  ogTitle: 'Maher Abaza',
  ogDescription: 'My portfolio',
  ogType: 'profile',
  ogImage: '/img/abaza738-512.png',
  ogImageType: 'image/png',
  ogImageWidth: 50,
  ogImageHeight: 50,
  themeColor: '#040606'
})

useHead({
  bodyAttrs: {
    class: 'dark'
  },
  link: [{ rel: 'icon', href: '/img/abaza738-512.png' }],
  title: 'Maher Abaza'
})
</script>
