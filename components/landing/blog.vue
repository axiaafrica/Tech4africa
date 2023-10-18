<template>
  <div class="blogbix container-center my-12">
    <div class="titless flex flex-col justify-center">
      <div class="btnboxx flex justify-center">
        <div class="bordered-title">
          <div class="pink-container-b">TFA Featured On Blogs</div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <h1 class="text-[28px] font-semibold px-44 text-center">
          These feature highlights the remarkable journey of the bootcamp and its profound
          impact on tech education in Africa.
        </h1>
      </div>
    </div>

    <div class="blogsbox flex justify-between gap-10 mt-12">
      <div class="blog bordered-box-outer w-1/2" v-for="blog in blogs" :key="blog.id">
        <div class="pink-container w-full">
          <div class="">
            <img
              :src="blog.picture"
              alt=""
              class="w-full h-[258px] object-cover rounded-lg"
            />
          </div>
          <div class="dateaut mt-5 flex justify-between items-center">
            <div class="date flex gap-3 items-center">
              <img src="../../assets/images/icons/calender.svg" alt="" class="" />
              <p>{{ blog.date }}</p>
            </div>
            <div class="author flex gap-3 items-center">
              <img src="../../assets/images/icons/person.svg" alt="" class="" />
              <p class="">{{ blog.author }}</p>
            </div>
          </div>
          <div class="summery text-2xl font-semibold text-greytext mt-5">
            {{ blog.title }}
          </div>
          <div class="see mt-2">
            <a href="" class="flex items-center gap-2 text-axiared underline">
              See more
              <span
                ><img src="../../assets/images/icons/arrowright.svg" alt="" class=""
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
