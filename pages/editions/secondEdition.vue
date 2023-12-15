<template>
  <div>
    <LazyEditionsEHeader
      edition="2nd"
      firsttitle="Issued certificates to participant"
      firstnote="Our second edition had people in different countries in Africa, which we successfully transitioned them into the tech space and issued participants that finished with a certificate of attendance."
      secondtitle="Partnership sponsorship with Propel & Cardify"
      secondnote="The partnership between the Tech for Africa Bootcamp with Propel and Cardify was a significant collaboration that had a positive impact on the bootcamp's participants. "
      thirdtitle="Registered  over7,000 beneficiaries in  Africa"
      thirdnote="Our second edition had people in different countries in Africa, which we successfully transitioned them into the tech space and issued participants that finished with a certificate of attendance."
      fourthtitle="Featured on Vanguard news"
      fourthnote="TFA is set to become the largest and most impactful bootcamp in Africa, aiming to train over 200,000 Africans within a span of two years.To learn more about the Tech for Africa Bootcamp and our mission for this transformative event, visit Vanguard News."
    />
    <LazyEditionsERatings
      courses="5"
      beneficiaries="7k +"
      duration="1 week"
      countries="10+"
    />
    <LazyEditionsEPictures edition="2nd" />
    <LazyEditionsEReviews edition="2nd" title="second" />

    <div class="editionsSponsors">
      <div class="btnb flex justify-center">
        <div class="btn outerbtn">
          <button class="titlebtn text-sm md:text-xl">Sponsorship & Incentives</button>
        </div>
      </div>
      <div class="editions bg-btnblue px-4 md:px-[120px] py-4 md:py-0 mt-12">
        <div class="sponsortitle text-center px-60 py-16">
          <div class="text-drkblue text-[32px] font-semibold">
            Partners Who Made It Possible
          </div>
          <p class="text-semiblk">
            We extend our heartfelt gratitude to the partners and sponsors who believed in
            our mission and supported us during our second edition
          </p>
        </div>
        <div class="bigbox bg-white p-3 md:p-5">
          <div class="editionboxes bg-btnblue p-5 px-72 flex flex-col gap-3">
            <div class="redicon">
              <img src="../../assets/images/icons/redglobe.svg" alt="" class="" />
            </div>
            <div class="edition-name font-semibold">
              2nd bootcamp - Official sponsor of this edition.
            </div>
            <div class="imgcontainer flex gap-3 items-center">
              <div class="sponsor flex gap-5 items-center">
                <img src="../../assets/images/icons/propel.svg" alt="" />
                <img src="../../assets/images/icons/cardify.svg" alt="" />
              </div>
            </div>
            <div class="summery text-semiblk text-xs md:text-base">
              We partnered with Clickpay to bring the first edition of the bootcamp to
              live. Tech for Africa Bootcamp by Axia Africa" provide individuals with
              first-hand knowledge and practical skills necessary to kickstart their
            </div>
            <div class="bootimg bg-axiablue w-full px-8 h-[140px] md:h-[319px]">
              <img
                src="../../assets/images/homepage/bootcamp.png"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
            <div class="see">
              <a
                href=""
                class="flex items-center gap-2 text-axiared underline text-sm md:text-base"
              >
                See more
                <span
                  ><img src="../../assets/images/icons/arrowright.svg" alt="" class=""
                /></span>
              </a>
            </div>
          </div>
        </div>
        <div class="waitlist bg-white px-5 pb-5 pt-8">
          <div class="waitlistbox bg-btnblue">
            <div class="p-5 flex justify-center">
              <div class="waitlistinfo max-w-[614px] text-center flex flex-col gap-5">
                <div class="join text-base md:text-[28px] font-semibold px-20">
                  Become a Partner sponsor of our next bootcamp
                </div>
                <p class="hello px-14 md:px-8 text-sm md:text-base">
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
                    class="px-5 py-4 rounded-lg placeholder:text-sm md:placeholder:text-base"
                  />
                  <div class="btn mt-3">
                    <button class="bluebtn text-sm md:text-base">Reach out to us</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mentors mt-24">
      <div class="w-full flex justify-center container-center">
        <div
          class="borderbox flex justify-center items-center gap-6 px-5 py-3 border-[1px] border-[#F3F2F0] text-2xl"
        >
          <button class="active">2nd edition mentors</button>
        </div>
      </div>

      <div class="gallerybox mt-6 bg-litpink py-16 px-3">
        <div class="mentorbox container-center grid grid-cols-4 gap-y-20 gap-x-4">
          <div
            class="mentor w-full flex flex-col gap-1"
            v-for="mentor in Edition2"
            :key="mentor.id"
          >
            <div class="picture w-[300px] md:w-full h-[300px]">
              <img :src="mentor.picture" alt="" class="w-full h-full object-cover" />
            </div>
            <div class="mentorname text-lg font-bold">{{ mentor.mentorname }}</div>
            <div class="mentorname">{{ mentor.job }}</div>
            <a
              :href="mentor.socialUrl"
              target="_blank"
              class="socials flex gap-3 items-center"
            >
              <div class="icon"><img :src="mentor.socialicon" alt="" class="" /></div>
              <div class="handle text-lg underline">{{ mentor.socialhandle }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <LazyLandingBlog />
  </div>
</template>

<script setup>
import { Edition2 } from "@/components/editions/editionData";
</script>
<style scoped>
.active {
  background-color: #fffbf4;
  border-radius: 8px;
  color: #121212;
  padding: 12px 20px;
  font-weight: 500;
}
</style>
