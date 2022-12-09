<template>
  <div class="flex flex-col items-center mt-20">
    <h5>So, you want to travel to</h5>
    <h2 class="uppercase">Space</h2>
    <p class="text-primary text-center">
      Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!
    </p>
    <div
      class="group cursor-pointer relative w-[250px] h-[250px] mx-auto flex items-center justify-center mt-20"
    >
      <div class="explore mx-auto">
        <NuxtLink to="/explore">Explore</NuxtLink>
      </div>
      <div
        class="explore-glow group-hover:w-[250px] group-hover:h-[250px] group-hover:top-0 group-hover:left-0"
      ></div>
    </div>
  </div>
</template>

<style lang="css">
body {
  background: url("~/assets/home/background-home-mobile.jpg");
  background-size: cover;
}

@media screen and (min-width: 768px) {
  body {
    background: url("~/assets/home/background-home-desktop.jpg");
  }
}
</style>
