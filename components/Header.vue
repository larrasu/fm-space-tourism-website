<template>
  <header>
    <div class="flex items-center justify-between">
      <div class="shrink-0 lg:mr-15 ml-10">
        <img src="~/assets/shared/logo.svg" alt="Logo" />
      </div>
      <div class="sm:hidden p-10">
        <button @click="showMenu = true">
          <span class="sr-only">Open menu</span>
          <img src="~/assets/shared/icon-hamburger.svg" alt="Menu" />
        </button>
      </div>
      <div class="lg:block border-white/25 hidden w-full h-1 border-b"></div>
      <nav
        class="sm:block bg-white/5 lg:backdrop-blur-xl lg:pl-10 lg:pr-16 hidden"
      >
        <div
          class="flex gap-10 text-[14px] tracking-[2.36px] uppercase font-condensed px-10"
        >
          <NuxtLink
            :to="link.path"
            v-for="(link, index) of menu"
            class="py-9 flex items-center gap-2"
            active-class="border-b border-white"
          >
            <p class="lg:block hidden font-bold">0{{ index }}</p>
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>
    </div>
    <!-- Menu -->
    <div
      class="backdrop-blur-2xl bg-white/4 w-[254px] fixed top-0 right-0 z-50 h-screen transition-all duration-500 transform"
      :class="showMenu ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="grid">
        <button @click="showMenu = false" class="p-10 ml-auto">
          <span class="sr-only">Close menu</span>
          <img src="~/assets/shared/icon-close.svg" alt="Close" />
        </button>

        <nav class="mt-10 ml-10">
          <ul
            class="flex font-condensed flex-col gap-5 text-[16px] tracking-[2.7px] uppercase"
          >
            <li v-for="(link, index) of menu">
              <NuxtLink
                :to="link.path"
                class="flex items-center gap-2"
                active-class="border-r-2"
              >
                <p class="font-bold">0{{ index }}</p>
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- End of Menu -->
  </header>
</template>

<script setup>
const showMenu = ref(false);

const menu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Destination",
    path: "/destination",
  },
  {
    title: "Crew",
    path: "/crew",
  },
  {
    id: 4,
    title: "Technology",
    path: "/technology",
  },
];
</script>
