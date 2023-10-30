<template>
  <div class="ment mt-12">
    <div class="titless container-center">
      <div class="btn1 flex justify-center">
        <div class="pinkbg px-10 py-2 font-semibold">
          <div class="text-greytext">Mentorship</div>
        </div>
      </div>
      <div class="head text-4xl font-bold px-32 text-center mt-12">
        Become a mentor in Tech for Africa Bootcamp, make meaningful impact and share your
        expertise.
      </div>
      <p class="text-xl text-litgrey px-32 text-center mt-6">
        As a mentor, you have the power to inspire, guide, and empower aspiring tech
        professionals, while contributing to the growth and innovation of Africa's tech
        ecosystem
      </p>
    </div>
    <div class="mentors">
      <Vue3Marquee :duration="50" class="gallerybox flex mt-12">
        <div
          class="mentor w-full flex flex-col gap-1"
          v-for="mentor in mEditions"
          :key="mentor.id"
        >
          <div class="picture w-[300px] md:w-full h-[300px]">
            <img :src="mentor.picture" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="mentorname text-lg font-bold">{{ mentor.mentorname }}</div>
          <div class="mentorname">{{ mentor.job }}</div>
          <a
            :href="mentor.socialUrl"
            target="_blank"
            class="socials flex gap-3 items-center"
          >
            <div class="icon"><img :src="mentor.socialicon" alt="" class="" /></div>
            <div class="handle text-lg underline">{{ mentor.socialhandle }}</div>
          </a>
        </div>
      </Vue3Marquee>
    </div>
    <div class="btn mt-14 flex justify-center gap-6 items-center">
      <div class="bluebtn">Become a mentor</div>
      <div class="text w-[244px] font-semibold">
        Over 50 professionals mentor for the bootcamp
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import { mEditions } from "../mentors/mentorstore";
</script>
<style></style>
