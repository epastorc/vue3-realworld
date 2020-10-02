<template>
  <div class="spinner"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.spinner {
  border-radius: 50%;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  width: 10px;
  height: 10px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>