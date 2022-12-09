<template>
  <header>
    <div class="flex items-center justify-between">
      <div>
        <img src="~/assets/shared/logo.svg" alt="Logo" />
      </div>
      <div>
        <button @click="showMenu = true">
          <img src="~/assets/shared/icon-hamburger.svg" alt="Menu" />
        </button>
      </div>
    </div>
    <div
      class="backdrop-blur-2xl bg-white/4 h-screen absolute right-0 top-0 z-50 transition-all trans"
      :class="showMenu ? 'w-3/4' : 'w-0'"
    >
      <div class="p-10">
        <button @click="showMenu = false" class="float-right">
          <img src="~/assets/shared/icon-close.svg" alt="Close" />
        </button>

        <nav class="mt-20">
          <ul
            class="flex flex-col gap-5 text-[16px] tracking-[2.7px] uppercase"
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
