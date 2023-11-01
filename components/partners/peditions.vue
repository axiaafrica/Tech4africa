<template>
  <div class="editionsbox mt-32 bg-btnblue pt-12">
    <div class="titles flex flex-col gap-6 justify-center max-w-[960px] mx-auto">
      <div class="btnb flex justify-center">
        <div class="btn outerbtn2">
          <button class="titlebtn2 text-xl">Bootcamps Editions</button>
        </div>
      </div>
      <p class="text-base text-blkblk font-medium text-center px-56">
        Tech for Africa Bootcamp by Axia Africa" provide individuals with first-hand
        knowledge and practical skills
      </p>
    </div>
    <div class="editions bg-btnblue px-[120px] py-10 mt-12">
      <div class="editionsboxess">
        <div class="bigbox bg-white p-5 flex justify-between gap-4">
          <div
            class="editionboxes bg-btnblue p-5 flex flex-col gap-3 w-1/2"
            v-for="edition in editions"
            :key="edition.edition"
          >
            <div class="redicon">
              <img src="../../assets/images/icons/redglobe.svg" alt="" class="" />
            </div>
            <div class="edition-name">
              <span>{{ edition.edition }}</span> bootcamp - Official sponsor of this
              edition.
            </div>
            <div class="imgcontainer flex gap-3 items-center">
              <div v-for="sponsors in edition.sponsor" :key="sponsors" class="sponsor">
                <img :src="sponsors" alt="" class="w-[120px] h-8 object-cover" />
              </div>
            </div>

            <div class="summery text-semiblk">{{ edition.summery }}</div>
            <div class="bootimg bg-axiablue w-full px-8 h-[319px]">
              <img :src="edition.image" alt="" class="h-full w-full object-cover" />
            </div>
            <div class="see">
              <a href="" class="flex items-center gap-2 text-axiared underline">
                See more
                <span
                  ><img src="../../assets/images/icons/arrowright.svg" alt="" class=""
                /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="waitlist bg-white px-5 pb-5">
        <div class="waitlistbox bg-btnblue">
          <div class="p-5 flex justify-center">
            <div class="waitlistinfo max-w-[614px] text-center flex flex-col gap-5">
              <div class="join text-[28px] font-semibold px-20">
                Become a Partner sponsor of our next bootcamp
              </div>
              <p class="hello px-8">
                Tech for Africa Bootcamp by Axia Africa" provide individuals with
                first-hand knowledge and practical skills necessary to kickstart their
                journey in the tech industry.
              </p>
              <form action="" class="flex flex-col gap-3 px-14">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Axiaafrica@gmail.com"
                  class="px-5 py-4 rounded-lg"
                />
                <div class="btn mt-3">
                  <button class="bluebtn">Reach out to us</button>
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
