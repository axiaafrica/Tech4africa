<template>
  <div class="reviews-conatiner my-20">
    <div class="title-conatiner flex justify-center">
      <div class="bordered-title">
        <div class="pink-container-b text-base md:text-xl">
          Reviews from beneficiaries of TFA
        </div>
      </div>
    </div>
    <div
      class="bigtitle text-base md:text-[28px] font-semibold text-blkblk mt-10 text-center px-3 md:px-40"
    >
      Here's how each type of partnership can contribute to the success of the "Tech for
      Africa Bootcamp by Axia Africa
    </div>
    <div class="reviwss relative">
      <div class="overlay absolute w-full h-full top-0 left-0 z-30"></div>
      <div class="reviewboxx flex flex-col gap-6 mt-12">
        <Vue3Marquee :direction="'reverse'" :duration="50">
          <div
            v-for="card in cards"
            :key="card.name"
            class="mx-3 md:mx-5 title-text bordered-box-outer"
          >
            <div
              class="pink-container text-semiblk w-[293px] md:w-[342px] h-[200px] md:h-[274px] overflow-hidden"
            >
              <div class="titlee flex justify-between items-center mb-4">
                <div class="maintitle text-greytext text-sm md:text-xl font-semibold">
                  {{ card.name }}
                </div>
                <div class="icon"><img :src="card.icon" alt="" class="w-7" /></div>
              </div>
              <div class="note text-semiblk text-sm md:text-base">{{ card.comment }}</div>
            </div>
          </div>
        </Vue3Marquee>
        <Vue3Marquee :duration="50">
          <div
            v-for="card in cards"
            :key="card.name"
            class="mx-3 md:mx-5 title-text bordered-box-outer"
          >
            <div
              class="pink-container text-semiblk w-[293px] md:w-[342px] h-[200px] md:h-[274px] overflow-hidden"
            >
              <div class="titlee flex justify-between items-center mb-4">
                <div class="maintitle text-greytext text-sm md:text-xl font-semibold">
                  {{ card.name }}
                </div>
                <div class="icon"><img :src="card.icon" alt="" class="w-7" /></div>
              </div>
              <div class="note text-semiblk text-sm md:text-base">{{ card.comment }}</div>
            </div>
          </div>
        </Vue3Marquee>
        <Vue3Marquee :direction="'reverse'" :duration="50">
          <div
            v-for="card in cards"
            :key="card.name"
            class="mx-3 md:mx-5 title-text bordered-box-outer"
          >
            <div
              class="pink-container text-semiblk w-[293px] md:w-[342px] h-[200px] md:h-[274px] overflow-hidden"
            >
              <div class="titlee flex justify-between items-center mb-4">
                <div class="maintitle text-greytext text-sm md:text-xl font-semibold">
                  {{ card.name }}
                </div>
                <div class="icon"><img :src="card.icon" alt="" class="w-7" /></div>
              </div>
              <div class="note text-semiblk text-sm md:text-base">{{ card.comment }}</div>
            </div>
          </div>
        </Vue3Marquee>
      </div>
      <div class="bluebtn-box hidden md:flex justify-center mt-12 font-semibold">
        <div class="bluebtn">See more reviews</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import { cards } from "../landing/landingstore";

// const cards = [
// 	{
// 		comment: "Today's class was simply fantastic! I am extremely grateful for the invaluable knowledge and insights I have gained in front-end development. The bootcamp has been an amazing experience so far, and I'm excited to work on my project and showcase my newly acquired skills.",
// 		name: 'Emmzycode',
// 	},
// 	{
// 		comment: "Day 8 of #axiaafricatechbootcamp The experience of this bootcamp has been amazing and wonderful. I appreciate Axia Africa and have learned a lot so far. We learned about how to build a storage website with HTML and CSS today. Thank you @axiaafrica",
// 		name: 'Umolo Blessing Johnson',
// 	},
// 	{
// 		comment: 'Axia Africa has been so helpful to me. I got into tech with zero knowledge of it, didn’t even know my way around a good system. But right now, I know more than I would’ve imagined that I can before I got into the academy. Very helpful, kind, patient and thoughtful teachers too. This training has really helped me! I highly recommend it! Thank youuu.',
// 		name: 'Miracle Okechi',
// 	},
// 	{
// 		comment: "After a successful completion of a 2weeks Data Analytics Bootcamp at Axia Africa where I learned data cleaning, sorting and worked on a project with my fellow group members, I was issued a certificate of attendance and completion.I want to appreciate Axia Africa for this opportunity as this birthed a growing passion to pursue the tech skill fully and be a professional in the long run.One down, many more to go",
// 		name: 'Taiye Akinlotan',
// 	},
// 	{
// 		comment: "I’m excited to announce that I enrolled for the one week bootcamp for tech skills at Axia Africa.I’m currently studying in the Frontend development track. Yesterday was day 1- Introduction to Frontend Development, it was a really insightful and educative session. Lessons continue today and I’m very much anticipating!",
// 		name: 'Precious Irabor',
// 	},
// 	{
// 		comment: "Tech Boot Camp!!! Started a 2weeks tech boot camp at Axia Africa yesterday 27th March 2023. Today being Day 2! It has been awesome so far, the lectures, presentation everything in total.. Learnt about the fundamental principles of UX Designs yesterday and today, we learnt",
// 		name: 'Lilian',
// 	},
// 	{
// 		comment: 'Today was a great day being the day of the training which I learnt about Digital Analysis. We were taken through the foundation of analysis where we were taught the principles Data analysis Wich includes EGA (Explain,Gather and Analyse)',
// 		name: 'Totori',
// 	},
//     {
// 		comment: 'Thank you Axia Africasuccessfully completed my bootcamp and trust me I learnt a lotfrom our mentors to the students. was really worth it!',
// 		name: 'Blessing Lotanna',
// 	},
//     {
// 		comment: "As a newbie in tech, I've gone from no prior knowledge to having a substantial amount of knowledge on Product Design...This is all thanks to @axiaafrica & various mentors..I'm grateful for the opportunity to be part of this great achievement",
// 		name: 'Peter Ella',
// 	},
//     {
// 		comment: "Started my Web development journey with @axiaafrica today and it was so interesting. Day 1 I was introduced to Web development and the tools needed. Can't wait for Day 2, more interesting details to cover about the course",
// 		name: 'Glory',
// 	},
// ]
</script>
<style scoped>
.revoverlay {
  background-image: linear-gradient(
    to right,
    rgba(250, 251, 251, 0) 10%,
    #fff 80%,
    rgba(250, 251, 251, 0) 10%
  );
}
</style>
