<script setup>
import { upperLinks, bottomLinks } from "./data";
</script>
<template>
	<div class="bg-white rounded-t-5xl shadow">
		<div class="container">
			<div class="py-8 border-b border-b-gray-300 flex items-center justify-between">
				<span class="pl-5">
					<icon name="logo" is-svg />
				</span>
				<span class="text-sm text-gray-500 *hoverGreen" v-for="link in upperLinks">{{ link.name }}</span>
			</div>
			<div class="py-8 flex justify-between">
				<div v-for="link in bottomLinks">
					<div class="mb-4">
						<span class="text-black text-sm">{{ link.name }}</span>
					</div>
					<div v-for="innerLink in link.children">
						<span class="*hoverGreen text-gray-500 text-sm mt-1 inline-block">{{ innerLink.name }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
