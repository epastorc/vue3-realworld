import { toRefs, reactive } from "vue";

export default function notificationState() {
  const state = reactive({showNotification : false});
  function toggleNotification() {
    state.showNotification = !state.showNotification;
  }
  return { state: toRefs(state), toggleNotification };
}
