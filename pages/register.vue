<template>
  <div
    class="bg-[#F9FAFB]/50 lg:h-[68rem] h-full w-full lg:pt-28 sm:pt-36 sm:pb-20 lg:py-0 pt-28 pb-20 lg:pb-0"
  >
    <div
      class="lg:max-w-[60rem] xl:max-w-[74.5rem] mx-auto flex sm:flex-col flex-col lg:flex-row xl:gap-[5rem] lg:gap-[3rem] justify-center items-center"
    >
      <div
        class="bg-[#101828] sm:w-[37rem] w-[21rem] xl:w-[42.125rem] lg:w-[32rem] sm:h-[56.5rem] h-[40rem] rounded-3xl pb-5 p-7 flex flex-col justify-between"
      >
        <div class="p-2">
          <img
            src="../assets/images/register/TFA LOGO.png"
            alt=""
            class="sm:w-[13.7102rem] sm:h-[5.1360rem] w-[10rem] h-[3.5rem] object-cover"
            v-motion-fade-visible-once
          />
        </div>
        <div class="flex shrink-0">
          <div
            class="sm:w-[30.25rem] sm:h-[20.625rem] w-[19.7rem] h-[19.7rem] bg-white rounded-2xl sm:p-[1.3rem] p-[1rem]"
          >
            <p
              class="text-[#101828] sm:text-[1.15rem] text-xs font-semibold sm:leading-[1.875rem] leading-[1.5rem]"
            >
              Axia Africa has been so helpful to me. I got into tech with zero
              knowledge of it, didn’t even know my way around a good system. But
              right now, I know more than I would’ve imagined that I can before
              I got into the academy. Very helpful, kind, patient and thoughtful
              teachers too. This training has really helped me! I highly
              recommend it! Thank youuu.
            </p>
            <div class="sm:mt-4 mt-5 flex gap-5">
              <img
                src="../assets/images/register/Avatars.png"
                alt=""
                class="w-[2.5rem] h-[2.5rem] object-cover"
                v-motion-fade-visible-once
              />
              <p
                class="text-[#101828] sm:text-[1.5rem] text-xs font-medium leading-[2.25rem]"
              >
                Oyinlola Babalola
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="lg:w-[25rem] sm:w-[37rem] xl:w-[35.12rem] w-[20rem] h-[50.125rem] lg:py-[2.52rem] sm:py-[4.5rem] sm:px-5 lg:px-0 pt-12 sm:pt-0 lg:pt-10"
      >
        <div
          class="sm:text-[2rem] text-[1.5rem] font-medium leading-normal sm:leading-[3rem] text-[#1B1818]"
        >
          Start your bootcamp registration process here.
        </div>

        <p
          class="text-[#645D5D] text-sm font-medium leading-[1.26875rem] flex gap-3 pt-[0.5rem] pb-[2rem]"
        >
          Already a student? <span class="text-[#00005E]">Log in here</span>
        </p>
        <form>
          <div class="space-y-[1rem]">
            <div>
              <div
                for="FullName"
                class="formlabel pl-2 sm:pl-0 sm:text-sm text-xs leading-[1.3125rem] font-semibold pb-[0.38rem]"
              >
                Full name
              </div>
              <input
                type="text"
                placeholder="Jane Mary"
                class="text-[#424040] text-base sm:w-[32rem] w-[20rem] p-4 xl:w-[30.875rem] lg:w-[25rem] focus:outline-blue-400 rounded-xl border-2 border-[#D0D5DD]"
              />
            </div>
            <div>
              <div
                for="Email"
                class="formlabel sm:text-sm pl-2 sm:pl-0 text-xs leading-[1.3125rem] font-semibold pb-[0.38rem]"
              >
                Email
              </div>
              <input
                type="text"
                placeholder="janemary@gmail.com"
                class="text-[#424040] text-base sm:w-[32rem] w-[20rem] p-4 lg:w-[25rem] xl:w-[30.875rem] focus:outline-blue-400 rounded-xl border-2 border-[#D0D5DD]"
              />
            </div>
            <div>
              <div
                for="Phone Number"
                class="formlabel sm:text-sm pl-2 sm:pl-0 text-xs leading-[1.3125rem] font-semibold pb-[0.38rem]"
              >
                Phone Number
              </div>
              <input
                type="text"
                placeholder="+234 090564739"
                class="text-[#424040] text-base sm:w-[32rem] w-[20rem] p-4 lg:w-[25rem] xl:w-[30.875rem] focus:outline-blue-400 rounded-xl border-2 border-[#D0D5DD]"
              />
            </div>
            <div>
              <div
                for="Choice of Course"
                class="formlabel sm:text-sm pl-2 sm:pl-0 text-xs leading-[1.3125rem] font-semibold pb-[0.38rem]"
              >
                Choice of Course
              </div>
              <select
                class="text-[#424040] text-base p-4 sm:w-[32rem] w-[20rem] lg:w-[25rem] xl:w-[30.875rem] focus:outline-blue-400 rounded-xl border-2 border-[#D0D5DD]"
              >
                <option>Product Design</option>
                <option>Digital Marketing</option>
                <option>Frontend Development</option>
                <option>Product Management</option>
                <option>Data Analytics</option>
              </select>
            </div>
            <div>
              <div
                for="fullName"
                class="formlabel sm:text-sm pl-2 sm:pl-0 text-xs leading-[1.3125rem] font-semibold pb-[0.38rem]"
              >
                How did you hear about us
              </div>
              <select
                class="text-[#424040] text-base p-4 sm:w-[32rem] w-[20rem] lg:w-[25rem] xl:w-[30.875rem] focus:outline-blue-400 rounded-xl border-2 border-[#D0D5DD]"
              >
                <option>Twitter</option>
                <option>LinkedIn</option>
                <option>From a friend</option>
                <!-- <option>Product Management</option>
            <option>Data Analytics</option> -->
              </select>
            </div>
            <div class="pt-[1rem]">
              <button
                class="lg:w-[25rem] sm:w-[32rem] xl:w-[30.875rem] w-[20rem] p-3 rounded-md shadow-sm bg-[#00005E] text-white border-2 border-[#7F56D9]"
              >
                Join Bootcamp
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script></script>
<style></style>
