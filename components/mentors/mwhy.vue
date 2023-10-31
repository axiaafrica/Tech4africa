<template>
  <div class="whyy mt-24 container-center flex justify-between gap-28">
    <div class="left">
      <div class="head text-greytext text-[28px] font-bold">
        Why Volunteer as a Mentor
      </div>
      <p class="parag text-greytext mt-4">
        Our team of writers, developers, and influencers is ready to help to learn about
        starting business with some inspiration.
      </p>
      <div class="ratings flex gap-16 mt-10">
        <div class="rate1">
          <div class="ratename text-semiblk font-medium text-xl">Total students</div>
          <div class="ratenum text-drkblue text-[56px] font-bold">8000+</div>
        </div>
        <div class="rate2">
          <div class="ratename text-semiblk font-medium text-xl">Total courses</div>
          <div class="ratenum text-drkblue text-[56px] font-bold">5</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="reasonbox grid grid-cols-2 gap-6">
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
          <div class="rtitle text-xl font-semibold">{{ reason.title }}</div>
          <p class="text-greytext">
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
    text:
      "Collaborate with a diverse community of fellow mentors, tech enthusiasts, and professionals.",
  },
  {
    id: 2,
    title: "Personal Fulfillment",
    text:
      "Mentoring is a deeply rewarding experience. Witness the growth of your mentees.",
  },
  {
    id: 3,
    title: "Empower Future Tech Leaders",
    text:
      "By becoming a mentor, you'll play a pivotal role in helping participants develop the skills, knowledge, and ",
  },
  {
    id: 4,
    title: "Expand Your Network",
    text:
      "Collaborate with a diverse community of fellow mentors, tech enthusiasts, and professionals.",
  },
];
</script>
<style></style>
