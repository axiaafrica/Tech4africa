<template>
  <div class="lg:mt-24 mt-[2.5rem]">
    <div class="btnb flex flex-col items-center">
      <div
        class="btnb container-center flex flex-col gap-8 text-center items-center"
      >
        <div class="btn outerbtn">
          <button class="titlebtn text-sm md:text-xl">
            What your sponsorship will Enable
          </button>
        </div>
      </div>
      <div
        class="textss max-w-[770px] mt-12 text-center text-greytext sm:text-2xl text-[0.875rem] px-5 font-semibold"
      >
        As a Tech for Africa Bootcamp partner sponsor you can contribute to
        various initiatives and funding that enable the program's success and
        provide valuable support to participants.
      </div>
    </div>
    <div class="mt-12 bg-btnblue">
      <div
        class="boxes grid lg:grid-cols-3 grid-cols-1 px-[3.5rem] lg:px-0 gap-x-20 gap-y-12 sm:py-16 py-[2.15rem] container-center"
      >
        <div
          class="enablen flex flex-col gap-2 text-greytext"
          v-motion-fade-visible
          v-for="enables in enable"
          :key="enables.id"
        >
          <img :src="enables.icon" alt="" class="w-10 h-10" />
          <div class="sm:text-xl text-base font-semibold">
            {{ enables.title }}
          </div>
          <div class="text-[0.875rem] sm:text-[1rem] pb-0">
            {{ enables.note }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { enable } from "./partnerstore";
</script>
<style></style>
