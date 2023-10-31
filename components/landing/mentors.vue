<template>
  <div class="mentorsbox container-center px-3 md:px-0 mb-20">
    <div
      class="mentor-topside flex flex-col md:flex-row text-center md:text-start justify-center md:justify-between gap-7 md:gap-24"
    >
      <div class="topleft flex items-center md:items-start flex-col">
        <div
          class="why pinkbg w-[200px] md:w-[296px] py-3 md:py-4 px-2 md:text-base text-xs flex justify-center"
        >
          <div class="textss rainbow">Become a mentor</div>
        </div>
        <div class="textss text-base md:text-2xl font-semibold mt-10">
          At the heart of the Tech for Africa Bootcamp are our esteemed mentors, These are
          our top rated mentors.
        </div>
      </div>
      <div class="topright" v-motion-slide-visible-right>
        <div class="textss text-sm md:text-xl">
          Experience world-class mentorship, cutting-edge learning, and endless
          opportunities. It's not just a bootcamp; it's a journey towards a brighter
          future.
        </div>
        <div class="btnbox mt-10 hidden md:block">
          <button class="bluebtn">Become a mentor</button>
        </div>
      </div>
    </div>
    <div class="mentor-bottomside mt-12">
      <div class="gallerybox flex gap-7 md:gap-0">
        <div
          class="mentor w-full flex flex-col gap-1"
          v-for="mentor in mentors"
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mentors } from "../landing/landingstore";
</script>
<style>
.gallerybox {
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.mentor {
  display: inline-block;
}
</style>
