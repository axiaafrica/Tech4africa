<template>
  <div class="editionsbox">
    <div
      class="titles flex flex-col gap-6 justify-center max-w-[960px] mx-auto px-3 md:px-0"
    >
      <div class="btnb flex justify-center">
        <div class="btn outerbtn">
          <button class="titlebtn text-sm md:text-xl">
            Bootcamps Editions
          </button>
        </div>
      </div>
      <p class="text-base md:text-2xl font-semibold text-center leading-normal">
        Each edition provides a dynamic and immersive learning experience
        designed to equip participants with the skills, knowledge, and
        connections needed to excel in the tech industry.
      </p>
    </div>
    <div class="editions bg-btnblue px-4 md:px-[120px] py-4 md:py-10 mt-12">
      <div class="editionsboxess">
        <div
          class="bigbox bg-white p-3 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div
            class="editionboxes bg-btnblue p-5 flex flex-col gap-3"
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
            <div class="edition-name font-semibold">
              <span>{{ edition.edition }}</span> bootcamp - Official sponsor of
              this edition.
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
                  class="w-[120px] h-7 sm:h-8 object-cover"
                />
              </div>
            </div>

            <div class="summery text-semiblk text-xs md:text-base">
              {{ edition.summery }}
            </div>
            <div class="bootimg bg-axiablue w-full px-8 h-[140px] md:h-[319px]">
              <img
                :src="edition.image"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
            <div class="see">
              <router-link
                :to="`/edition`"
                class="see flex items-center gap-2 text-axiared underline text-sm md:text-base"
              >
                see more

                <span
                  ><img
                    src="../../assets/images/icons/arrowright.svg"
                    alt=""
                    class=""
                /></span>
              </router-link>
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
                class="join text-base md:text-[28px] font-semibold px-20 leading-normal"
              >
                Join the waiting list for Tech for Africa Bootcamp 3.0
              </div>
              <p class="hello px-14 md:px-8 text-sm md:text-base">
                Tech for Africa Bootcamp by Axia Africa" provide individuals
                with first-hand knowledge and practical skills necessary to
                kickstart their journey in the tech industry.
              </p>
              <form action="" class="flex flex-col gap-3 px-14">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Axiaafrica@gmail.com"
                  class="px-5 py-4 rounded-lg placeholder:text-sm md:placeholder:text-base"
                />
                <div class="btn mt-3">
                  <nuxt-link to="/register">
                    <button class="bluebtn text-sm md:text-base">
                      Join the waiting list
                    </button>
                  </nuxt-link>
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
<style></style>
