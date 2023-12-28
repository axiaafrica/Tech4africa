<template>
  <div
    class="header md:pt-28 pt-16 container-center px-3 md:px-0 flex md:flex-row flex-col gap-10 justify-between overflow-hidden"
  >
    <div
      class="textside w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start gap-5 lg:gap-8 pt-6"
      v-motion-slide-visible-left
    >
      <div
        class="why pinkbg w-[250px] md:w-[296px] py-3 md:py-4 px-2 lg:text-base text-xs flex justify-center"
      >
        <div class="textss rainbow">Why Tech for Africa bootcamp ?</div>
      </div>
      <div
        class="unlock text-drkblue text-xl md:text-[28px] md:px-0 px-6 lg:text-[32px] leading-[130%] font-semibold"
      >
        Unlock your potentials, <span class="rainbow">gain</span> valuable
        <span class="rainbow">skills</span> to kickstart your tech journey for
        free .
      </div>
      <div
        class="experience text-litgrey text-sm md:text-xl lg:text-2xl md:px-0 px-7"
      >
        Experience world-class mentorship, cutting-edge learning, and endless
        opportunities. It's not just a bootcamp; it's a journey towards a
        brighter future.
      </div>
      <div
        class="register-review flex md:flex-row flex-col gap-3 md:gap-8 items-center"
      >
        <nuxt-link to="/register">
          <button
            class="register-btn bluebtn text-white px-20 md:px-8 text-xs md:text-sm lg:text-base"
          >
            Register now
          </button></nuxt-link
        >
        <div class="review text-xs md:text-sm font-semibold text-greytext">
          <p class="inline md:block mr-1 md:mr-0">
            Over 200 thousand + beneficiaries,
          </p>
          <button class="text-axiared underline inline md:block">
            <a href="#reviews"> see reviews here</a>
          </button>
        </div>
      </div>
    </div>
    <div class="imageside w-full md:w-1/2">
      <img
        src="../../assets/images/homepage/HEROSECTIONIMAGE.png"
        alt=""
        class="hero-img w-full object-cover"
        v-motion-fade-visible-once
      />
    </div>
  </div>
</template>

<script></script>

<style>
.bouncy {
  animation: bouncy 2s ease;
}
.secbouncy {
  animation: secbouncy 2s ease;
}
.thibouncy {
  animation: thibouncy 2s ease;
}
.pop {
  animation: pop 2s ease;
}

@keyframes bouncy {
  0% {
    opacity: 0;
    transform: translateX(-500px);
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes secbouncy {
  0% {
    opacity: 0;
    transform: translateX(-1500px);
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes thibouncy {
  0% {
    opacity: 0;
    transform: translateX(-2500px);
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes pop {
  0% {
    /* opacity: 0; */
    transform: scale(0.9);
  }
  99% {
    /* opacity: 1; */
  }
  100% {
    /* opacity: 1; */
    transform: scale(1);
  }
}
</style>
