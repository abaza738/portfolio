<template>
  <main class="flex flex-1 flex-col items-center px-4">
    <div class="overlay"></div>

    <section class="responsive flex flex-1 flex-col gap-8 py-8">
      <div class="flex flex-col gap-4 my-auto">
        <Transition name="slide-down" appear>
          <h1 v-if="active" class="text-4xl font-bold">Maher Abaza</h1>
        </Transition>

        <p class="text-lg">Hey, I'm Maher, a software engineer based in Jordan.</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const active = ref(false)

onMounted(() => nextTick(() => (active.value = true)))
</script>

<style scoped>
main {
  position: relative;
  background-image: url('/img/adiga.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: lighten;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: color-mix(in lab, var(--bg-dark) 95%, transparent 5%);
    width: 100%;
    height: 100%;
  }

  & > :not(.overlay) {
    z-index: 10;
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  position: relative;
  transition: all 1000ms ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
