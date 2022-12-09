<template>
  <header>
    <div class="flex items-center justify-between">
      <div class="p-5">
        <img src="~/assets/shared/logo.svg" alt="Logo" />
      </div>
      <div class="sm:hidden p-5">
        <button @click="showMenu = true">
          <img src="~/assets/shared/icon-hamburger.svg" alt="Menu" />
        </button>
      </div>
      <nav class="sm:block bg-white/5 hidden">
        <div
          class="flex gap-10 text-[14px] tracking-[2.36px] uppercase font-condensed px-10"
        >
          <NuxtLink
            :to="link.path"
            v-for="link of menu"
            class="py-9 flex items-center gap-2"
            active-class="border-b border-white"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>
    </div>
    <div
      class="backdrop-blur-2xl bg-white/4 trans absolute top-0 right-0 z-50 h-screen transition-all"
      :class="showMenu ? 'w-3/4' : 'w-0'"
    >
      <div class="p-10">
        <button @click="showMenu = false" class="float-right">
          <img src="~/assets/shared/icon-close.svg" alt="Close" />
        </button>

        <nav class="mt-20">
          <ul
            class="flex font-condensed flex-col gap-5 text-[16px] tracking-[2.7px] uppercase"
          >
            <li v-for="(link, index) of menu" class="flex items-center gap-2">
              <p class="font-bold">0{{ index }}</p>
              <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
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
