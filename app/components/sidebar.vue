<template>
  <nav
    class="sticky top-8 flex flex-col items-end gap-8 pr-16 select-none text-sm"
  >
    <div class="flex flex-col items-end gap-2">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/resume" class="nav-link">Resume</NuxtLink>
      <NuxtLink to="/interests" class="nav-link">Interests</NuxtLink>
      <NuxtLink to="/prs" class="nav-link">PRs</NuxtLink>
    </div>

    <ClientOnly>
      <template #fallback>
        <div
          class="flex items-center justify-center p-1 text-xl rounded-full bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 z-10"
        >
          <Icon name="solar:refresh-linear" class="animate-spin" />
        </div>
      </template>

      <UiColorMode />
    </ClientOnly>
  </nav>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.nav-link {
  @apply no-underline text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-200;
}

.nav-link.router-link-exact-active {
  @apply text-sky-400 dark:text-sky-400;
}
</style>
