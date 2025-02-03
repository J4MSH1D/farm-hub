import { createStore } from "vuex";
import storage from "@/utils/storageService";

const store = createStore({
  state: () => ({
    user: storage.getUser(),
    requestModal: false,
  }),
  getters: {
    user: state => state.user,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    toggleRequest(state) {
      state.requestModal = !state.requestModal;
    },
  },
});

export default store;
