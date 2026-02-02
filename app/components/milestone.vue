<template>
  <section class="space-y-2 pb-4 border-b border-dashed border-white/10 last:border-transparent">
    <div class="flex items-center justify-between">
      <NuxtLink :to="milestone.link" target="_blank">
        {{ milestone.entity }}
      </NuxtLink>

      <div class="flex flex-col items-end">
        <h5 class="text-lg text-amber-300/70">{{ milestone.title }}</h5>
        <div class="text-xs uppercase text-white/70">{{ milestone.timePeriod }}</div>
      </div>
    </div>

    <div class="text-white/75" v-html="milestone.description"></div>
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
  color: var(--color-amber-300);
  font-family: 'Config Condensed Bold';
  font-size: var(--text-5xl);
  font-weight: 800;
  position: relative;

  &:hover {
    filter: drop-shadow(0px 0px 5px rgba(255,255,255,0.3));
  }
}

:deep(p) {
  margin-top: 1rem;
}
</style>
