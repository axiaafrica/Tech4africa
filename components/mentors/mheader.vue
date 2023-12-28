<template>
  <div class="ment container-center sm:mt-8 mt-[1.41rem]">
    <div class="mainheader flex flex-col items-center w-full">
      <div
        class="topcont flex justify-center flex-col gap-4 items-center max-w-[835px] text-center"
      >
        <div class="btn1">
          <div
            class="pinkbg sm:px-10 px-5 py-2 font-semibold sm:mb-5 mb-0 lg:mb-0"
          >
            <div class="text-greytext text-xs sm:text-[1.125rem]">
              Mentorship
            </div>
          </div>
        </div>
        <div
          class="bigtext text-greytext font-bold sm:text-[32px] mb-[1.25rem] text-[1.25rem] px-5 lg:px-0 leading-[1.875rem] sm:leading-[3rem]"
        >
          Become a mentor in Tech for Africa Bootcamp, make meaningful impact
          and share your expertise.
        </div>
        <div
          class="smalltext sm:text-2xl text-sm px-7 sm:px-5 text-litgrey sm:leading-[1.875rem] leading-[1.3125rem]"
        >
          As a mentor, you have the power to inspire, guide, and empower
          aspiring tech professionals, while contributing to the growth and
          innovation of Africa's tech ecosystem.
        </div>
      </div>
      <!-- <div class="partners mt-10 flex gap-7">
        <img
          src="../../assets/images/partner/partner1.png"
          alt=""
          class="w-[300px] h-[364px] object-cover"
          v-motion-slide-visible-left
        />
        <img
          src="../../assets/images/partner/partner2.png"
          alt=""
          class="w-[350px] h-[453px] object-cover"
          v-motion-slide-visible-bottom
        />
        <img
          src="../../assets/images/partner/partner3.png"
          alt=""
          class="w-[300px] h-[364px] object-cover"
          v-motion-slide-visible-right
        />
      </div> -->

      <div class="reviewss mt-12">
        <Vue3Marquee
          :duration="50"
          :pauseOnHover="true"
          @onPause="playState = 'paused'"
          @onResume="playState = 'playing'"
        >
          <div
            class="mentor w-full mr-4"
            v-for="mentor in mEditions"
            :key="mentor.id"
          >
            <div class="picture w-[300px] md:w-full h-[300px]">
              <img
                :src="mentor.picture"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="mentorname text-lg font-bold">
              {{ mentor.mentorname }}
            </div>
            <div class="mentorname text-base">{{ mentor.job }}</div>
            <a
              :href="mentor.socialUrl"
              target="_blank"
              class="socials flex gap-3 items-center"
            >
              <div class="icon">
                <img :src="mentor.socialicon" alt="" class="" />
              </div>
              <div class="handle text-lg underline">
                {{ mentor.socialhandle }}
              </div>
            </a>
          </div>
        </Vue3Marquee>
      </div>

      <div
        class="btn mt-14 flex flex-col sm:flex-row sm:justify-center gap-6 items-center px-1"
      >
        <button @click="showMentorModal" class="bluebtn text-xs sm:text-base">
          Become a Mentor
        </button>
        <mentor-modal
          :show-modal="isMentorModalVisible"
          @submit="onSubmit"
          @close="onClose"
        />
        <div
          class="text sm:w-[244px] text-xs lg:text-base font-semibold px-3 text-center"
        >
          Over 50 professionals mentor for the bootcamp
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import { mEditions } from "../mentors/mentorstore";
import { ref } from "vue";
import MentorModal from "../mentors/MentorModal.vue";

const isMentorModalVisible = ref(false);

const showMentorModal = () => {
  isMentorModalVisible.value = true;
};

const onSubmit = () => {
  isMentorModalVisible.value = false;
};

const onClose = () => {
  isMentorModalVisible.value = false;
};
</script>

<style></style>
