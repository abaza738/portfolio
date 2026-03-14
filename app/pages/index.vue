<template>
  <div class="space-y-8">
    <div>
      <p>Hello, I am</p>
      <h1 class="text-4xl font-black text-primary">Maher Abaza.</h1>
    </div>

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

    <LinkPreview
      v-if="data"
      url="https://circassian-genocide.org"
      :title="data.title"
      :description="data.description"
      :image="data.image"
    />

    <p>
      I also stand firmly in support of the
      <b class="text-grey-900 dark:text-grey-100">Palestinian</b> people in
      their fight to exist and be free of the Zionist criminal occupation.
    </p>

    <p>
      On lighter days, you'll find me deep in a flight simulator pretending I
      know what I'm doing at 35,000 feet, or obsessing over Formula 1, something
      I've been doing for the better part of 20 years now.
    </p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/link-preview', {
  query: { url: 'https://circassian-genocide.org' }
})
</script>

<style scoped>
p {
  text-indent: 1rem;
}
</style>
