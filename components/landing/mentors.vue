<template>
  <div class="mentorsbox container-center mb-20">
    <div class="mentor-topside flex justify-between gap-24">
      <div class="topleft">
        <div class="btnn">
          <button class="pink-grad-btn px-16 py-[6px] font-semibold">
            Some of our mentors
          </button>
        </div>
        <div class="textss text-2xl font-semibold mt-10">
          At the heart of the Tech for Africa Bootcamp are our esteemed mentors, These are
          our top rated mentors.
        </div>
      </div>
      <div class="topright" v-motion-slide-visible-right>
        <div class="textss text-xl">
          Experience world-class mentorship, cutting-edge learning, and endless
          opportunities. It's not just a bootcamp; it's a journey towards a brighter
          future.
        </div>
        <div class="btnbox mt-10"><button class="bluebtn">Become a mentor</button></div>
      </div>
    </div>
    <div class="mentor-bottomside mt-12">
      <div class="gallerybox grid grid-cols-4">
        <div
          class="mentor w-full flex flex-col gap-1"
          v-for="mentor in mentors"
          :key="mentor.id"
        >
          <div class="picture">
            <img :src="mentor.picture" alt="" class="w-full h-[300px] object-cover" />
          </div>
          <div class="mentorname text-lg font-bold">{{ mentor.mentorname }}</div>
          <div class="mentorname">{{ mentor.job }}</div>
          <a href="" class="socials flex gap-3 items-center">
            <div class="icon"><img :src="mentor.socialicon" alt="" class="" /></div>
            <div class="handle text-lg">{{ mentor.socialhandle }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mentors } from "../landing/landingstore";
</script>
<style>
.pink-grad-btn {
  border-radius: 40px;
  background-image: linear-gradient(123deg, #ffe5c0 0%, #fffbf4 55.73%, #ffe6c3 99.99%);
  /* background-color: black; */
}
</style>
