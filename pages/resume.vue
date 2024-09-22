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

    <div class="grid grid-cols-3 gap-4 text-white/75 max-w-[50%]">
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/python.svg" class="h-[1.25rem]" alt="python" title="Python" />
        <span>Python</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/ts.svg" class="h-[1.25rem]" alt="ts" title="TypeScript" />
        <span>TypeScript</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/django.svg" class="h-[1.25rem]" alt="django" title="Django" />
        <span>Django</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/node.svg" class="h-[1.25rem]" alt="nodejs" title="NodeJS" />
        <span>NodeJS</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/nestjs.svg" class="h-[1.25rem]" alt="nestjs" title="NestJS" />
        <span>NestJS</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/tauri.svg" class="h-[1.25rem]" alt="tauri" title="Tauri" />
        <span>Tauri</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/angular.svg" class="h-[1.25rem]" alt="angular" title="Angular" />
        <span>Angular</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/vue.svg" class="h-[1.25rem]" alt="vue" title="Vue 3" />
        <span>Vue 3</span>
      </div>
      <div class="inline-flex items-center gap-2">
        <NuxtImg src="/img/nuxt.svg" class="h-[1.25rem]" alt="nuxt" title="Nuxt 3" />
        <span>Nuxt 3</span>
      </div>
    </div>

    <h3 class="section-title">Experience</h3>

    <div class="flex flex-col gap-4 max-w-[50%]">
      <Milestone v-for="e in experience" :key="e.entity" :milestone="e" />
    </div>

    <h3 class="section-title">Education</h3>
    
    <div class="flex flex-col gap-4 max-w-[50%]">
      <Milestone v-for="e in education" :key="e.entity" :milestone="e" />
    </div>

    <h3 class="section-title">Volunteer</h3>

    <div class="flex flex-col gap-4 max-w-[50%]">
      <Milestone v-for="v in volunteer" :key="v.entity" :milestone="v" />
    </div>
  </div>
</template>

<script setup lang="ts">
const experience: ResumeMilstone[] = [
  {
    title: 'Software Engineer',
    entity: 'Ard Group',
    timePeriod: 'Oct. 2023 - Present',
    description:
      'Mainly serving as a frontend developer for "Qarar", a disaster management solution offered by Ard. In addition to that, occasionally engaging in backend development when needed. Using Nuxt 3 and NestJS.',
    link: 'https://ard.co'
  },
  {
    title: 'Software Engineer',
    entity: 'MakanE',
    timePeriod: 'Sep. 2022 - Oct. 2023',
    description:
      'Part of the core MakanE Dev team developing backend services using Django, in addition to frontend features using Vue 2.',
    link: 'https://makane.com'
  },
  {
    title: 'Full-Stack Web Developer',
    entity: 'RealSoft',
    timePeriod: 'Mar. 2021 - Sep. 2022',
    description:
      'Worked with Al Khwarizmi and SSC teams to deliver frontend features using Angular (8, 10, 12) and NodeJS + NestJS for backend services.',
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
      'Assisting in the front-end development of the POSCON HQ System and POSCON Launcher client using Tauri + Nuxt 3.',
    link: 'https://poscon.net'
  }
]
</script>

<style scoped>
h3.section-title {
  color: rgba(255, 255, 255, 50%);
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-color: hsl(225, 35%, 15%);
  padding-bottom: theme('spacing.2');
  letter-spacing: 8px;
}
</style>
