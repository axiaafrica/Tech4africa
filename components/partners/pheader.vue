<template>
  <div class="container-center lg:mt-8 mt-[1.41rem]">
    <div class="mainheader flex flex-col items-center w-full">
      <div
        class="topcont flex justify-center flex-col gap-4 items-center max-w-[700px] text-center"
      >
        <div class="btn1">
          <div class="pinkbg px-10 lg:py-2 py-1 font-semibold">
            <div class="text-greytext lg:block hidden">
              Become one the bootcamp sponsors
            </div>
            <div
              class="text-greytext lg:hidden block sm:text-[1.5rem] text-[0.75rem] rainbow"
            >
              Why Tech for Africa bootcamp?
            </div>
          </div>
        </div>
        <div
          class="bigtext text-greytext font-bold sm:text-[40px] text-[1.25rem] px-5 lg:px-0"
        >
          We believe in the power of partnerships and sponsorship.
        </div>
        <div
          class="smalltext sm:text-2xl text-[0.875rem] px-5 lg:px-0 text-litgrey"
        >
          Experience world-class mentorship, cutting-edge learning, and endless
          opportunities.
        </div>
      </div>
      <div class="btn2 mt-10 lg:hidden block">
        <div class="bluebtn">Become a partner</div>
      </div>
      <div class="partners mt-10 flex gap-7">
        <img
          src="../../assets/images/partner/partner1.png"
          alt=""
          class="w-[300px] h-[364px] object-cover lg:block hidden"
          v-motion-slide-visible-left
        />
        <img
          src="../../assets/images/partner/partner2.png"
          alt=""
          class="sm:w-[350px] w-[15.30769rem] h-[19.8125rem] sm:h-[453px] object-cover"
          v-motion-slide-visible-bottom
        />
        <img
          src="../../assets/images/partner/partner3.png"
          alt=""
          class="w-[300px] h-[364px] object-cover lg:block hidden"
          v-motion-slide-visible-right
        />
      </div>
      <div class="btn2 mt-10 lg:block hidden">
        <div class="bluebtn">Become a partner</div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
