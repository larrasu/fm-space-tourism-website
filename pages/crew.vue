<template>
  <div
    class="bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop min-h-screen bg-cover"
  >
    <Header />

    <main>
      <div class="px-5">
        <div class="nav-text mb-10 text-center">
          <span class="font-bold">02</span> Meet Your Crew
        </div>
        <div
          v-for="(person, index) of crew"
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
        <nav class="flex items-center justify-center gap-4 mt-10">
          <button
            v-for="(person, index) of crew"
            @click="selected = index"
            class="hover:bg-white/50 w-3 h-3 transition rounded-full"
            :class="selected == index ? 'bg-white' : 'bg-white/20'"
          ></button>
        </nav>
        <div>
          <div v-for="(person, index) of crew">
            <div v-if="selected == index" class="px-5 mt-10 text-center">
              <div class="text-[16px] font-serif text-white/50 uppercase">
                {{ person.role }}
              </div>
              <div class="text-[24px] font-serif uppercase">
                {{ person.name }}
              </div>
              <div class="text-[15px] text-primary leading-[25px] mt-5">
                {{ person.bio }}
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
const crew = data.crew;
</script>
