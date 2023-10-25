<template>
  <div class="rev mt-12">
    <div class="titles flex flex-col gap-6 justify-center max-w-[960px] mx-auto">
      <div class="btnb flex justify-center">
        <div class="btn outerbtn2">
          <button class="titlebtn2 text-xl">Reviews From our patners</button>
        </div>
      </div>
      <p class="text-2xl font-semibold text-center">
        We are honored to have the support of esteemed partners who share our vision of
        empowering Africa's tech future. Here's what some of our sponsors have to say
        about their experiences partnering with us
      </p>
    </div>
    <div class="reviewss mt-12">
      <Vue3Marquee :duration="50">
        <div
          v-for="rev in preview"
          :key="rev.id"
          class="mx-5 p-5 pink-container w-[580px] h-[296px]"
        >
          <div class="stars">
            <img src="../../assets/images/icons/stars.svg" alt="" class="w-[150px]" />
          </div>
          <div class="review mt-7">{{ rev.review }}</div>
          <div class="bottom flex items-center gap-3 mt-6">
            <div class="user">
              <img :src="rev.img" alt="" class="w-[76px] object-cover" />
            </div>
            <div class="tit flex flex-col justify-center gap-0">
              <div class="name text-lg">{{ rev.name }}</div>
              <div class="tit2 flex gap-2 items-center">
                <div class="position text-sm font-semibold">{{ rev.position }}</div>
                <div class="comp"><img :src="rev.company" alt="" class="w-[38px]" /></div>
              </div>
            </div>
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import { preview } from "../partners/partnerstore";
</script>

<style>
.titlebtn2 {
  border-radius: 5px;
  border: 1px solid #f8f8ff;
  background: #fdfbf9;
  backdrop-filter: blur(2px);
  padding: 12px 16px;
}
.outerbtn2 {
  padding: 4px;
  border-radius: 6px;
  border: 1px solid #ededf1;
  background: #fff;
}
</style>
