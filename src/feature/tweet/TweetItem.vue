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
import { Vue, Options } from "vue-class-component";
import { Prop } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Tweet } from "./model/tweet";
@Options({})
export default class TweetItem extends Vue {
  @Prop({ required: true })
  public tweet!: Tweet;
}
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