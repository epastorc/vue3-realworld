import { shallowMount } from '@vue/test-utils'
import Navbar from "../../Navbar.vue";

describe('TweetItem.vue', () => {
  it('render component with props', () => {
    const clickAvatar = jest.fn();
      const tweet = {
        accountName: "test",
        avatar:"url",
        content:"content",
        timeAgo:"2ms",
        hashtag:"@test"
      }
    const wrapper = shallowMount(Navbar, {
        props: { clickAvatar: clickAvatar }
      })
    expect(wrapper).toMatchSnapshot();
    wrapper.find(".avatar").trigger("click");
    expect(clickAvatar).toBeCalled();

  })
})
