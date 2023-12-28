<template>
  <div class="main relative">
    <div
      class="navbar fixed top-0 left-0 py-4 md:px-0 px-3 w-full z-30 overflow-hidden bg-white"
    >
      <div class="lgscreens">
        <div class="mainn container-center">
          <div
            class="navbox flex justify-between items-center overflow-hidden hover:bootcamp-container-visible"
          >
            <nuxt-link to="/">
              <div class="logobox">
                <img
                  src="../../assets/images/homepage/TFALOGO.svg"
                  alt=""
                  class="logo-img w-16 md:w-28"
                />
              </div>
            </nuxt-link>
            <div class="socialsnav hidden md:flex gap-8 items-center">
              <div class="navlinks hidden md:block">
                <ul class="nav-links flex items-center gap-10 text-drkgrey">
                  <nuxt-link to="/partners">
                    <li class="links text-xl">Partner with us</li>
                  </nuxt-link>
                  <nuxt-link to="/mentors">
                    <li class="links flex items-center text-xl gap-1">
                      Mentors
                    </li></nuxt-link
                  >

                  <li class="links flex items-center text-xl gap-1 group">
                    Editions
                    <span>
                      <img
                        src="../../assets/images/icons/arrow_drop_down.svg"
                        alt=""
                        class="dropdown w-6 h-6 object-cover"
                      />
                    </span>
                    <div
                      class="editions w-[11.75rem] h-[6.25rem] bg-[#FFFBF4] p-[0.6rem] py-0 absolute top-5 right-[360px] z-20 hidden group-hover:block"
                    >
                      <ul
                        class="flex flex-col justify-center items-center gap-[1rem]"
                      >
                        <nuxt-link to="/editions/firstEdition">
                          <li
                            class="text-[#202054] text-sm font-medium leading-[1.25rem] underline"
                          >
                            1st bootcamp highlights
                          </li>
                        </nuxt-link>
                        <nuxt-link to="/editions/secondEdition">
                          <li
                            class="text-[#202054] text-sm font-medium leading-[1.25rem] underline"
                          >
                            2nd bootcamp highlights
                          </li>
                        </nuxt-link>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="socials hidden md:block">
                <ul class="sociallinks flex items-center gap-8">
                  <li class="sponsor-btn">
                    <button
                      class="btn1 py-3 px-5 border-borderCol border-[1px] text-drkblue font-semibold rounded-lg shadowsm"
                    >
                      Become a sponsor
                    </button>
                  </li>
                  <nuxt-link to="/register">
                    <li class="waitlist-btn">
                      <button
                        class="btn1 text-white font-semibold rounded-lg bluebtn"
                      >
                        Join waitlist
                      </button>
                    </li></nuxt-link
                  >
                </ul>
              </div>
            </div>
            <div class="smallscreen block md:hidden">
              <button class="md:hidden block" @click="toggleMenu">
                <img
                  src="../../assets/images/icons/menu.svg"
                  alt=""
                  class="menu"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Nav links (hidden on mobile) -->
    <div
      class="navs w-screen h-screen top-0 left-0 fixed pt-20 bg-[#020A0C]/50 z-20 flex flex-col items-end px-5"
      :class="{ block: showMenu, hidden: !showMenu }"
    >
      <div>
        <ul
          class="nav-links flex flex-col items-end gap-10 text-white font-semibold"
        >
          <nuxt-link to="/partners">
            <li class="links text-xl">Partner with us</li>
          </nuxt-link>
          <nuxt-link to="/mentors">
            <li class="links flex items-center text-xl gap-1">
              Mentors
            </li></nuxt-link
          >

          <li class="links flex items-center text-xl gap-1">
            Editions
            <span
              ><img
                src="../../assets/images/icons/arrow_drop_down.svg"
                alt=""
                class="dropdown w-6 h-6 object-cover"
            /></span>
          </li>
        </ul>
      </div>
      <div class="socials">
        <ul class="sociallinks flex flex-col items-center gap-4 mt-4">
          <li class="sponsor-btn">
            <button
              class="btn1 py-3 px-5 border-white bg-white border-[1px] text-drkblue font-semibold rounded-lg shadowsm"
            >
              Become a sponsor
            </button>
          </li>
          <li class="waitlist-btn">
            <nuxt-link to="/register">
              <button class="btn1 text-white font-semibold rounded-lg bluebtn">
                Join waitlist
              </button>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const showMenu = ref(false);
const isDropdownVisible = ref(true);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const toggleDropdown = (value) => {
  console.log("drop", value);
  isDropdownVisible.value = value;
};
</script>

<style scoped>
.bootcamp-container {
  position: absolute;
  top: 100%;
  right: 480px;
  /* display: none; */
  transform: translateY(100%);
}
</style>
