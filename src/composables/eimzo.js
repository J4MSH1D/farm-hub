import { getCurrentInstance } from "vue";

export function useEimzo() {
	const app = getCurrentInstance();
	const $eimzo = app.appContext.config.globalProperties.$eimzo;

	async function installEimzo() {
		await $eimzo.install();
	}

	async function getAllUserKeys() {
		await installEimzo();
		return await $eimzo.listAllUserKeys();
	}

	async function signWithEsiId(esiId) {
		return await $eimzo.signWithEsiId(esiId);
	}

	return { installEimzo, getAllUserKeys, $eimzo, signWithEsiId };
}
