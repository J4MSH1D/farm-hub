<script setup>
defineProps({
	color: {
		type: String,
		default: "#4AB75F",
	},
});
</script>
<template>
	<a-config-provider
		:theme="{
			token: {
				colorPrimary: color,
			},
		}"
	>
		<a-button class="bg-white flex justify-center items-center" shape="circle" size="large">
			<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1H16M16 1V16M16 1L1 16" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</a-button>
	</a-config-provider>
</template>
