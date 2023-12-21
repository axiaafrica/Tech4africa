<template>
  <footer class="bg-deepblue text-footgrey">
    <div class="mx-auto w-full container-center px-3 md:px-0 py-12">
      <div
        class="lg:flex lg:justify-between lg:items-center w-full lg:px-5 sm:flex sm:justify-between sm:px-1 px-7 space-y-5"
      >
        <div class="mb-6 md:mb-0 w-[278px]">
          <div class="logobox">
            <nuxt-link to="/">
              <div class="logo text-2xl sm:text-3xl font-semibold">
                <img
                  src="../../assets/images/icons/axialogo.svg"
                  alt=""
                  class="w-[100px] md:w-[148px]"
                />
              </div>
            </nuxt-link>
            <div class="footsummery text-xs sm:text-[10px] mt-5">
              Tech for Africa Bootcamp by Axia Africa provide individuals in
              Africa with first-hand knowledge and practical skills necessary to
              kickstart their journey in the tech industry
            </div>
          </div>
        </div>
        <div
          class="lg:flex sm:flex-col sm:grid sm:grid-cols-2 md:flex-row gap-8 md:gap-20 space-y-7 sm:space-y-0"
        >
          <div class="">
            <h2 class="mb-3 font-semibold text-xl">Contact Us</h2>
            <ul class="flex flex-col gap-2 text-base md:text-xl">
              <li>
                <a href="#" class="hover:underline text-[15px]">09015558035</a>
              </li>
              <li>
                <a href="#" class="hover:underline text-[15px]"
                  >axiaafrica@gmail.com</a
                >
              </li>
            </ul>
          </div>
          <div class="text-xl">
            <h2 class="mb-3 font-semibold">About</h2>
            <ul class="flex flex-col gap-2 text-base md:text-xl">
              <nuxt-link to="/mentors">
                <li class="text-[15px] hover:underline">Mentors</li>
              </nuxt-link>
              <nuxt-link to="/partners">
                <li class="text-[15px] hover:underline">Partners</li>
              </nuxt-link>
            </ul>
          </div>
          <div class="text-xl">
            <h2 class="mb-3 font-semibold">Editions</h2>
            <ul class="flex flex-col gap-2 text-base md:text-xl">
              <nuxt-link to="/editions/firstEdition">
                <li>
                  <p class="hover:underline text-[15px]">
                    1st bootcamp highlights
                  </p>
                </li>
              </nuxt-link>
              <nuxt-link to="/editions/secondEdition">
                <li>
                  <p class="hover:underline text-[15px]">
                    2nd bootcamp highlights
                  </p>
                </li>
              </nuxt-link>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="sm:flex sm:items-center sm:justify-center mt-12 text-base px-7 sm:px-0"
      >
        © 2023 Axia Africa. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
