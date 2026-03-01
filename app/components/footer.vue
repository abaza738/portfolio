<template>
  <section
    class="flex flex-col items-center justify-center gap-4 mt-8 py-8 text-sm select-none"
  >
    <div class="responsive flex justify-center flex-wrap gap-8">
      <NuxtLink
        class="inline-flex items-center gap-2"
        href="mailto:contact@abaza.dev"
        target="_blank"
      >
        Email
      </NuxtLink>

      <NuxtLink
        class="inline-flex items-center gap-2"
        to="https://github.com/abaza738"
        target="_blank"
      >
        Github
      </NuxtLink>

      <NuxtLink
        class="inline-flex items-center gap-2"
        to="https://www.linkedin.com/in/maher-abaza"
        target="_blank"
      >
        LinkedIn
      </NuxtLink>

      <NuxtLink
        class="inline-flex items-center gap-2"
        to="https://youtube.com/@abaza738"
        target="_blank"
      >
        YouTube
      </NuxtLink>

      <NuxtLink
        class="cursor-pointer inline-flex items-center gap-2"
        @click="copyUsername"
        target="_blank"
      >
        Discord
      </NuxtLink>
    </div>
    <span class="w-20 border-b border-zinc-300 dark:border-zinc-700"></span>
    <p>
      <span>Built with </span>
      <NuxtLink class="cursor-pointer" to="https://nuxt.com" target="_blank">
        Nuxt
      </NuxtLink>
      <span> &copy; Maher Abaza</span>
    </p>
  </section>
</template>

<script setup lang="ts">
const toast = useToast()
const cb = useClipboard()

function copyUsername() {
  cb.copy('aerodynamicpotato')
  toast.add({
    title: 'Copied!',
    message: 'My Discord username is now copied to your clipboard',
    type: 'success',
    duration: 3e3
  })
}
</script>
