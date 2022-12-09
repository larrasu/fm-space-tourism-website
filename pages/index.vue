<template>
  <div class="flex flex-col items-center px-5 mt-20">
    <h5>So, you want to travel to</h5>
    <h2 class="uppercase">Space</h2>
    <p class="text-primary text-center">
      Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!
    </p>
    <NuxtLink
      to="/destination"
      class="group cursor-pointer relative w-[250px] h-[250px] sm:w-[342px] sm:h-[342px] mx-auto flex items-center justify-center my-20"
    >
      <div class="explore mx-auto">
        <p>Explore</p>
      </div>
      <div
        class="explore-glow group-hover:w-[250px] group-hover:h-[250px] sm:group-hover:w-[342px] sm:group-hover:h-[342px] group-hover:top-0 group-hover:left-0"
      ></div>
    </NuxtLink>
  </div>
</template>

<style lang="css">
body {
  background: url("~/assets/home/background-home-mobile.jpg");
  background-size: cover;
}

@media screen and (min-width: 640px) {
  body {
    background: url("~/assets/home/background-home-tablet.jpg");
    background-size: cover;
  }
}

@media screen and (min-width: 1024px) {
  body {
    background: url("~/assets/home/background-home-desktop.jpg");
    background-size: cover;
  }
}
</style>
