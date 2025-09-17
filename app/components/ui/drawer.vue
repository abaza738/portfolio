<template>
  <Teleport to="#teleports">
    <Transition name="slide-in">
      <div
        v-if="active"
        class="root fixed top-0 left-0 flex flex-col gap-4 p-4 h-screen w-screen backdrop-blur transition-all z-20"
        @click="close"
      >
        <Icon class="ml-auto text-3xl cursor-pointer" name="solar:close-circle-broken" @click="close" />
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const active = ref(false)

function open() {
  active.value = true
}

function close() {
  active.value = false
}

function toggle() {
  active.value = !active.value
}

onKeyStroke('ESC', () => {
  close()
})

defineExpose({
  close,
  open,
  toggle
})
</script>

<style scoped>
.root {
  background-color: color-mix(in lab, var(--color-dark) 90%, transparent 10%);
}

.slide-in-enter-active,
.slide-in-leave-active {
  position: fixed;
  transition: all 200ms ease-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
