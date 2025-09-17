<template>
  <nav class="sticky top-0 flex items-center justify-between bg-dark/50 border-b border-white/5 backdrop-blur z-20 select-none">
    <div class="relative responsive text-sm py-4 uppercase flex items-center gap-8">
      <NuxtLink class="hidden sm:flex text-white/30" active-class="!text-white" to="/">
        Abaza.dev
      </NuxtLink>

      <NuxtLink class="hidden sm:flex text-white/30" active-class="!text-white" to="/resume">
        Resumé
      </NuxtLink>

      <NuxtLink class="hidden sm:flex text-white/30" :class="{ '!text-white': $route.path.startsWith('/interests') }" to="/interests">
        Interests
      </NuxtLink>

      <NuxtLink class="hidden sm:flex text-white/30" active-class="!text-white" to="/prs">
        Contributoins
      </NuxtLink>

      <Icon class="inline sm:!hidden text-3xl cursor-pointer" name="mdi:hamburger" @click="drawer?.open()" />

      <UiDrawer ref="drawer">
        <div class="flex flex-col gap-4 text-lg">
          <NuxtLink class="text-white/30" active-class="!text-white" to="/">
            Abaza.dev
          </NuxtLink>
  
          <NuxtLink class="text-white/30" active-class="!text-white" to="/resume">
            Resumé
          </NuxtLink>
  
          <NuxtLink class="text-white/30" :class="{ '!text-white': $route.path.startsWith('/interests') }" to="/interests">
            Interests
          </NuxtLink>
  
          <NuxtLink class="text-white/30" active-class="!text-white" to="/prs">
            Contributoins
          </NuxtLink>
        </div>
      </UiDrawer>

      <NuxtImg src="/img/palestine-flag@3x.svg" class="cursor-pointer absolute top-0 right-0 h-full hover:scale-[1.2] origin-top" @click="dialogRef?.open()" />
    </div>

    <UiDialog ref="dialogRef" title="Free Palestine!">
      <div class="flex flex-col gap-4 w-full md:max-w-[50vw]">
        <NuxtImg src="/img/ps-banner@3x.svg" class="h-[5rem]" />
        <p>
          The ongoing genocide in Palestine has resulted in immense suffering for countless innocent civilians.
          Each life lost or irrevocably altered represents a profound tragedy that should not go unnoticed.
        </p>
        <p>
          While the scale of the situation can feel overwhelming, even small acts of compassion and support from individuals can make a meaningful difference - whether through
          <span class="underline underline-offset-4">raising awareness</span>, supporting <span class="underline underline-offset-4">humanitarian aid</span>
          efforts, or advocating for peaceful solutions.
        </p>
        <p>
          Boycott, Divestment, Sanctions.<br />Join the <NuxtLink class="text-blue-200 hover:text-white underline underline-offset-4" to="https://bdsmovement.net" target="_blank" external>BDS Movement</NuxtLink> now!
        </p>
      </div>

      <template #footer>
        <div class="flex items-center justify-end p-4">
          <UiButton variant="outline" @click="dialogRef?.close">Close</UiButton>
        </div>
      </template>
    </UiDialog>
  </nav>
</template>

<script setup lang="ts">
const dialogRef = useTemplateRef('dialogRef')
const drawer = useTemplateRef('drawer')
</script>
