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
defineOgImage('Default', {
  title: 'Resumé',
  description: 'Work, skills, and volunteer experience'
})

useSeoMeta({
  ogTitle: 'Resumé',
  ogDescription: 'Work, skills, and volunteer experience',
  description: 'Work, skills, and volunteer experience'
})

useHead({
  titleTemplate: (title?: string) => `${title} | Resumé`
})

const experience: ResumeMilstone[] = [
  {
    title: 'Senior Frontend Developer',
    entity: 'Sanad - MODEE',
    timePeriod: 'May 2026 - Present',
    description: `<p>Frontend developer for the government services application <i>“Sanad”</i> under the <b>Ministry of Digital Economy and Entrepreneurship</b>.
      Implementing integrations for all government e-services on a web portal built with <b>Angular</b> using an <b>Nx monorepo</b> architecture.</p>`,
    link: 'https://www.sanad.gov.jo/',
    skills: ['Nx', 'Angular']
  },
  {
    title: 'Software Engineer',
    entity: 'Ard Group',
    timePeriod: 'Oct. 2023 - Apr. 2026',
    description: `<ul>
      <li>Worked on a disaster management platform for government entities (MENA region) using <b>NestJS</b> and <b>Nuxt</b>.</li>
      <li>Implemented front-end-heavy features: custom <b>form builder</b>, <b>reports builder</b>, <b>GIS information</b> presentation using map libraries such as <b>Mapbox</b> and <b>OpenLayers</b>.</li>
      <li>Conducted <b>code review</b> sessions and managed the <b>Git workflow</b> for a team of 3-6 devs.</li>
      </ul>`,
    link: 'https://ard.co',
    skills: ['Nuxt', 'NestJS', 'Code Reviews', 'GitLab CI', 'Docker']
  },
  {
    title: 'Software Engineer',
    entity: 'MakanE',
    timePeriod: 'Sep. 2022 - Oct. 2023',
    description: `<ul>
      <li>Core team member for local e-commerce platform “MakanE”.</li>
      <li><b>Refactored</b> parts of the system for <b>performance</b> enhancements on <b>Django ORM</b>: queries reduced from 10s of thousands to under 10 optimised queries.</li>
      <li>Implemented <b>rate-limiting</b> algorithms for resource-intensive APIs to protect from DOS attacks.</li>
      </ul>`,
    link: 'https://makane.com',
    skills: ['Python', 'Django', 'Vue', 'Postgresql', 'Jira']
  },
  {
    title: 'Full-Stack Web Developer',
    entity: 'RealSoft',
    timePeriod: 'Mar. 2021 - Sep. 2022',
    description: `<ul>
      <li>Assisted in the design and implementation of systems for the company's projects: <i>Al-Khwarizmi</i>, and the <i>Jordanian Social Security Corporation</i> with <b>Angular</b> and <b>NodeJS/NestJS</b>.</li>
      <li>Set standards for <b>Git workflow</b> and <b>code review</b> within peers.</li>
      </ul>`,
    link: 'https://realsoft-me.com',
    skills: ['Angular', 'NodeJS', 'NestJS', 'Git']
  }
]

const education: ResumeMilstone[] = [
  {
    title: 'BSc. Software Engineering',
    entity: 'PSUT',
    timePeriod: '2016 - 2021',
    description: `<p>Grade: 75%</p>
      <p>Participated in astronomy club Antares, Google Developer Student Club, and assisted in organizing TEDx PSUT (2018).</p>`,
    link: 'https://psut.edu.jo'
  }
]

const volunteer: ResumeMilstone[] = [
  {
    title: 'Software Engineer',
    entity: 'POSCON',
    timePeriod: '2018 - Present',
    description: `<ul>
      <li>Volunteer web developer for <b>POSCON</b>, the next-generation flight simulation network. Contributed to the development of <i>POSCON HQ</i>
      - the main dashboard for POSCON users and administrators; using <b>React</b>.</li>
      <li>Created the <i>POSCON Launcher</i> desktop application using <b>Tauri</b> and <b>Nuxt</b>.</li>
      </ul>`,
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
