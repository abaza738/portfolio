<template>
  <main class="flex flex-1 flex-col items-center px-4">
    <div class="overlay"></div>

    <section class="responsive flex flex-1 flex-col gap-8 py-8">
      <Transition name="slide-down" appear>
        <div v-if="active" class="flex flex-col my-auto">
          <p>Hello, I am</p>
          <h1 class="text-6xl md:text-8xl -mt-4 font-black text-amber-300">Maher Abaza.</h1>
          <p class="-mt-2 text-xl font-bold">A <span class="text-amber-300">software engineer</span> based in Jordan.</p>
        </div>
      </Transition>
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
