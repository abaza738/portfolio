<template>
  <div
    class="relative w-full h-full flex flex-col text-mist-200 bg-mist-950"
    style="font-family: 'Inter'"
  >
    <img
      src="/img/ab-no-bg.png"
      class="absolute -bottom-38 -right-1/4 -rotate-30 opacity-5 max-h-full object-contain"
    />
    <div class="flex-1 flex flex-col justify-center px-12 gap-10">
      <h1
        class="text-sky-500 border-b-2 border-sky-500"
        style="font-size: 96px; font-weight: 800"
      >
        {{ title }}
      </h1>

      <p class="text-3xl">{{ description }}</p>
    </div>

    <p class="text-3xl pb-10 px-12 font-bold mb-0">
      {{ footer }}
    </p>
  </div>
</template>

<script setup lang="ts">
const {
  title = 'Maher Abaza',
  description = 'My personal website',
  footer = 'abaza.dev'
} = defineProps<{
  title?: string
  description?: string
  footer?: string
}>()
</script>
