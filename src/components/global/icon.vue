<script setup>
import { loadImage, loadSvg } from "@/utils/imageLoader";
import { ref } from "vue";
import { type } from "windicss/utils";

const svgContent = ref(""); // Reaktiv o'zgaruvchi SVG kontent uchun

const getSvgIcon = async name => {
	const module = await import(`../../assets/images/svg/${name}.svg?raw`);
	return module.default;
};

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	isSvg: {
		type: Boolean,
		default: false,
	},
	isSvgRaw: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
	},
});

if (props.isSvgRaw) {
	getSvgIcon(props.name).then(svg => {
		svgContent.value = svg;
	});
}
</script>

<template>
	<img class="select-none" v-if="props.isSvg" :src="loadSvg(name)" :alt="props.name" :draggable="false" />
	<div v-else-if="props.isSvgRaw" v-html="svgContent"></div>
	<img class="select-none" v-else :src="loadImage(name)" :alt="props.name" :draggable="false" />
</template>
