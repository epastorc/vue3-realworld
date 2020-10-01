<template>
  <div class="list-content">
    <TweetItem v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

import TweetItem from "./TweetItem.vue";
// eslint-disable-next-line no-unused-vars
import { Tweet } from "./model/tweet";
import tweetState from "./state/state";

export default defineComponent({
  name: "TweetList",
  components: {
    TweetItem,
  },
  async setup() {
    const { tweets, getTweets } = tweetState();
    await getTweets();
    return {
      tweets,
      getTweets,
    };
  }
});
</script>

<style scoped>
.list-content {
  max-width: 600px;
}
</style>