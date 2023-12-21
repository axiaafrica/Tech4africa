<template>
  <div class="container-center pt-24">
    <div class="toptitle sm:mt-10 mt-[1.41rem] flex justify-center">
      <div class="pinkbg px-10 py-2 font-semibold">
        <div class="text-greytext sm:text-base text-xs">
          {{ edition }} Bootcamp Edition Highlights
        </div>
      </div>
    </div>
    <div
      class="headermain mt-12 flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-8 lg:px-7 xl:px-0 px-0"
    >
      <div class="leftside lg:w-1/2 sm:px-16 lg:px-0 px-7">
        <div
          class="sm:text-[40px] font-bold text-[1.25rem] text-center lg:text-left"
        >
          Empowering Tomorrow's Tech Innovators, the journey that launched a
          thousand dreams.
        </div>
        <div
          class="text-litgrey sm:text-2xl text-sm mt-5 mb-8 text-center lg:text-left px-7 lg:px-0"
        >
          This is where it all began, where passion met opportunity, and where
          tech enthusiasts transformed into tech professionals.
        </div>
        <div class="firsthiglight text-textblk flex gap-3 items-start lg:mt-16">
          <img
            src="../../assets/images/editions/rainbowcheck.svg"
            alt=""
            class="hidden lg:block"
          />
          <div class="texts">
            <div class="font-semibold sm:text-2xl text-base hidden lg:block">
              {{ firsttitle }}
            </div>
            <p class="sm:text-lg text-sm mt-3 hidden lg:block">
              {{ firstnote }}
            </p>
          </div>
        </div>
      </div>
      <div class="rightside lg:w-1/2 sm:px-16 px-7 lg:px-0 flex flex-col gap-6">
        <div class="secondhiglight text-textblk flex gap-3 items-start">
          <img src="../../assets/images/editions/rainbowcheck.svg" alt="" />
          <div class="texts">
            <div class="font-semibold sm:text-2xl text-base">
              {{ secondtitle }}
            </div>
            <p class="sm:text-lg text-sm mt-3">
              {{ secondnote }}
            </p>
          </div>
        </div>
        <div class="thirdhiglight text-textblk flex gap-3 items-start">
          <img src="../../assets/images/editions/rainbowcheck.svg" alt="" />
          <div class="texts">
            <div class="font-semibold sm:text-2xl text-base">
              {{ thirdtitle }}
            </div>
            <p class="sm:text-lg text-sm mt-3">
              {{ thirdnote }}
            </p>
          </div>
        </div>
        <div class="fourthhiglight text-textblk flex gap-3 items-start">
          <img src="../../assets/images/editions/rainbowcheck.svg" alt="" />
          <div class="texts">
            <div class="font-semibold sm:text-2xl text-base">
              {{ fourthtitle }}
            </div>
            <p class="sm:text-lg text-sm mt-3">
              {{ fourthnote }}
            </p>
          </div>
        </div>
        <div class="firsthiglight text-textblk flex gap-3 items-start">
          <img
            src="../../assets/images/editions/rainbowcheck.svg"
            alt=""
            class="block lg:hidden"
          />
          <div class="texts">
            <div class="font-semibold sm:text-2xl text-base block lg:hidden">
              {{ firsttitle }}
            </div>
            <p class="sm:text-lg text-sm mt-3 block lg:hidden">
              {{ firstnote }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  edition: {
    default: "default title",
    type: String,
  },
  firsttitle: {
    default: "default title",
    type: String,
  },
  firstnote: {
    default: "default title",
    type: String,
  },
  secondtitle: {
    default: "default title",
    type: String,
  },
  secondnote: {
    default: "default title",
    type: String,
  },
  thirdtitle: {
    default: "default title",
    type: String,
  },
  thirdnote: {
    default: "default title",
    type: String,
  },
  fourthtitle: {
    default: "default title",
    type: String,
  },
  fourthnote: {
    default: "default title",
    type: String,
  },
});
</script>
