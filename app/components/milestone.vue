<template>
  <section
    class="space-y-4 pb-8 border-b border-dashed border-grey-400 last:border-transparent"
  >
    <div class="flex items-center gap-4">
      <NuxtLink class="entity" :to="milestone.link" target="_blank">
        {{ milestone.entity }}
      </NuxtLink>

      <div class="flex flex-col">
        <h5 class="text-lg">
          {{ milestone.title }}
        </h5>
        <div class="text-sm uppercase">{{ milestone.timePeriod }}</div>
      </div>
    </div>

    <div v-html="milestone.description"></div>

    <p
      v-if="milestone.skills?.length"
      class="flex flex-wrap justify-start gap-2"
    >
      <div
        v-for="skill in milestone.skills"
        :key="`skill-${milestone.entity}-${skill}`"
        class="flex items-center py-1 px-4 rounded-md border border-grey-400 bg-grey-950/10 dark:bg-grey-100/5 text-sm"
      >
        {{ skill }}
      </div>
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  milestone: ResumeMilstone
}>()
</script>

<style scoped>
@reference '~/assets/css/main.css';

.entity {
  @apply text-3xl text-grey-200 dark:text-grey-800 bg-primary dark:bg-grey-200 rounded-md px-4 py-1;
  width: fit-content;
  font-family: 'Config Condensed Bold';
}

:deep(p) {
  margin-top: 1.5rem;
  margin-inline-start: 2rem;
}
</style>
