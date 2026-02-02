<template>
  <div class="responsive flex flex-1 flex-col gap-8 py-4">
    <p>
      <a
        href="https://drive.google.com/file/d/1TajqGaPcLJ6FSes9d5baevQDB6mRaQti/view"
        target="_blank"
        class="inline-flex items-center gap-1 text-sm transition duration-300 text-decoration-none px-2 py-1 rounded-md bg-white/10 hover:bg-white/30 whitespace-nowrap"
      >
        <Icon name="i-heroicons-arrow-down-tray-16-solid" /> PDF
      </a>
    </p>

    <h3 class="section-title">Skills</h3>

    <div class="grid grid-cols-3 gap-4 text-white/75 md:max-w-[50%]">
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/python.svg" class="h-5" alt="python" title="Python" />
        <span>Python</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/ts.svg" class="h-5" alt="ts" title="TypeScript" />
        <span>TypeScript</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/go.svg" class="h-5" alt="ts" title="GoLang" />
        <span>GoLang</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/docker.svg" class="h-5" alt="ts" title="Docker" />
        <span>Docker</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/django.svg" class="h-5" alt="django" title="Django" />
        <span>Django</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/node.svg" class="h-5" alt="nodejs" title="NodeJS" />
        <span>NodeJS</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/nestjs.svg" class="h-5" alt="nestjs" title="NestJS" />
        <span>NestJS</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/tauri.svg" class="h-5" alt="tauri" title="Tauri" />
        <span>Tauri</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/vue.svg" class="h-5" alt="vue" title="Vue 3" />
        <span>Vue 3</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/nuxt.svg" class="h-5" alt="nuxt" title="Nuxt" />
        <span>Nuxt</span>
      </div>
    </div>

    <h3 class="section-title">Experience</h3>

    <div class="flex flex-col gap-4 md:max-w-[50%]">
      <Milestone v-for="e in experience" :key="e.entity" :milestone="e" />
    </div>

    <h3 class="section-title">Education</h3>
    
    <div class="flex flex-col gap-4 md:max-w-[50%]">
      <Milestone v-for="e in education" :key="e.entity" :milestone="e" />
    </div>

    <h3 class="section-title">Volunteer</h3>

    <div class="flex flex-col gap-4 md:max-w-[50%]">
      <Milestone v-for="v in volunteer" :key="v.entity" :milestone="v" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => `${title} | Resumé`
})

const experience: ResumeMilstone[] = [
  {
    title: 'Software Engineer',
    entity: 'Ard Group',
    timePeriod: 'Oct. 2023 - Present',
    description: `<p>
      Develop and maintain "Qarar", a disaster management platform for government
      clients, using Nuxt 3/4 frontend with NestJS backend and PostgreSQL or SQL
      Server databases.
      </p>

      <p>
      Designed and implemented a database-first architecture for weather forecast
      APIs with optimized views and caching to improve data retrieval efficiency.
      Built a survey builder supporting multiple input types with review
      workflows, and developed a TAF visualizer for aviation weather forecasts.
      </p>

      <p>
      Manage git workflows, conduct code reviews for a team of three to six
      developers, and handle deployments while proactively maintaining framework
      currency and technical standards.
      </p>`,
    link: 'https://ard.co'
  },
  {
    title: 'Software Engineer',
    entity: 'MakanE',
    timePeriod: 'Sep. 2022 - Oct. 2023',
    description: `<p>
      Served as a core team member, building and enhancing features for a
      regional e-commerce platform used by merchants and shoppers, significantly
      improving backend performance and API security.
      </p>

      <p>
      Developed both merchant admin panel and customer storefront features for a
      B2C e-commerce platform, focusing on performance optimizations and
      implementing security measures.
      </p>`,
    link: 'https://makane.com'
  },
  {
    title: 'Full-Stack Web Developer',
    entity: 'RealSoft',
    timePeriod: 'Mar. 2021 - Sep. 2022',
    description: `<p>
      Contributed to the development of large-scale government platforms,
      including a complex survey and data collection system (Al-Khwarizmi) and
      new features for social security services.
      </p>

      <p>
      Developed full-stack features for critical government applications,
      including a widely-used survey platform, and facilitated internal knowledge
      sharing through training sessions.
      </p>`,
    link: 'https://realsoft-me.com'
  }
]

const education: ResumeMilstone[] = [
  {
    title: 'BSc. Software Engineering',
    entity: 'PSUT',
    timePeriod: '2016 - 2021',
    description: 'Grade: 75%',
    link: 'https://psut.edu.jo'
  }
]

const volunteer: ResumeMilstone[] = [
  {
    title: 'Software Engineer',
    entity: 'POSCON',
    timePeriod: '2018 - Present',
    description:
      'Assisting in the development of the POSCON HQ System and POSCON Launcher client using Tauri + Nuxt.',
    link: 'https://poscon.net'
  }
]
</script>

<style scoped>
h3.section-title {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 75%);
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-color: var(--color-amber-900);
  padding-bottom: calc(var(--spacing) * 2);
  letter-spacing: 8px;
}
</style>
