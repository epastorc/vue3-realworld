<template>
  <div class="tweet-container">
    <div class="tweet-avatar">
      <img :src="tweet.avatar" alt="avatar tweet" />
    </div>
    <div class="tweet-body">
      <div class="tweet-header">
        <span> <strong>{{ tweet.accountName }} </strong></span>
        <span class="no-principal-items"> {{ tweet.hashtag }} </span>
        <span class="no-principal-items"> {{ tweet.timeAgo }}</span>
      </div>
      <div class="tweet-content">
        <p>{{ tweet.content }}</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { defineComponent, PropType } from "vue";
// eslint-disable-next-line no-unused-vars
import { Tweet } from "./model/tweet";
export default defineComponent({
  name: "TweetItem",
  props: {
    tweet: {
      type:  Object as PropType<Tweet>,
    },
  },
})
</script>

<style scoped>
.no-principal-items{
    color: rgba(191, 191, 191, 1);
    margin-left: 5px;
}
.tweet-body {
  grid-column: 2 / 11;
}
.tweet-avatar {
  display: flex;
  justify-content: center;
  grid-column: 1 / 2;
}
.tweet-container {
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 9fr;
  border-bottom: 1px solid rgba(232, 236, 241, 1);
}
img {
  height: 40px;
  width: 40px;
  border-radius: 15px;
}
.tweet-header {
  display: flex;
}
.tweet-header > span {
  margin-right: 5px;
}
</style>