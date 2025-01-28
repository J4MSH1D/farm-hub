import { createStore } from "vuex";
import storage from "@/utils/storageService";

const store = createStore({
	state: () => ({
		user: storage.getUser(),
	}),
	getters: {
		user: state => state.user,
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
	},
});

export default store;
