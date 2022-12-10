<template>
  <div
    class="bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop min-h-screen bg-cover"
  >
    <Header />
    <main>
      <div
        class="nav-text sm:text-left sm:ml-10 mb-10 text-center sm:text-[20px] sm:tracking-[3.28px] sm:mt-10"
      >
        <span class="text-white/25 font-bold">01</span> Pick Your Destination
      </div>
      <div>
        <div v-for="(destination, index) of destinations">
          <img
            :src="destination.images.png"
            :alt="`Image of ${destination.name}`"
            class="mx-auto transition-opacity duration-500"
            :class="
              selected == index
                ? 'w-[170px] sm:w-[300px] opacity-100'
                : 'w-0 opacity-0'
            "
          />
        </div>
        <nav class="flex items-center justify-center gap-4 mt-10">
          <button
            v-for="(destination, index) of destinations"
            @click="selected = index"
            class="nav-text hover:border-white/50 transition-all border-b-2"
            :class="selected == index ? 'border-white' : 'border-transparent'"
          >
            {{ destination.name }}
          </button>
        </nav>
        <div class="sm:max-w-xl sm:mx-auto">
          <div v-for="(destination, index) of destinations">
            <div
              v-if="selected == index"
              class="sm:mt-8 px-5 mt-10 text-center"
            >
              <h3>{{ destination.name }}</h3>
              <div class="border-[#383B4B] mt-2 border-b pb-5 sm:pb-12">
                <p
                  class="text-primary text-[15px] leadiing-[25px] sm:text-[16px] sm:leading-[28px]"
                >
                  {{ destination.description }}
                </p>
              </div>
              <div class="sm:flex sm:justify-around grid gap-4 mt-5">
                <div>
                  <p class="sub-h2 text-primary">Avg. Distance</p>
                  <p class="sub-h1 mt-3">{{ destination.distance }}</p>
                </div>
                <div>
                  <p class="sub-h2 text-primary">Est. Travel Time</p>
                  <p class="sub-h1 mt-3">{{ destination.travel }}</p>
                </div>
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

const destinations = data.destinations;
const selected = ref(0);
</script>
