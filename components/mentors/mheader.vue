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
      <div class="partners mt-10 flex gap-7">
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
