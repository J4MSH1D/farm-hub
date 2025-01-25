<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import data from "./data";

const modules = [Navigation];
</script>
<template>
	<div class="container my-10 bg-white py-10 rounded-xl">
		<div class="flex justify-between items-center">
			<div class="text-3xl">New items of the month</div>
			<ArrowButton />
		</div>
		<div class="mt-10">
			<swiper :slidesPerView="'auto'" :navigation="true" :modules="modules" :spaceBetween="30" class="mySwiper">
				<template v-for="item in data">
					<swiper-slide class="!w-[250px] min-h-[150px] pb-5 bg-gray-100 rounded-4xl cursor-pointer overflow-hidden border border-gray-200">
						<img :src="item.imageLink" :alt="item.name" class="w-full h-[200px] object-cover" />
						<div class="px-3 mt-3">
							<div class="h-[120px]">
								<div class="text-lg font-medium">
									{{ item.name }}
								</div>
								<div class="mt-2">
									{{ item.shortDescription }}
								</div>
							</div>
							<div class="mt-3 flex justify-between items-center">
								<span class="text-[#1CCB01] text-xl">{{ item.price }}</span>
								<ArrowButton />
							</div>
						</div>
					</swiper-slide>
				</template>
			</swiper>
		</div>
	</div>
</template>
