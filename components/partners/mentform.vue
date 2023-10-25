<!-- pages/index.vue -->
<template>
  <div>
    <!-- Content of your page -->
    <button @click="showModal = true">Open Modal</button>

    <my-modal v-if="showModal">
      hello
      <p>This is the content of the modal.</p>
      <button @click="showModal = false">Close Modal</button>
    </my-modal>
  </div>
</template>

<script>
import modal from "../partners/modal.vue";
export default {
  components: {
    "my-modal": modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
