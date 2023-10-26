<template>
  <div class="container-center mt-10 px-3 md:px-0">
    <div
      class="toptextss text-greytext flex flex-col md:flex-row gap-3 md:justify-between justify-center text-center items-center w-full"
    >
      <div class="offer w-full md:w-[419px] text-xl md:text-[28px] font-semibold">
        The courses we offer at the bootcamp.
      </div>
      <div class="choose w-full md:w-[526px] text-sm md:text-lg">
        Choose from over 5 courses and learning paths, with dozens added every week. Top
        it off with courses that round out your skills and enrich your day-to-day.
      </div>
    </div>
    <div class="courses mt-12">
      <ul class="courselist flex justify-between gap-3">
        <li class="course" v-for="course in courses" :key="course.title">
          <div class="image w-[200px] md:w-[230px] h-[200px] md:h-[280px] relative">
            <img :src="course.img" alt="" class="w-full h-full object-cover rounded-xl" />
            <div class="absolute top-0 left-0 w-full h-full px-12 text-center">
              <div
                class="innertext flex justify-center items-center w-full h-full text-litwhite text-xl md:text-2xl font-semibold"
              >
                {{ course.title }}
              </div>
            </div>
          </div>
          <p class="text-sm md:text-base mt-5 text-greytext text-center">
            {{ course.desc }}
          </p>
        </li>
      </ul>
    </div>
    <div class="register mt-10 flex justify-center md:justify-start">
      <button class="bluebtn text-white px-10 md:px-14 text-sm md:text-base">
        Register now
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { courses } from "../landing/landingstore";
</script>
<style>
.courselist {
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.course {
  display: inline-block;
}
</style>
