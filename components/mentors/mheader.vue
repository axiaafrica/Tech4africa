<template>
  <div class="ment container-center mt-8">
    <div class="mainheader flex flex-col items-center w-full">
      <div
        class="topcont flex justify-center flex-col gap-4 items-center max-w-[835px] text-center"
      >
        <div class="btn1">
          <div class="pinkbg px-10 py-2 font-semibold">
            <div class="text-greytext">Mentorship</div>
          </div>
        </div>
        <div class="bigtext text-greytext font-bold text-[32px]">
          Become a mentor in Tech for Africa Bootcamp, make meaningful impact and share
          your expertise.
        </div>
        <div class="smalltext text-2xl text-litgrey">
          As a mentor, you have the power to inspire, guide, and empower aspiring tech
          professionals, while contributing to the growth and innovation of Africa's tech
          ecosystem.
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
          <div class="mentor w-full mr-4" v-for="mentor in mEditions" :key="mentor.id">
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
        <button @click="showMentorModal" class="bluebtn">Become a Mentor</button>
        <mentor-modal
          :show-modal="isMentorModalVisible"
          @submit="onSubmit"
          @close="onClose"
        />
        <div class="text w-[244px] font-semibold">
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
