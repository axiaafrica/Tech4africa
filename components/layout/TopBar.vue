<template>
    <div class="navbar fixed top-0 left-0 px-3 md:px-[70px] mx-auto py-4 w-full z-30 bg-white overflow-hidden">
        <div class="navbox flex justify-between items-center overflow-hidden">
            <div class="logobox">
               <img src="../../assets/images/homepage/TFALOGO.svg" alt="" class="logo-img w-28">
            </div>
            <div class="navlinks hidden md:block">
                <ul class="nav-links flex items-center gap-14 headline text-drkgrey">
                    <li class="links font-semibold">Partner with us</li>
                    <li class="links">Mentors</li>
                    <li class="links flex items-center ">Editions <span><img src="../../assets/images/icons/arrow_drop_down.svg" alt="" class="dropdown"></span></li>
                </ul>
            </div>
            <div class="socials hidden md:block">
                <ul class="sociallinks flex items-center gap-8">
                    <li class="sponsor-btn"><button class="btn1 py-3 px-5 border-borderCol border-[1px] text-drkblue font-semibold rounded-lg shadowsm">Become a sponsor</button></li>
                    <li class="waitlist-btn"><button class="btn1 text-white font-semibold rounded-lg bluebtn">Join waitlist</button></li>
                </ul>
            </div>
            <!-- <div class="menuicon block md:hidden">
              <img src="@/assets/images/homepage/menu.svg" alt="" @click="isActive = !isActive">
            </div> -->
        </div>
    </div>
    <div v-if="isActive" class="fixed top-14 left-0 w-full h-auto py-10 z-50 px-5 bg-white/80">
		<div class="navlinks w-full flex justify-center">
                <ul class="nav-links flex flex-col  items-center gap-4 font-semibold">
                    <li class="links activee">Home</li>
                    <li class="links">Services</li>
                    <li class="links">About</li>
                    <li class="links">Let's Talk</li>
                </ul>
            </div>
            <div class="socials mt-8">
                <ul class="sociallinks flex items-center justify-center gap-3">
                    <li class="icon"><img src="@/assets/images/homepage/fb.svg" alt=""></li>
                    <li class="icon"><img src="@/assets/images/homepage/tweet.svg" alt=""></li>
                    <li class="icon"><img src="@/assets/images/homepage/linked.svg" alt=""></li>
                </ul>
            </div>
        <!-- <img src="@/assets/images/homepage/menu.svg" alt="" @click="isActive = !isActive"> -->
	</div>
</template>

<script>
  export default {
    data() {
        return{
            isActive: false,
        }
    },
    methods() {
        toggle() 
        {
            this.isActive = !this.enable;
        }
    },
  }
 
</script>

<style>
img {
    width: 29px;
}
.links{
    cursor: pointer;
}
.links:hover{
    color: #94a3b8;
}
.activee {
    color: #94a3b8;
}
</style>