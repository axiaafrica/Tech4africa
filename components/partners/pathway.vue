<template>
  <div
    class="conntribute-box lg:mt-16 mt-[2.75rem] md:mt-12 md:my-12 container-center px-3 md:px-0"
  >
    <div class="why-title flex justify-center">
      <div
        class="btnb container-center flex flex-col gap-8 text-center items-center"
      >
        <div class="btn outerbtn">
          <button class="titlebtn text-sm md:text-xl">
            Partnership pathways
          </button>
        </div>
      </div>
    </div>
    <div
      class="bigtitle text-base md:text-[28px] font-semibold text-textblk mt-6 md:mt-10 text-center px-2 md:px-40 sm:leading-[42px] leading-[1.5rem]"
    >
      Here's how each type of partnership can contribute to the success of the
      "Tech for Africa Bootcamp by Axia Africa.
    </div>
    <div
      class="contribute-boxes grid mt-12 lg:grid-cols-2 grid-cols-1 place-content-center gap-10"
    >
      <div
        v-for="card in contribute"
        :key="card.id"
        class="title-text bordered-box-outer text-xl"
      >
        <div class="blue-container text-semiblk">
          <div class="titlee flex gap-3 items-center mb-4">
            <div class="icon">
              <img
                src="../../assets/images/icons/pathway.svg"
                alt=""
                class=""
              />
            </div>
            <div
              class="maintitle text-greytext text-base md:text-xl font-semibold"
            >
              {{ card.title }}
            </div>
          </div>
          <div class="note text-semiblk text-sm md:text-base">
            {{ card.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contribute } from "./partnerstore";
</script>
<style></style>
