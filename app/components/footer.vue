<template>
  <section class="flex flex-col items-center justify-center gap-4 py-8 text-sm text-white/20 select-none">
    <div class="responsive flex justify-center flex-wrap gap-8">
      <NuxtLink
        class="cursor-pointer hover:underline underline-offset-4 inline-flex items-center gap-2 hover:text-white/50"
        href="mailto:contact@abaza.dev"
        target="_blank"
      >
        <Icon class="text-lg" name="fa6-solid:at" /> Email
      </NuxtLink>

      <NuxtLink
        class="hover:underline underline-offset-4 inline-flex items-center gap-2 hover:text-white/50"
        to="https://github.com/abaza738"
        target="_blank"
      >
        <Icon class="text-lg" name="fa6-brands:github" /> Github
      </NuxtLink>

      <NuxtLink
        class="hover:underline underline-offset-4 inline-flex items-center gap-2 hover:text-white/50"
        to="https://www.linkedin.com/in/maher-abaza"
        target="_blank"
      >
        <Icon class="text-lg" name="fa6-brands:linkedin" /> LinkedIn
      </NuxtLink>

      <NuxtLink
        class="cursor-pointer hover:underline underline-offset-4 inline-flex items-center gap-2 hover:text-white/50"
        to="https://youtube.com/@abaza738"
        target="_blank"
      >
        <Icon class="text-lg" name="fa6-brands:youtube" /> YouTube
      </NuxtLink>

      <NuxtLink
        class="cursor-pointer hover:underline underline-offset-4 inline-flex items-center gap-2 hover:text-white/50"
        @click="copyUsername"
        target="_blank"
      >
        <Icon class="text-lg" name="fa6-brands:discord" /> Discord
      </NuxtLink>
    </div>
    <span class="w-20 border-b border-white/20"></span>
    <p>
      <span>Built with </span>
      <NuxtLink class="hover:underline underline-offset-4 hover:text-white/50" to="https://nuxt.com" target="_blank">
        Nuxt
      </NuxtLink>
      <span> &copy; Maher Abaza - 2025</span>
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
