<template>
  <div>
    <div
      class="btnb container-center flex flex-col gap-8 text-center items-center mt-20 mb-5"
    >
      <div class="btn outerbtn">
        <button class="titlebtn text-sm md:text-xl hidden lg:block">
          {{ edition }} bootcamp In pictures</button
        ><button class="titlebtn text-sm md:text-xl block lg:hidden">
          {{ edition }} bootcamp In Edition
        </button>
      </div>
    </div>

    <div
      class="text-center sm:px-12 lg:px-[16rem] sm:py-[2.56rem] pt-[1.25rem] pb-[2.5rem] sm:pt-0 sm:pb-0 text-[#121212] text-base px-10 leading-[1.5rem] lg:text-[1.5rem] font-semibold sm:leading-[2.25rem]"
    >
      As a Tech for Africa Bootcamp partner sponsor you can contribute to
      various initiatives and funding that enable the program's success and
      provide valuable support to participants.
    </div>
    <div class="editions bg-btnblue px-7 md:px-[120px] py-4 md:py-10 mt-12">
      <div class="editionsboxess">
        <div class="bigbox bg-white p-3 md:p-5 h-auto">
          <div
            class="bg-btnblue rounded-xl p-5 grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-5"
          >
            <img
              src="../../assets/images/editions/editionpic1.png"
              alt=""
              class="w-full h- full object-cover"
            />
            <img
              src="../../assets/images/editions/editionpic2.png"
              alt=""
              class="w-full h- full object-cover"
            />
            <img
              src="../../assets/images/editions/editionpic1.png"
              alt=""
              class="w-full h- full object-cover"
            />
            <img
              src="../../assets/images/editions/editionpic3.png"
              alt=""
              class="w-full h- full object-cover"
            />
            <img
              src="../../assets/images/editions/editionpic3.png"
              alt=""
              class="w-full h- full object-cover"
            />
            <img
              src="../../assets/images/editions/editionpic3.png"
              alt=""
              class="w-full h- full object-cover"
            />
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
                class="join text-base md:text-[28px] font-semibold sm:px-20 px-10 leading-[1.5rem] sm:leading-[2.625rem]"
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
                  class="sm:px-5 px-7 py-4 rounded-lg placeholder:text-sm md:placeholder:text-base"
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

<script setup>
defineProps({
  edition: {
    edition: "default title",
    type: String,
  },
});
</script>

<style scoped></style>
