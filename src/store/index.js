import { createStore } from "vuex";
import storage from "@/utils/storageService";
import { authApiService } from "@/services/AuthService";

const store = createStore({
  state: () => ({
    user: null,
    company: null,
    requestModal: false,
    darkTheme: storage.get("darkTheme", true) || false,
  }),
  getters: {
    user: state => (state.user ? state.user : {}),
    company: state => (state.company ? state.company : {}),
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUniversal(state, payload) {
      state[payload["state"]] = payload["data"];
    },
    toggleRequest(state) {
      state.requestModal = !state.requestModal;
    },
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
      storage.set("darkTheme", state.darkTheme);
    },
  },
  actions: {
    async getUser(context) {
      const response = await authApiService.GetUser();
      context.commit("setUniversal", { state: "company", data: response.content["company"] });
      context.commit("setUniversal", { state: "user", data: response.content["user"] });
    },
  },
});

if (storage.get("accessToken")) {
  store.dispatch("getUser");
}

export default store;
