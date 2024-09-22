<template>
  <div class="responsive flex flex-1 flex-col gap-4 py-4 select-none">
    
    <section class="ferrari">
      <div class="overlay"></div>

      <div class="flex flex-col gap-4 z-10">
        <h3 class="font-bold text-5xl md:text-8xl">Formula 1</h3>
        <p class="w-full md:max-w-[40%]">
          Watching <span class="underline underline-offset-4">Formula 1</span> since 2006, I grew an early obsession with the prancing horse team.
          Till this day, not a single race weekend goes by without wearing the <span class="underline underline-offset-4">Ferrari</span> shirt and forcing human beings in my immediate vicinity to watch the live action!
        </p>
      </div>
    </section>

    
    <section class="aviation text-end">
      <div class="overlay"></div>
      
      <div class="flex flex-col gap-4 z-10">
        <h3 class="font-bold text-5xl md:text-8xl">Aviation</h3>
        <p class="w-full md:max-w-[40%] ms-auto">
          My passion in aviation started at a young age, watching <span class="underline underline-offset-4">Air Crash Investigations</span>.
          It still is very interesting to me learning about aircraft structure, design, how they fly, and the regulations that surround all of it.
          Unfortunately, I could not become a pilot because I am <span class="underline underline-offset-4">colorblind</span>. So I took this passion to <span class="underline underline-offset-4">Flight Simulation</span>.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: saturate(25%);
  
  &:hover {
    filter: saturate(100%) sepia(50%);

    .overlay {
      backdrop-filter: blur(0px);
    }
  }

  &.ferrari {
    background-image: url('/img/ferrari-bg.jpeg');

    h3::after {
      content: '';
      display: block;
      width: theme('fontSize.8xl');
      height: 6px;
      background-color: #c6281c;
      z-index: 10;
    }
  }

  &.aviation {
    background-image: url('/img/aviation-bg.jpg');

    h3::after {
      content: '';
      display: block;
      margin-inline-start: auto;
      width: theme('fontSize.8xl');
      height: 6px;
      background-color: #4f46e5;
      z-index: 10;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.4);
    backdrop-filter: blur(3px);
  }

  @screen md {
    padding: 6rem;
  }
}
</style>
