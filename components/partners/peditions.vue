<template>
  <div class="editionsbox mt-32 bg-btnblue pt-12">
    <div
      class="titles flex flex-col gap-6 justify-center max-w-[960px] mx-auto"
    >
      <div class="btnb flex justify-center">
        <div class="btn outerbtn2">
          <button class="titlebtn2 sm:text-xl text-sm">
            Bootcamps Editions
          </button>
        </div>
      </div>
      <p
        class="sm:text-base text-xs px-5 text-blkblk font-medium text-center sm:px-56 leading-[1.3125rem] sm:leading-[1.5rem]"
      >
        Tech for Africa Bootcamp by Axia Africa" provide individuals with
        first-hand knowledge and practical skills
      </p>
    </div>
    <div
      class="editions bg-btnblue lg:px-[120px] sm:py-10 lg:mt-12 mt-[1.5rem] px-[2.06rem]"
    >
      <div class="editionsboxess">
        <div
          class="bigbox bg-white p-5 flex sm:flex-row flex-col sm:justify-between gap-4"
        >
          <div
            class="editionboxes bg-btnblue p-5 flex flex-col gap-3 sm:w-1/2"
            v-for="edition in editions"
            :key="edition.edition"
          >
            <div class="redicon">
              <img
                src="../../assets/images/icons/redglobe.svg"
                alt=""
                class=""
              />
            </div>
            <div class="edition-name">
              <p
                class="text-base md:text-[1.45rem] lg:text-[1.55rem] font-semibold"
              >
                <span>{{ edition.edition }}</span> bootcamp - Official sponsor
                of this edition.
              </p>
            </div>
            <div class="imgcontainer flex gap-3 items-center">
              <div
                v-for="sponsors in edition.sponsor"
                :key="sponsors"
                class="sponsor"
              >
                <img
                  :src="sponsors"
                  alt=""
                  class="w-[120px] sm:h-8 object-cover"
                />
              </div>
            </div>

            <div class="summery text-semiblk text-xs sm:text-base">
              {{ edition.summery }}
            </div>
            <div class="bootimg bg-axiablue w-full px-8 h-[319px]">
              <img
                :src="edition.image"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
            <div class="see">
              <a href="" class="flex items-center gap-2 text-axiared underline">
                See more
                <span
                  ><img
                    src="../../assets/images/icons/arrowright.svg"
                    alt=""
                    class=""
                /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="waitlist bg-white px-5 pb-5">
        <div class="waitlistbox bg-btnblue">
          <div class="p-5 flex justify-center">
            <div
              class="waitlistinfo max-w-[614px] text-center flex flex-col gap-5"
            >
              <div
                class="join sm:text-[28px] text-base font-semibold px-3 sm:px-20"
              >
                Become a Partner sponsor of our next bootcamp
              </div>
              <p
                class="hello sm:px-8 sm:text-base px-3 text-xs sm:leading-[1.5rem] leading-[1.3125rem]"
              >
                Tech for Africa Bootcamp by Axia Africa" provide individuals
                with first-hand knowledge and practical skills necessary to
                kickstart their journey in the tech industry.
              </p>
              <form action="" class="flex flex-col gap-3 sm:px-14">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Axiaafrica@gmail.com"
                  class="px-5 py-4 rounded-lg hidden"
                />
                <div class="btn mt-3">
                  <button class="bluebtn text-xs sm:text-base">
                    Reach out to us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { editions } from "../landing/landingstore";
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
