<template>
  <div>
    <p class="sub-h2 text-[16px] text-center">
      <span class="text-white/25 font-bold">01</span> Pick Your Destination
    </p>
    <div>
      <div v-for="(destination, index) of destinations">
        <img
          v-if="selected == index"
          :src="destination.images.png"
          :alt="`Image of ${destination.name}`"
          class="w-[170px] mx-auto my-5"
        />
      </div>
      <nav class="flex items-center justify-center gap-4">
        <button
          v-for="(destination, index) of destinations"
          @click="selected = index"
          class="text-[14px] tracking-[2.36px] uppercase font-condensed transition-all"
          :class="selected == index ? 'border-b border-white' : 'border-none'"
        >
          {{ destination.name }}
        </button>
      </nav>
      <div>
        <div v-for="(destination, index) of destinations">
          <div v-if="selected == index" class="px-5 mt-10 text-center">
            <h3>{{ destination.name }}</h3>
            <div class="border-[#383B4B] mt-2 border-b pb-5">
              <p class="text-primary text-[15px] leadiing-[25px]">
                {{ destination.description }}
              </p>
            </div>
            <div class="grid gap-4 mt-5">
              <div>
                <p class="sub-h2 text-primary">Avg. Distance</p>
                <p class="sub-h1">{{ destination.distance }}</p>
              </div>
              <div>
                <p class="sub-h2 text-primary">Est. Travel Time</p>
                <p class="sub-h1">{{ destination.travel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "~/data.json";

const destinations = data.destinations;
const selected = ref(0);
</script>

<style lang="css">
body {
  background: url("~/assets/destination/background-destination-mobile.jpg");
  background-size: cover;
}

@media screen and (min-width: 640px) {
  body {
    background: url("~/assets/destination/background-destination-tablet.jpg");
    background-size: cover;
  }
}

@media screen and (min-width: 1024px) {
  body {
    background: url("~/assets/destination/background-destination-desktop.jpg");
    background-size: cover;
  }
}
</style>
