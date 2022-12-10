<template>
  <div
    class="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop min-h-screen bg-cover"
  >
    <Header />
    <main
      class="lg:flex-row lg:max-w-7xl lg:mx-auto lg:gap-20 lg:items-end flex flex-col items-center px-5 mt-20"
    >
      <div class="text-center lg:text-left lg:w-[450px]">
        <h5>So, you want to travel to</h5>
        <h2 class="uppercase">Space</h2>
        <p class="text-primary lg:text-justify">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <NuxtLink
        to="/destination"
        class="group cursor-pointer relative w-[250px] h-[250px] sm:w-[342px] sm:h-[342px] lg:w-[450px] lg:h-[450px] mx-auto flex items-center justify-center my-20 lg:mb-0"
      >
        <div class="explore mx-auto">
          <span>Explore</span>
        </div>
        <div
          class="explore-glow group-hover:w-[250px] group-hover:h-[250px] sm:group-hover:w-[342px] sm:group-hover:h-[342px] lg:group-hover:w-[450px] lg:group-hover:h-[450px] group-hover:top-0 group-hover:left-0"
        ></div>
      </NuxtLink>
    </main>
  </div>
</template>
