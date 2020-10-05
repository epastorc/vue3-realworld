<template>
  <div class="container-snackbar">
    <div class="text">
      <p>Notificationsssss</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  name:"SnackBar"
})
</script>

<style scoped>
.container-snackbar {
  display: flex;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  height: 6vh;
  border-radius: 5px;
  max-width: 600px;
  background-color: cornflowerblue;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>