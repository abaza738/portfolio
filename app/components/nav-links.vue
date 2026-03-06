<template>
  <div class="flex flex-col items-end gap-2">
    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
    <NuxtLink to="/resume" class="nav-link">Resume</NuxtLink>
    <NuxtLink to="/interests" class="nav-link">Interests</NuxtLink>
    <NuxtLink to="/prs" class="nav-link">PRs</NuxtLink>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.nav-link {
  @apply no-underline text-grey-400 dark:text-grey-600 hover:text-grey-700 dark:hover:text-grey-200;
}

.nav-link.router-link-exact-active {
  @apply text-primary;
}
</style>
