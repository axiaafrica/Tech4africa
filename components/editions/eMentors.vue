<template>
  <div class="mt-24">
    <div class="w-full flex justify-center container-center">
      <div
        class="borderbox flex justify-center items-center gap-6 px-5 py-3 border-[1px] border-[#F3F2F0] text-2xl"
      >
        <button
          v-for="edition in ['1st edition mentors', '2nd edition mentors']"
          :key="edition"
          @click="showEdition(edition)"
          :class="{ active: edition === isActive }"
        >
          {{ edition }}
        </button>
      </div>
    </div>

    <div class="gallerybox mt-6 bg-litpink py-16 px-3">
      <div class="mentorbox container-center grid grid-cols-4 gap-y-20 gap-x-4">
        <div
          class="mentor w-full flex flex-col gap-1"
          v-for="mentor in filteredMentors"
          :key="mentor.id"
        >
          <div class="picture w-[300px] md:w-full h-[300px]">
            <img :src="mentor.picture" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="mentorname text-lg font-bold">{{ mentor.mentorname }}</div>
          <div class="mentorname">{{ mentor.job }}</div>
          <a
            :href="mentor.socialUrl"
            target="_blank"
            class="socials flex gap-3 items-center"
          >
            <div class="icon"><img :src="mentor.socialicon" alt="" class="" /></div>
            <div class="handle text-lg underline">{{ mentor.socialhandle }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mEditions } from "../mentors/mentorstore";

export default defineComponent({
  data() {
    return {
      selectedEdition: "1st edition mentors",
      isActive: "1st edition mentors",
    };
  },
  computed: {
    filteredMentors() {
      return mEditions.filter((mentor) => mentor.edition.includes(this.selectedEdition));
    },
    shuffledMentors() {
      return this.shuffleArray(this.filteredMentors);
    },
  },

  methods: {
    showEdition(edition: string) {
      this.selectedEdition = edition;
      this.isActive = edition;
    },
  },
});
</script>

<style scoped>
.active {
  background-color: #fffbf4;
  border-radius: 8px;
  color: #121212;
  padding: 12px 20px;
  font-weight: 500;
}
</style>
