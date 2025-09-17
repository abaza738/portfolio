<template>
  <div class="responsive flex flex-1 flex-col gap-8 pt-8">
    <section>
      <p class="text-sm text-amber-300/50 ms-14 font-mono">recent</p>
      <h2 class="text-4xl -mt-3"><Icon name="solar:code-2-bold" /> Contributions</h2>
    </section>

    <div class="flex-1 flex flex-col">
      <div v-if="status === 'pending'" class="flex-1 flex flex-col items-center justify-center">
        <Icon class="text-5xl animate-spin" name="mdi:refresh" />
      </div>

      <div v-else-if="status === 'error'" class="flex-1 flex flex-col items-center justify-center">
        <Icon class="text-5xl text-amber-500" name="solar:danger-triangle-bold" />
        <p>Something went wrong :(</p>
      </div>

      <div v-for="pr in data?.prs" :key="pr.created_at" class="pr group">
        <div class="flex items-start gap-4 p-2">
          <NuxtLink
            :class="['size-10 sm:size-12 shrink-0 border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm', pr.type === 'Organization' ? 'rounded-lg' : 'rounded-full']"
            :to="`https://github.com/${pr.repo}`"
            target="_blank"
            relative
          >
            <NuxtImg :src="`https://github.com/${pr.repo.split('/')[0]}.png`" :alt="pr.repo" class="size-full" />
          </NuxtLink>

          <code>
            <NuxtLink
              class="underline underline-offset-4 text-white/50 hover:text-amber-300"
              target="_blank"
              :to="'https://github.com/' + pr.repo"
            >
              {{ pr.repo }}
            </NuxtLink>

            <NuxtLink
              class="font-medium text-sm hover:underline underline-offset-4"
              target="_blank"
              :to="pr.url"
            >
              <span>{{ pr.title }}</span>
            </NuxtLink>
          </code>
        </div>

        <div class="flex flex-col gap-1 text-sm text-white/50 text-end">
          <p class="group-hover:text-amber-400">
            <span><Icon name="solar:star-bold-duotone" /> {{ pr.stars.toLocaleString() }}</span>
          </p>

          <time
            class="whitespace-nowrap"
            :datetime="pr.created_at"
            :title="new Date(pr.created_at).toString()"
          >
            {{ useTimeAgo(new Date(pr.created_at)) }}
          </time>
        </div>
      </div>
    </div>

    <p class="text-center text-white/50">
      <span>Credit to </span>
      <NuxtLink class="hover:text-white" to="https://github.com/atinux" target="_blank">@atinux</NuxtLink>
      <span> for inspiration (and code) in this page :D</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Contributions } from '~~/types/github'

useHead({
  titleTemplate: (title?: string) => `${title} | Contributions`
})

const { data, status } = useFetch<Contributions>('/api/contributions')
</script>

<style scoped>
.pr {
  display: flex;
  justify-content: space-between;
  gap: calc(var(--spacing) * 4);
  padding: calc(var(--spacing) * 4);
  background-color: hsla(245deg 100% 80% / 3%);
  filter: saturate(20%);
  transition: all 0.2s linear;

  &:first-child {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }

  &:last-child {
    border-bottom-left-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
  }

  &:hover {
    background-color: hsla(245deg 100% 80% / 5%);
    filter: saturate(100%);
  }

  code {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: calc(var(--spacing) * 1);
    font-size: var(--text-xs);
  }
}
</style>
