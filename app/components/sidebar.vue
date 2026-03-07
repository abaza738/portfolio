<template>
  <nav
    class="fixed top-8 h-[calc(100dvh-4rem)] flex flex-col items-end text-end gap-8 pr-8 text-sm z-20"
  >
    <img
      src="/img/abaza.png"
      alt="Abaza flag"
      class="rounded object-cover h-12"
    />

    <NavLinks />

    <div class="flex flex-col items-end gap-4 mt-auto">
      <p class="cursor-pointer" @click="dialogRef?.open()">
        <Icon name="circle-flags:ps" /> Free Palestine!
      </p>

      <div
        class="flex flex-col items-end text-grey-400 dark:text-grey-600 gap-2"
      >
        <NuxtLink
          v-if="appConfig.buildInfo.version !== 'unknown'"
          :to="`https://github.com/abaza738/portfolio/releases/tag/${appConfig.buildInfo.version}`"
          target="_blank"
          external
        >
          {{ appConfig.buildInfo.version }}
        </NuxtLink>

        <p>
          <NuxtLink
            v-if="appConfig.buildInfo.commit !== 'unknown'"
            :to="`https://github.com/abaza738/portfolio/commit/${appConfig.buildInfo.commit}`"
            :title="appConfig.buildInfo.commitMessage"
            target="_blank"
            external
          >
            #{{ appConfig.buildInfo.commit.slice(0, 6) }}
          </NuxtLink>
          &middot; Built
          <NuxtTime
            :datetime="appConfig.buildInfo.time"
            :title="new Date(appConfig.buildInfo.time).toLocaleString()"
            relative
          />
        </p>
      </div>

      <p>
        <span>Built with </span>
        <NuxtLink class="cursor-pointer" to="https://nuxt.com" target="_blank">
          Nuxt
        </NuxtLink>
        <span> &copy; Maher Abaza</span>
      </p>

      <div class="flex items-center gap-4">
        <NuxtLink
          class="social"
          href="mailto:contact@abaza.dev"
          target="_blank"
          external
        >
          <Icon name="simple-icons:maildotru" />
        </NuxtLink>

        <NuxtLink
          class="social"
          to="https://github.com/abaza738"
          target="_blank"
          external
        >
          <Icon name="simple-icons:github" />
        </NuxtLink>

        <NuxtLink
          class="social"
          to="https://www.linkedin.com/in/maher-abaza"
          target="_blank"
          external
        >
          <Icon name="simple-icons:linkedin" />
        </NuxtLink>

        <NuxtLink
          class="social"
          to="https://youtube.com/@abaza738"
          target="_blank"
          external
        >
          <Icon name="simple-icons:youtube" />
        </NuxtLink>

        <NuxtLink class="social" @click="copyUsername" target="_blank">
          <Icon name="simple-icons:discord" />
        </NuxtLink>
      </div>
    </div>

    <UiDialog ref="dialogRef" title="Free Palestine!">
      <div
        class="flex flex-col gap-6 px-6 w-full text-lg text-start md:max-w-180"
      >
        <NuxtImg src="/img/ps-banner@3x.svg" class="h-20" />
        <p>
          The ongoing genocide in Palestine has resulted in immense suffering
          for countless innocent civilians. Each life lost or irrevocably
          altered represents a profound tragedy that should not go unnoticed.
        </p>
        <p>
          While the scale of the situation can feel overwhelming, even small
          acts of compassion and support from individuals can make a meaningful
          difference - whether through
          <span class="underline underline-offset-4">raising awareness</span>,
          supporting
          <span class="underline underline-offset-4">humanitarian aid</span>
          efforts, or advocating for peaceful solutions.
        </p>
        <hr />
        <p>Boycott, Divestment, Sanctions!</p>
      </div>

      <template #footer>
        <div class="flex items-center justify-end gap-4 p-4">
          <NuxtLink to="https://bdsmovement.net" target="_blank" external>
            <UiButton variant="primary" label="Join the BDS Movement" />
          </NuxtLink>
          <UiButton variant="outline" @click="dialogRef?.close">Close</UiButton>
        </div>
      </template>
    </UiDialog>
  </nav>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const dialogRef = useTemplateRef('dialogRef')
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

<style scoped>
@reference '~/assets/css/main.css';

.social {
  @apply cursor-pointer text-xl dark:text-grey-400 dark:hover:text-white;
}
</style>
