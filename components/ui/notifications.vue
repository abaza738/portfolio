<template>
  <div class="absolute bottom-4 right-4 flex flex-col-reverse gap-2 overflow-hidden z-50">
    <TransitionGroup class="slide-transition-group" name="slide">
      <UiToast v-for="t in toasts" :key="t.id" v-bind:toast="t" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const { toasts } = useToast()
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>
