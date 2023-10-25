<template>
  <div class="mt-24">
    <div class="btnb flex flex-col items-center">
      <div class="btn outerbtn">
        <button class="titlebtn text-xl">What your sponsorship will Enable</button>
      </div>
      <div
        class="textss max-w-[770px] mt-12 text-center text-greytext text-2xl font-semibold"
      >
        As a Tech for Africa Bootcamp partner sponsor you can contribute to various
        initiatives and funding that enable the program's success and provide valuable
        support to participants.
      </div>
    </div>
    <div class="mt-12 bg-btnblue">
      <div class="boxes grid grid-cols-3 gap-x-20 gap-y-12 py-16 container-center">
        <div
          class="enablen flex flex-col gap-2 text-greytext"
          v-for="enables in enable"
          :key="enables.id"
        >
          <img :src="enables.icon" alt="" class="w-10 h-10" />
          <div class="text-xl font-semibold">{{ enables.title }}</div>
          <div class="">{{ enables.note }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { enable } from "./partnerstore";
</script>
<style></style>
