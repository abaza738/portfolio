<template>
  <main class="responsive flex flex-1 flex-col gap-8">
    <section class="relative flex flex-1 flex-col gap-8">
      <Transition name="slide-down" appear>
        <div v-if="active" class="flex flex-col">
          <p>Hello, I am</p>
          <h1 class="text-4xl font-black text-sky-500 dark:text-sky-400">
            Maher Abaza.
          </h1>
        </div>
      </Transition>

      <p>
        A full-stack developer with about five years of experience, currently
        working out of Amman, Jordan.
      </p>

      <p>
        I'm Muslim of
        <NuxtLink
          href="https://en.wikipedia.org/wiki/Abazins"
          target="_blank"
          external
        >
          Abazin</NuxtLink
        >
        descent, and both of those parts of my identity matter deeply to me. The
        <NuxtLink
          href="https://en.wikipedia.org/wiki/Circassians"
          target="_blank"
          external
        >
          Circassian</NuxtLink
        >
        and Abazin people endured a
        <NuxtLink
          href="https://en.wikipedia.org/wiki/Circassian_genocide"
          target="_blank"
          external
          >genocide</NuxtLink
        >
        that ended in 1864, one that most of the world has never heard of, and I
        built
        <a href="https://circassian-genocide.org">a memorial website</a> to help
        change that.
      </p>

      <p>
        I also stand firmly in support of the <b>Palestinian</b> people in their
        fight to exist and be free of the Zionist criminal occupation.
      </p>

      <p>
        On lighter days, you'll find me deep in a flight simulator pretending I
        know what I'm doing at 35,000 feet, or obsessing over Formula 1,
        something I've been doing for the better part of 20 years now.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const active = ref(false)

onMounted(() => nextTick(() => (active.value = true)))
</script>

<style scoped>
@reference '~/assets/css/main.css';

b {
  @apply text-zinc-900 dark:text-zinc-100;
}

.card {
  @apply cursor-pointer flex flex-col gap-2 p-4 rounded shadow-xs hover:shadow-sm text-inherit shadow-zinc-300 dark:shadow-zinc-800;
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
