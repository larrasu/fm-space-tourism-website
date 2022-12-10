<template>
  <div
    class="bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop min-h-screen bg-cover"
  >
    <Header />

    <main>
      <div>
        <div
          class="nav-text sm:text-left sm:ml-10 text-center sm:text-[20px] sm:tracking-[3.28px] sm:mt-10"
        >
          <span class="text-white/25 font-bold">03</span> Space Launch 101
        </div>
        <div class="sm:my-14 my-10">
          <div v-for="(technology, index) of technologies">
            <img
              :src="technology.images.landscape"
              :alt="`Image of ${technology.name}`"
              class="mx-auto transition-opacity duration-500"
              :class="
                selected == index ? 'w-full opacity-100' : 'w-0 opacity-0'
              "
            />
          </div>
        </div>
        <nav class="flex items-center justify-center gap-4">
          <button
            v-for="(technology, index) of technologies"
            @click="selected = index"
            class="hover:border-white w-10 h-10 sm:w-[60px] sm:h-[60px] font-serif text-[16px] sm:text-[24px] transition border rounded-full"
            :class="
              selected == index
                ? 'bg-white text-accent'
                : 'text-white border-white/25'
            "
          >
            {{ index + 1 }}
          </button>
        </nav>
        <div class="sm:max-w-lg sm:mx-auto mt-10">
          <div v-for="(technology, index) of technologies">
            <div v-if="selected == index" class="px-10 text-center">
              <div
                class="font-condensed text-primary text-[14px] tracking-[2.36px] sm:text-[16px] sm:tracking-[2.7px] uppercase"
              >
                The terminology...
              </div>
              <div
                class="font-serif text-[24px] uppercase mb-4 sm:mt-4 sm:text-[40px]"
              >
                {{ technology.name }}
              </div>
              <div
                class="text-primary text-[15px] leading-[25px] sm:text-[16px] sm:leading-[28px]"
              >
                {{ technology.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import data from "~/data.json";

const selected = ref(0);
const technologies = data.technology;
</script>
