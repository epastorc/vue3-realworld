import { ref } from "vue";
import tweetsMock from "./mock.data";
import { Tweet } from "@/feature/tweet/model/tweet";

export default function tweetState() {
  const tweets = ref([] as Tweet[]);
  async function getTweets() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tweets.value = tweetsMock;
        resolve();
        //reject({msg :"Internal Error"});
      }, 200)
   
    });
  }
  return { tweets, getTweets };
}
