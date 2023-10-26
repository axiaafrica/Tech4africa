<template>
  <footer class="bg-deepblue text-footgrey">
    <div class="mx-auto w-full container-center px-3 md:px-0 py-12">
      <div class="md:flex md:justify-between md:items-center w-full">
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
            <div class="footsummery text-xs mt-5">
              Tech for Africa Bootcamp by Axia Africa provide individuals in Africa with
              first-hand knowledge and practical skills necessary to kickstart their
              journey in the tech industry
            </div>
          </div>
        </div>
        <div class="flex gap-8 md:gap-20">
          <div class="text-sm md:text-xl">
            <h2 class="mb-3 font-semibold">Contact Us</h2>
            <ul class="flex flex-col gap-2">
              <li>
                <a href="#" class="hover:underline">09015558035</a>
              </li>
              <li>
                <a href="#" class="hover:underline">axiaafrica@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="text-sm md:text-xl">
            <h2 class="mb-3 font-semibold">About</h2>
            <ul class="flex flex-col gap-2">
              <nuxt-link to="/mentors">
                <li>Mentors</li>
              </nuxt-link>
              <nuxt-link to="/partners">
                <li>Partners</li>
              </nuxt-link>
            </ul>
          </div>
          <div class="text-sm md:text-xl">
            <h2 class="mb-3 font-semibold">Editions</h2>
            <ul class="flex flex-col gap-2">
              <li>
                <a href="#" class="hover:underline">1st bootcamp highlights</a>
              </li>
              <li>
                <a href="#" class="hover:underline">2nd bootcamp highlights</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sm:flex sm:items-center sm:justify-center mt-12">
        © 2023 Axia Africa. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
