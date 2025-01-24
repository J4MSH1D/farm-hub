<script setup>
import { loadImage, loadSvg } from "@/utils/imageLoader";
import { ref } from "vue";

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
});

if (props.isSvgRaw) {
	getSvgIcon(props.name).then(svg => {
		svgContent.value = svg;
	});
}
</script>

<template>
	<img v-if="props.isSvg" :src="loadSvg(name)" :alt="props.name" :draggable="false" />
	<div v-else-if="props.isSvgRaw" v-html="svgContent"></div>
	<img v-else :src="loadImage(name)" :alt="props.name" :draggable="false" />
</template>
