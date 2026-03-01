<template>
  <section
    class="space-y-2 pb-4 border-b border-dashed border-zinc-400 last:border-transparent"
  >
    <div class="flex items-center justify-between">
      <NuxtLink
        :to="milestone.link"
        class="hover:drop-shadow-lg hover:drop-shadow-sky-300/30"
        target="_blank"
      >
        {{ milestone.entity }}
      </NuxtLink>

      <div class="flex flex-col items-end">
        <h5 class="text-lg text-sky-300 dark:text-sky-600">
          {{ milestone.title }}
        </h5>
        <div class="text-xs uppercase">{{ milestone.timePeriod }}</div>
      </div>
    </div>

    <div v-html="milestone.description"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  milestone: ResumeMilstone
}>()
</script>

<style scoped>
section a {
  width: fit-content;
  font-family: 'Config Condensed Bold';
  font-size: var(--text-5xl);
  font-weight: 800;
  position: relative;
}

:deep(p) {
  margin-top: 1rem;
}
</style>
