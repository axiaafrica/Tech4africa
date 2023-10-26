<template>
  <div class="conntribute-box mt-16 md:mt-12 md:my-12 container-center px-3 md:px-0">
    <div class="why-title flex justify-center">
      <div class="title-text bordered-title text-sm md:text-xl">
        <div class="pink-container-b text-semiblk p-2 md:p-4">
          Why Choose the Tech for Africa Boot Camp?
        </div>
      </div>
    </div>
    <div
      class="bigtitle text-base md:text-[28px] font-semibold text-blkblk mt-6 md:mt-10 text-center px-1 md:px-40"
    >
      Here's how each type of partnership can contribute to the success of the "Tech for
      Africa Bootcamp by Axia Africa
    </div>
    <div
      class="contribute-boxes grid mt-12 lg:grid-cols-2 grid-cols-1 place-content-center gap-10"
    >
      <div
        v-for="card in contribute"
        :key="card.title"
        class="title-text bordered-box-outer text-xl"
      >
        <div class="pink-container text-semiblk">
          <div class="titlee flex gap-3 items-center mb-4">
            <div class="icon"><img :src="card.img" alt="" class="" /></div>
            <div class="maintitle text-greytext text-base md:text-xl font-semibold">
              {{ card.title }}
            </div>
          </div>
          <div class="note text-semiblk text-sm md:text-base">{{ card.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contribute } from "./landingstore";
</script>
<style></style>
