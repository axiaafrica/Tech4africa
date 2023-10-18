<template>
  <div class="overflow-hidden">
    <LazyLayoutTopBar />

    <!-- Default content goes here -->

    <div>
      <slot />
    </div>
    <!-- Default content goes here -->

    <LazyLayoutFooter />
  </div>
</template>
