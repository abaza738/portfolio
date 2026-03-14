<template>
  <a
    :href="url"
    target="_blank"
    class="flex flex-col max-w-120 rounded-md border border-grey-300 hover:border-grey-400 dark:border-grey-700 dark:hover:border-grey-600 text-inherit decoration-0 overflow-hidden"
  >
    <img
      v-if="image"
      :src="image"
      :alt="title"
      class="w-full aspect-video object-cover"
    />
    <div class="flex flex-col gap-1 p-4">
      <span class="text-xs text-primary uppercase">{{ domain }}</span>
      <strong>{{ title }}</strong>
      <p class="text-grey-400/50 line-clamp-2 overflow-hidden">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
const { url } = defineProps<{
  url: string
  title: string
  description: string
  image?: string
}>()

const domain = computed(() => new URL(url).hostname.replace('www.', ''))
</script>
