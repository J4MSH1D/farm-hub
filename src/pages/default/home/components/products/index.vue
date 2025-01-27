<script setup>
import links from "./data";
</script>
<template>
	<div class="my-10 container bg-white py-10 rounded-xl">
		<div class="text-3xl font-medium">Agricultural products</div>
		<div class="mt-5 text-xl text-gray-400 max-w-[700px]">
			Buy products with financial support from BRB-Bank on the target platform for farmers in your region
		</div>
		<div class="mt-5 grid grid-cols-22 gap-5">
			<div
				v-for="link in links"
				class="bg-[#F6F7F8] rounded-4xl h-[130px] p-5 relative overflow-hidden cursor-pointer"
				:style="{ gridColumn: `span ${link.span} / span ${link.span}` }"
			>
				<div class="relative z-20">{{ link.name }}</div>
				<icon :name="link.iconName" class="absolute -right-5 -bottom-8 h-full z-10" />
			</div>
			<div class="bg-[#4AB75F] rounded-4xl col-span-4 !text-white p-5 cursor-pointer">
				<div>All products</div>
				<div class="flex justify-end mt-10">
					<ArrowButton />
				</div>
			</div>
		</div>
	</div>
</template>
