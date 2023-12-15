<template>
  <div class="blogbix container-center my-12 px-3 md:px-0">
    <div class="titless flex flex-col justify-center">
      <div class="btnboxx flex justify-center">
        <div class="bordered-title">
          <div class="pink-container-b text-sm md:text-base">
            TFA Featured On Blogs
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <h1
          class="text-base md:text-[28px] font-semibold px-1 md:px-44 text-center sm:leading-[2.625rem] leading-[1.5rem]"
        >
          These feature highlights the remarkable journey of the bootcamp and
          its profound impact on tech education in Africa.
        </h1>
      </div>
    </div>

    <div class="blogsbox grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 px-5">
      <div class="blog bordered-box-outer" v-for="blog in blogs" :key="blog.id">
        <div class="pink-container w-full">
          <div class="">
            <img
              :src="blog.picture"
              alt=""
              class="w-full h-[141px] md:h-[258px] object-cover rounded-lg"
            />
          </div>
          <div class="dateaut mt-5 flex justify-between items-center">
            <div class="date flex gap-1 md:gap-3 items-center">
              <img
                src="../../assets/images/icons/calender.svg"
                alt=""
                class=""
              />
              <p class="text-xs md:text-base">{{ blog.date }}</p>
            </div>
            <div class="author flex gap-1 md:gap-3 items-center">
              <img src="../../assets/images/icons/person.svg" alt="" class="" />
              <p class="text-xs md:text-base">{{ blog.author }}</p>
            </div>
          </div>
          <div
            class="summery text-base md:text-2xl font-semibold text-greytext mt-5"
          >
            {{ blog.title }}
          </div>
          <div class="see mt-2">
            <a
              href=""
              class="flex items-center text-sm md:text-base gap-2 text-axiared underline"
            >
              See more
              <span
                ><img
                  src="../../assets/images/icons/arrowright.svg"
                  alt=""
                  class=""
              /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blogs } from "../landing/landingstore";
</script>
<style></style>
