<template>
  <div class="container-center pt-24">
    <div class="toptitle mt-10 flex justify-center">
      <div class="pinkbg px-10 py-2 font-semibold">
        <div class="text-greytext">{{ edition }} Bootcamp Edition Highlights</div>
      </div>
    </div>
    <div class="headermain mt-12 flex justify-between gap-8">
      <div class="leftside w-1/2">
        <div class="text-[40px] font-bold">
          Empowering Tomorrow's Tech Innovators, the journey that launched a thousand
          dreams.
        </div>
        <div class="text-litgrey text-2xl mt-5 mb-8">
          This is where it all began, where passion met opportunity, and where tech
          enthusiasts transformed into tech professionals.
        </div>
        <div class="firsthiglight text-textblk flex gap-3 items-start mt-16">
          <img src="../../assets/images/editions/rainbowcheck.svg" alt="" />
          <div class="texts">
            <div class="font-semibold text-2xl">{{ firsttitle }}</div>
            <p class="text-lg mt-3">
              {{ firstnote }}
            </p>
          </div>
        </div>
      </div>
      <div class="rightside w-1/2 flex flex-col gap-6">
        <div class="secondhiglight text-textblk flex gap-3 items-start">
          <img src="../../assets/images/editions/rainbowcheck.svg" alt="" />
          <div class="texts">
            <div class="font-semibold text-2xl">{{ secondtitle }}</div>
            <p class="text-lg mt-3">
              {{ secondnote }}
            </p>
          </div>
        </div>
        <div class="thirdhiglight text-textblk flex gap-3 items-start">
          <img src="../../assets/images/editions/rainbowcheck.svg" alt="" />
          <div class="texts">
            <div class="font-semibold text-2xl">{{ thirdtitle }}</div>
            <p class="text-lg mt-3">
              {{ thirdnote }}
            </p>
          </div>
        </div>
        <div class="fourthhiglight text-textblk flex gap-3 items-start">
          <img src="../../assets/images/editions/rainbowcheck.svg" alt="" />
          <div class="texts">
            <div class="font-semibold text-2xl">{{ fourthtitle }}</div>
            <p class="text-lg mt-3">
              {{ fourthnote }}
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
