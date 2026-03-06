<template>
  <div class="space-y-8">
    <p class="flex items-center justify-end gap-2">
      <span>Download Here!</span>
      <Icon
        name="solar:arrow-down-linear"
        class="-rotate-90 animate-bounce text-2xl"
      />
      <NuxtLink
        to="https://drive.google.com/file/d/1TajqGaPcLJ6FSes9d5baevQDB6mRaQti/view"
        target="_blank"
        external
      >
        <UiButton
          class="inline-flex items-center gap-1"
          variant="primary"
          size="lg"
        >
          <Icon name="i-heroicons-arrow-down-tray-16-solid" /> PDF
        </UiButton>
      </NuxtLink>
    </p>

    <h3 class="section-title">Skills</h3>

    <div class="grid grid-cols-3 gap-4">
      <div class="inline-flex items-center gap-2">
        <Icon
          name="nonicons:python-16"
          class="text-xl"
          alt="python"
          title="Python"
        />
        <span>Python</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon
          name="nonicons:typescript-16"
          class="text-xl"
          alt="ts"
          title="TypeScript"
        />
        <span>TypeScript</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon name="nonicons:go-16" class="text-xl" alt="ts" title="GoLang" />
        <span>GoLang</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon
          name="nonicons:docker-16"
          class="text-xl"
          alt="ts"
          title="Docker"
        />
        <span>Docker</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon
          name="simple-icons:django"
          src="/img/django.svg"
          class="text-xl"
          alt="django"
          title="Django"
        />
        <span>Django</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon
          name="nonicons:node-16"
          class="text-xl"
          alt="nodejs"
          title="NodeJS"
        />
        <span>NodeJS</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon
          name="simple-icons:nestjs"
          src="/img/nestjs.svg"
          class="text-xl"
          alt="nestjs"
          title="NestJS"
        />
        <span>NestJS</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon
          name="simple-icons:tauri"
          src="/img/tauri.svg"
          class="text-xl"
          alt="tauri"
          title="Tauri"
        />
        <span>Tauri</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon name="nonicons:vue-16" class="text-xl" alt="vue" title="Vue 3" />
        <span>Vue 3</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <Icon
          name="lineicons:nuxt"
          src="/img/nuxt.svg"
          class="text-xl"
          alt="nuxt"
          title="Nuxt"
        />
        <span>Nuxt</span>
      </div>
    </div>

    <h3 class="section-title">Experience</h3>

    <div class="flex flex-col gap-8">
      <Milestone v-for="e in experience" :key="e.entity" :milestone="e" />
    </div>

    <h3 class="section-title">Education</h3>

    <div class="flex flex-col gap-8">
      <Milestone v-for="e in education" :key="e.entity" :milestone="e" />
    </div>

    <h3 class="section-title">Volunteer</h3>

    <div class="flex flex-col gap-8">
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
      <strong>Qarar</strong> is a disaster management platform for government clients, built with
      <strong>Nuxt 4</strong> on the frontend and <strong>NestJS</strong> with
      <strong>PostgreSQL</strong> or <strong>MS SQL Server</strong> on the backend.
    </p>

    <p>
      I was part of the team that built it, and my contributions spanned both feature work and
      architecture, including designing the weather forecast API layer <strong>database-first</strong>,
      using optimized <strong>views</strong> and <strong>caching</strong> to keep data retrieval
      efficient. I also worked on a <strong>survey builder</strong> supporting multiple input types
      with review workflows, and a <strong>TAF visualizer</strong> for aviation weather forecasts.
    </p>

    <p>
      Alongside the development work, I managed the <strong>Git</strong> workflow, handled
      <strong>deployments</strong>, and ran <strong>code reviews</strong> for a team of three to
      six developers.
    </p>`,
    link: 'https://ard.co',
    skills: ['Nuxt', 'NestJS', 'Code Reviews', 'GitLab CI', 'Docker']
  },
  {
    title: 'Software Engineer',
    entity: 'MakanE',
    timePeriod: 'Sep. 2022 - Oct. 2023',
    description: `<p>
      Served as a core team member, building and enhancing features for a
      regional e-commerce platform, significantly improving <b>Django</b> ORM queries and implementing
      frontend features using <b>Vue 2</b> for both merchant dashboard side and shopper storefront.
      </p>
    `,
    link: 'https://makane.com',
    skills: ['Python', 'Django', 'Vue', 'Postgresql', 'Jira']
  },
  {
    title: 'Full-Stack Web Developer',
    entity: 'RealSoft',
    timePeriod: 'Mar. 2021 - Sep. 2022',
    description: `<p>
      Contributed to the development of large-scale government platforms,
      including a complex survey and data collection system (Al-Khwarizmi) and
      new features for the Social Security Corporation using <b>Angular</b> and both <b>NodeJS</b> & <b>NestJS</b> for backend services.
      </p>`,
    link: 'https://realsoft-me.com',
    skills: ['Angular', 'NodeJS', 'NestJS', 'Git']
  }
]

const education: ResumeMilstone[] = [
  {
    title: 'BSc. Software Engineering',
    entity: 'PSUT',
    timePeriod: '2016 - 2021',
    description: '<p>Grade: 75%</p>',
    link: 'https://psut.edu.jo'
  }
]

const volunteer: ResumeMilstone[] = [
  {
    title: 'Software Engineer',
    entity: 'POSCON',
    timePeriod: '2018 - Present',
    description:
      '<p>Assisting in the development of the POSCON HQ System (website) and POSCON Launcher client (desktop) using <b>Tauri</b> + <b>Nuxt</b>.</p>',
    link: 'https://poscon.net',
    skills: ['React', 'Nuxt', 'Tauri']
  }
]
</script>

<style scoped>
h3.section-title {
  font-size: var(--text-xl);
  text-transform: uppercase;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: calc(var(--spacing) * 2);
  letter-spacing: 8px;
}
</style>
