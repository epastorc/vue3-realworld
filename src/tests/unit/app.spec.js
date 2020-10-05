import { mount } from '@vue/test-utils'
import App from '../../App.vue'
import Snackbar from '@/components/Snackbar';

describe('App.vue', () => {
  it('Show notification ', async () => {

    const wrapper = mount(App);
    await wrapper.vm.toggleNotification();
    expect(wrapper.findComponent(Snackbar).exists()).toBe(true);

  })
  it('Hide notification', async () => {

    const wrapper = mount(App);
    expect(wrapper.findComponent(Snackbar).exists()).toBe(false);

  })
})
