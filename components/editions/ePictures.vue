<template>
  <div>
    <div class="btnb container-center flex flex-col gap-8 text-center items-center mt-20">
      <div class="btn outerbtn">
        <button class="titlebtn text-sm md:text-xl">
          {{ edition }} bootcamp In pictures
        </button>
      </div>
    </div>
    <div class="editions bg-btnblue px-4 md:px-[120px] py-4 md:py-10 mt-12">
      <div class="editionsboxess">
        <div class="bigbox bg-white p-3 md:p-5">
          <div class="bg-btnblue rounded-xl p-5 grid grid-cols-3 gap-5">
            <img src="../../assets/images/editions/editionpic1.png" alt="" />
            <img src="../../assets/images/editions/editionpic2.png" alt="" />
            <img src="../../assets/images/editions/editionpic1.png" alt="" />
            <img src="../../assets/images/editions/editionpic3.png" alt="" />
            <img src="../../assets/images/editions/editionpic3.png" alt="" />
            <img src="../../assets/images/editions/editionpic3.png" alt="" />
          </div>
        </div>
      </div>
      <div class="waitlist bg-white px-5 pb-5">
        <div class="waitlistbox bg-btnblue">
          <div class="p-5 flex justify-center">
            <div class="waitlistinfo max-w-[614px] text-center flex flex-col gap-5">
              <div class="join text-base md:text-[28px] font-semibold px-20">
                Join the waiting list for Tech for Africa Bootcamp 3.0
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
                  <button class="bluebtn text-sm md:text-base">
                    Join the waiting list
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

<script setup>
defineProps({
  edition: {
    edition: "default title",
    type: String,
  },
});
</script>

<style scoped></style>
