import { mount } from '@vue/test-utils'
import TweetItem from '../../TweetItem.vue'

describe('TweetItem.vue', () => {
  it('render component with props', () => {
      const tweet = {
        accountName: "test",
        avatar:"url",
        content:"content",
        timeAgo:"2ms",
        hashtag:"@test"
      }
    const wrapper = mount(TweetItem, {
        props: { tweet: tweet }
      })
    expect(wrapper).toMatchSnapshot();

  })
})
