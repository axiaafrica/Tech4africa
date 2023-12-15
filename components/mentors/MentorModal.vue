<!-- components/MentorModal.vue -->
<template>
  <div v-if="showModal" class="fixed inset-0 z-50">
    <div
      class="cont w-screen h-screen top-0 left-0 bg-[#020A0C]/50 flex items-center justify-end"
    >
      <div
        class="bg-white sm:w-[720px] w-[380px] p-10 rounded-xl shadow-lg sm:mr-28 mr-5"
      >
        <div class="sm:text-[28px] text-xl font-semibold text-greytext mb-4">
          Submit your mentorship application
        </div>
        <p class="text-litgrey sm:text-xl text-sm">
          Tell us about you and how you would like to mentor at the tech for
          Africa bootcamp
        </p>
        <form>
          <div
            class="name-link flex flex-col sm:flex-row sm:justify-between w-full mt-4"
          >
            <div class="fname sm:w-1/2 w-full sm:text-base text-xs">
              <div for="fullName" class="formlabel">Your full name</div>
              <input
                type="text"
                placeholder="Axia Africa"
                class="text-[#424040] text-xl p-3 w-full bg-[#f6f5f3] rounded-xl"
              />
            </div>
            <div class="linkedin sm:w-1/2 w-full mt-5 sm:mt-0">
              <div for="linkedin" class="formlabel">Your LinkedIn URL</div>
              <input
                type="text"
                placeholder="Axiaafrica@gmail.com"
                class="text-[#424040] text-xl p-3 w-full bg-[#f6f5f3] rounded-xl"
              />
            </div>
          </div>
          <div class="email w-full mt-6">
            <div for="fullName" class="formlabel">Email</div>
            <input
              type="text"
              placeholder="Axiaafrica@gmail.com"
              class="text-[#424040] text-xl p-3 bg-[#f6f5f3] rounded-xl w-full"
            />
          </div>
          <div class="w-full mt-6">
            <div for="dropdown" class="formlabel">
              What course do you want to mentor in ?
            </div>
            <select
              id="dropdown"
              class="text-[#424040] text-xl p-3 bg-[#f6f5f3] rounded-xl w-full"
              v-model="selectedOption"
            >
              <option value="" disabled>Select a Course</option>
              <option
                v-for="option in dropdownOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </form>
        <div class="mt-6">
          <button class="bluebtn text-lg mr-2" @click="submitForm">
            Submit application
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

type Option = { value: string; label: string };
export default {
  data() {
    return {
      dropdownOptions: [
        { value: "design", label: "Product Design" },
        { value: "marketing", label: "Digital Marketing" },
        { value: "data", label: "Data Analytic" },
        { value: "frontend", label: "Frontend Development" },
        { value: "management", label: "Product Management" },
      ],
      selectedOption: "" as string,
    };
  },

  props: {
    showModal: Boolean,
  },
  methods: {
    submitForm() {
      // Handle form submission here
      this.$emit("submit");
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.formlabel {
  font-size: 20px;
  font-weight: 500;
  color: #121212;
  margin-bottom: 12px;
}
</style>
