<template>
    <div class="conntribute-box my-12 container-center">
       <div class="why-title flex justify-center">
          <div class="title-text  bordered-title text-xl "> 
           <div class="pink-container-b text-semiblk">Why Choose the Tech for Africa Boot Camp?</div>
          </div>
       </div>
       <div class="bigtitle text-[28px] font-semibold text-blkblk mt-10 text-center px-40"> Here's how each type of partnership can contribute to the success of the "Tech for Africa Bootcamp by Axia Africa</div>
      <div class="contribute-boxes grid mt-12 lg:grid-cols-2 grid-cols-1 place-content-center gap-10">
        <div v-for="card in cards" :key="card.title" class="title-text bordered-box-outer text-xl"> 
           <div class="pink-container text-semiblk">
             <div class="titlee flex gap-3 items-center mb-4">
                 <div class="icon"><img :src="card.img" alt="" class=""></div>
                 <div class="maintitle text-greytext text-xl font-semibold">{{ card.title }}</div>
             </div>
             <div class="note text-semiblk">{{ card.desc }}</div>
           </div>
        </div>
      </div>
    </div>
</template>


<script setup lang="ts">
import Network from "@/assets/images/icons/networking.svg";
import Admission from "@/assets/images/icons/admission.svg";
import Success from "@/assets/images/icons/success.svg";
import Mentorship from "@/assets/images/icons/mentorship.svg";

const cards = [
	{
		img: Network,
		title: 'Networking Opportunities',
		desc: "Connect with like-minded individuals, fellow participants in the tech industry. Forge valuable connections that can open doors to exciting career prospects within Africa's vibrant tech ecosystem."
	},
	{
		img: Admission,
		title: 'Free Admission',
		desc: "We believe in equal access to opportunities. That's why this extraordinary boot camp comes to you completely free of charge. Take advantage of this unparalleled chance to upskill yourself without any financial burden."
	},
    {
		img: Success,
		title: 'Proven Success',
		desc: "Individuals who believe in the bootcamp's mission can provide financial support through donations or sponsorships. Their contributions can fund scholarships, resources, or specific program elements."
	},
    {
		img: Mentorship,
		title: 'Mentorship & Guardiance',
		desc: "TFA has sourced out for the best mentors in an of your preferred industry, experienced educators who will guide you on your learning journey. Benefit from their wealth of knowledge, practical insights, and insider tips to accelerate your growth and success."
	},
]
</script>
<style></style>