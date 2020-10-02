<template>
  <div class="container-app">
    <header>
      <Navbar :clickAvatar="toggleNotification" />
    </header>
    <main>
      <div class="content">
        <Suspense>
          <template #default>
              <TweetList />
          </template>
          <template  #fallback>
            <div class="loading">
              <Loading />
            </div>
          </template>
        </Suspense>
      </div>
      <div class="notification">
        <SnackBar v-if="showNotification || error" />
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import SnackBar from "./components/SnackBar.vue";
import Loading from "./components/Loading.vue";
// eslint-disable-next-line no-unused-vars
import { Tweet } from "./feature/tweet/model/tweet";

//States
import notificationState from "@/feature/notification/state/state";
import { defineComponent, onErrorCaptured, ref, defineAsyncComponent } from "vue";

const TweetList = defineAsyncComponent(
  () => import("@/feature/tweet/TweetList.vue")
);

export default defineComponent({
  name: "App",
  components: {
    TweetList,
    Navbar,
    SnackBar,
    Loading,
  },
  data() {
    return {};
  },
  setup() {
    const { state, toggleNotification } = notificationState();
    //Catch error in the child
    let error = ref(null);
    onErrorCaptured(e => {
      error.value = e as any;
      return true;
      });
  
    return {
      error,
      showNotification: state.showNotification,
      toggleNotification,
    };
  },
});
</script>

<style>
body {
  margin: 0;
}
main {
  display: flex;
  justify-content: center;
  align-content: center;
}
.container-app {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 80px;
  grid-template-columns: 1fr;
}
header {
  grid-row: 1 / 2;
  border-bottom: 1px solid rgba(243, 241, 239, 1);
}
main {
  grid-row: 2 / 3;
  display: grid;
  grid-template-rows: 9fr 1fr;
  overflow: hidden;
}
.content {
  grid-row: 1 / 2;
  overflow-y: auto;
  min-width: 400px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.loading {
  display: flex;
  align-items: center;
}
.notification {
  grid-row: 2 / 3;
}
footer {
  grid-row: 3 / 4;
}
</style>
