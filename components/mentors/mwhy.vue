<template>
  <div
    class="whyy sm:mt-24 mt-[2.5rem] container-center flex flex-col justify-center items-center lg:flex-row lg:justify-between xl:gap-24 md:gap-[4.5rem] lg:px-6 xl:px-0"
  >
    <div class="left">
      <div
        class="head text-greytext md:text-[28px] text-center text-base font-bold lg:text-left"
      >
        Why Volunteer as a Mentor
      </div>
      <p
        class="parag text-greytext mt-4 sm:text-base px-5 text-sm lg:px-0 text-center lg:text-left sm:px-32"
      >
        Our team of writers, developers, and influencers is ready to help to
        learn about starting business with some inspiration.
      </p>
      <div class="ratings flex gap-16 justify-center mt-10">
        <div class="rate1">
          <div
            class="ratename text-semiblk font-medium sm:text-xl lg:text-lg xl:text-xl text-sm"
          >
            Total students
          </div>
          <div
            class="ratenum text-drkblue sm:text-[56px] text-[1.5rem] font-bold"
          >
            8000+
          </div>
        </div>
        <div class="rate2">
          <div
            class="ratename text-semiblk font-medium sm:text-xl lg:text-[18px] xl:text-xl text-sm"
          >
            Total courses
          </div>
          <div
            class="ratenum text-drkblue sm:text-[56px] sm:text-left text-center text-[1.5rem] font-bold"
          >
            5
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div
        class="reasonbox grid sm:grid-cols-2 gap-6 grid-rows-2 mt-10 lg:mt-0 items-center justify-center place-content-center px-10 sm:px-16 lg:px-0"
      >
        <div
          class="reason flex flex-col gap-3"
          v-for="reason in reasons"
          :key="reason.id"
        >
          <img
            src="../../assets/images/icons/redcheck.svg"
            alt=""
            class="icon w-10 h-10 object-cover"
          />
          <div class="rtitle xl:text-xl text-base lg:text-[18px] font-semibold">
            {{ reason.title }}
          </div>
          <p class="text-greytext text-sm xl:text-base lg:text-[14px]">
            {{ reason.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reasons = [
  {
    id: 1,
    title: "Expand Your Network",
    text: "Collaborate with a diverse community of fellow mentors, tech enthusiasts, and professionals.",
  },
  {
    id: 2,
    title: "Personal Fulfillment",
    text: "Mentoring is a deeply rewarding experience. Witness the growth of your mentees.",
  },
  {
    id: 3,
    title: "Empower Future Tech Leaders",
    text: "By becoming a mentor, you'll play a pivotal role in helping participants develop the skills, knowledge, and ",
  },
  {
    id: 4,
    title: "Expand Your Network",
    text: "Collaborate with a diverse community of fellow mentors, tech enthusiasts, and professionals.",
  },
];
</script>
<style></style>
