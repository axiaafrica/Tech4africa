<template>
  <div
    class="ratings w-full bg-litpink overflow-x-hidden mt-16 flex justify-center"
  >
    <div class="ratingbox sm:max-w-[1200px] py-4 md:py-14">
      <ul class="rates flex justify-between gap-5 md:gap-16 lg:items-center">
        <li class="rate border-rit px-[6px] md:px-8 text-center md:text-start">
          <div
            class="num text-2xl md:text-[40px] font-semibold text-drkblue flex gap-2 sm:gap-3 items-center"
          >
            <span
              ><img src="../../assets/images/editions/book.svg" alt="" /></span
            >{{ courses }}
          </div>
          <p class="text-semiblk font-medium text-sm md:text-xl">
            Total Courses
          </p>
        </li>
        <li class="rate border-rit px-[6px] md:px-8 text-center md:text-start">
          <div
            class="num sm:text-2xl text-[1.125rem] lg:text-[40px] font-semibold text-drkblue flex gap-2 sm:gap-3 items-center"
          >
            <span
              ><img src="../../assets/images/editions/group.svg" alt="" /></span
            >{{ beneficiaries }}
          </div>
          <p class="text-semiblk font-medium text-sm md:text-xl">
            Total beneficiaries
          </p>
        </li>
        <li class="rate border-rit px-[6px] md:px-8 text-center md:text-start">
          <div
            class="num sm:text-2xl text-[1.125rem] md:text-[40px] font-semibold text-drkblue flex gap-2 sm:gap-3 items-center"
          >
            <span
              ><img src="../../assets/images/editions/group.svg" alt="" /></span
            >{{ duration }}
          </div>
          <p class="text-semiblk font-medium text-sm md:text-xl">
            plus projects phase
          </p>
        </li>
        <li class="rate text-center md:text-start px-[6px] md:px-8">
          <div
            class="num sm:text-2xl text-[1.125rem] md:text-[40px] font-semibold text-drkblue flex gap-2 sm:gap-3 items-center"
          >
            <span
              ><img src="../../assets/images/editions/globe.svg" alt="" /></span
            >{{ countries }}
          </div>
          <p class="text-semiblk font-medium text-sm md:text-xl">
            African countries
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  edition: {
    courses: "default title",
    type: String,
  },
  beneficiaries: {
    default: "default title",
    type: String,
  },
  duration: {
    default: "default title",
    type: String,
  },
  countries: {
    default: "default title",
    type: String,
  },
  courses: {
    default: "default title",
    type: String,
  },
});
</script>
<style>
.box {
  background: #f5fdff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 300px;
  gap: 12px;
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 10px;
}

.title {
  font-weight: 600;
  font-size: 30px;
  color: #03a6ca;
  text-align: center;
}

.service-icon {
  width: 65px;
}
</style>
