<template>
  <div class="reviews-conatiner my-20">
    <div class="title-conatiner flex justify-center">
      <div class="bordered-title">
        <div class="pink-container-b sm:text-base text-sm md:text-xl">
          Reviews from the {{ edition }} edition beneficiaries
        </div>
      </div>
    </div>
    <div
      class="bigtitle sm:text-base lg:leading-[2.5rem] leading-normal sm:leading-[1.125rem] text-sm md:text-[28px] font-semibold text-blkblk mt-10 text-center px-8 sm:px-20 md:px-40"
    >
      Here's what some of our participants had to say about their transformative
      experience at the {{ title }} bootcamp
    </div>
    <div class="reviwss relative">
      <div class="overlay absolute w-full h-full top-0 left-0 z-30"></div>
      <div class="reviewboxx flex flex-col gap-6 mt-12">
        <Vue3Marquee :direction="'reverse'" :duration="50">
          <div
            v-for="card in cards"
            :key="card.name"
            class="mx-3 md:mx-5 title-text bordered-box-outer"
          >
            <div
              class="pink-container text-semiblk w-[293px] md:w-[342px] h-[200px] md:h-[274px] overflow-hidden"
            >
              <div class="titlee flex justify-between items-center mb-4">
                <div
                  class="maintitle text-greytext text-sm md:text-xl font-semibold"
                >
                  {{ card.name }}
                </div>
                <div class="icon">
                  <img :src="card.icon" alt="" class="w-7" />
                </div>
              </div>
              <div class="note text-semiblk text-sm md:text-base">
                {{ card.comment }}
              </div>
            </div>
          </div>
        </Vue3Marquee>
        <Vue3Marquee :duration="50">
          <div
            v-for="card in cards"
            :key="card.name"
            class="mx-3 md:mx-5 title-text bordered-box-outer"
          >
            <div
              class="pink-container text-semiblk w-[293px] md:w-[342px] h-[200px] md:h-[274px] overflow-hidden"
            >
              <div class="titlee flex justify-between items-center mb-4">
                <div
                  class="maintitle text-greytext text-sm md:text-xl font-semibold"
                >
                  {{ card.name }}
                </div>
                <div class="icon">
                  <img :src="card.icon" alt="" class="w-7" />
                </div>
              </div>
              <div class="note text-semiblk text-sm md:text-base">
                {{ card.comment }}
              </div>
            </div>
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import { cards } from "../landing/landingstore";

defineProps({
  edition: {
    courses: "default title",
    type: String,
  },
  title: {
    default: "default title",
    type: String,
  },
});
</script>
<style scoped>
.revoverlay {
  background-image: linear-gradient(
    to right,
    rgba(250, 251, 251, 0) 10%,
    #fff 80%,
    rgba(250, 251, 251, 0) 10%
  );
}
</style>
