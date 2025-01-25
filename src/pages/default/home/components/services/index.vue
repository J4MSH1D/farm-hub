<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import tabsLinks from "./data";

const modules = [Navigation];

const activeTab = ref("Sales");

const tabsList = [
	{ name: "Sales of products", value: "Sales" },
	{ name: "Bank Services", value: "Bank" },
	{ name: "Preferential lending", value: "Lending" },
	{ name: "For Beginning Farmers", value: "Beginning" },
	{ name: "Promotion in marketplaces", value: "Promotion" },
];
</script>
<template>
	<div class="container bg-white py-10 rounded-xl my-10 relative">
		<div class="flex justify-between items-start relative z-30">
			<div>
				<div class="text-3xl font-medium">Services for your business</div>
				<div class="mt-5 text-xl text-gray-400 max-w-[900px]">
					We have collected the best industry solutions that will help your business reach the next level
				</div>
			</div>
			<div>
				<rightArrowButton color="#4AB75F" />
			</div>
		</div>
		<div class="mt-5 relative z-30">
			<div class="flex gap-x-3">
				<span
					class="bg-[#ECEDEF] px-4 py-2 rounded-5xl text-gray-400 cursor-pointer transition"
					v-for="tab in tabsList"
					:class="{ 'bg-black !text-white': tab.value === activeTab }"
					@click="activeTab = tab.value"
				>
					{{ tab.name }}
				</span>
			</div>
		</div>
		<div class="mt-5 relative z-30">
			<swiper :slidesPerView="'auto'" :navigation="true" :modules="modules" :spaceBetween="30" class="mySwiper">
				<template v-for="link in tabsLinks.find(e => e.value === activeTab)['children']">
					<swiper-slide class="!w-[250px] min-h-[150px] bg-gray-100 p-4 rounded-4xl cursor-pointer">
						<div class="w-full min-h-[50px] mb-5 flex justify-end items-start">
							<template v-if="link.icon">
								<div class="w-12 aspect-square rounded-full flex justify-center items-center" :style="{ backgroundColor: link.color }">
									<icon :name="link.icon" is-svg />
								</div>
							</template>
						</div>
						<div>{{ link.name }}</div>
					</swiper-slide>
				</template>
			</swiper>
		</div>
		<icon name="cms.png" class="absolute h-1/2 top-10 right-[10%] z-0" />
	</div>
</template>
<style>
.swiper-button-disabled {
	display: none;
}
</style>
