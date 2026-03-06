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
      <div class="hidden lg:flex items-start justify-end">
        <ClientOnly>
          <template #fallback>
            <div
              class="flex items-center justify-center p-1 text-xl rounded-full bg-grey-300 hover:bg-grey-400 dark:bg-grey-800 dark:hover:bg-grey-700 z-10"
            >
              <Icon name="solar:refresh-linear" class="animate-spin" />
            </div>
          </template>

          <UiColorMode />
        </ClientOnly>
      </div>
    </div>
    <UiNotifications />
  </main>
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
