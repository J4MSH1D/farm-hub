import "../eimzo/e-imzo";
import EIMZO from "../eimzo/EIMZO.js";

const EIMZOVuePlugin = {};

export const VueEIMZO = new EIMZO();
export const eimzo = VueEIMZO;

/**
 *
 * @param {import('vue').App<Element>} app
 */

EIMZOVuePlugin.install = function (app) {
	app.config.globalProperties.$eimzo = VueEIMZO;
};

export default EIMZOVuePlugin;
