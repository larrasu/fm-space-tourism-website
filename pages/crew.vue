<template>
  <div
    class="bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop min-h-screen bg-cover"
  >
    <Header />

    <main>
      <div class="px-5">
        <div
          class="nav-text sm:text-left sm:ml-10 mb-10 text-center sm:text-[20px] sm:tracking-[3.28px] sm:mt-10"
        >
          <span class="text-white/25 font-bold">02</span> Meet Your Crew
        </div>
        <div
          v-for="(person, index) of crew"
          class="sm:hidden"
          :class="
            selected == index ? 'border-b border-[#383B4B] h-[223px]' : 'h-0'
          "
        >
          <img
            :src="person.images.png"
            :alt="`Image of ${person.name}`"
            class="mx-auto transition-opacity duration-700"
            :class="selected == index ? 'h-full opacity-100' : 'h-0 opacity-0'"
          />
        </div>
        <nav class="sm:hidden flex items-center justify-center gap-4 mt-10">
          <button
            v-for="(person, index) of crew"
            @click="selected = index"
            class="hover:bg-white/50 w-3 h-3 transition rounded-full"
            :class="selected == index ? 'bg-white' : 'bg-white/20'"
          ></button>
        </nav>
        <div class="sm:w-[540px] mx-auto">
          <div v-for="(person, index) of crew">
            <div v-if="selected == index" class="px-5 mt-10 text-center">
              <div
                class="text-[16px] font-serif text-white/50 uppercase sm:text-[24px]"
              >
                {{ person.role }}
              </div>
              <div class="text-[24px] sm:text-[40px] font-serif uppercase">
                {{ person.name }}
              </div>
              <div
                class="text-[15px] text-primary leading-[25px] mt-5 sm:mt-4 sm:text-[16px] sm:leading-[28px]"
              >
                {{ person.bio }}
              </div>
            </div>
          </div>
        </div>
        <nav class="sm:flex items-center justify-center hidden gap-4 mt-10">
          <button
            v-for="(person, index) of crew"
            @click="selected = index"
            class="hover:bg-white/50 w-3 h-3 transition rounded-full"
            :class="selected == index ? 'bg-white' : 'bg-white/20'"
          ></button>
        </nav>
        <div
          v-for="(person, index) of crew"
          class="sm:block left-1/2 fixed bottom-0 hidden w-[540px] mx-auto -translate-x-1/2 z-0"
          :class="selected == index ? 'h-[532px]' : 'h-0'"
        >
          <img
            :src="person.images.png"
            :alt="`Image of ${person.name}`"
            class="mx-auto transition-opacity duration-700"
            :class="selected == index ? 'h-full opacity-100' : 'h-0 opacity-0'"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import data from "~/data.json";

const selected = ref(0);
const crew = data.crew;
</script>
