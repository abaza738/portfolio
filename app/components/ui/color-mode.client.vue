<template>
  <div
    class="cursor-pointer flex items-center justify-center p-1 text-xl rounded-full bg-grey-300 hover:bg-grey-400 dark:bg-grey-800 dark:hover:bg-grey-700 z-10"
    @click="
      colorMode.value === 'dark'
        ? (colorMode.preference = 'light')
        : (colorMode.preference = 'dark')
    "
  >
    <Transition mode="out-in" appear>
      <Icon v-if="colorMode.value === 'dark'" name="solar:sun-bold-duotone" />
      <Icon v-else name="solar:moon-bold-duotone" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>
