<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import data from "./data";

const modules = [Navigation];
</script>
<template>
	<div class="container my-10 bg-white py-10 rounded-xl">
		<div class="flex justify-between items-center">
			<div class="text-3xl">Best offers</div>
			<ArrowButton />
		</div>
		<div class="mt-10">
			<swiper :slidesPerView="'auto'" :navigation="true" :modules="modules" :spaceBetween="30" class="mySwiper">
				<template v-for="item in data">
					<swiper-slide class="!w-[250px] min-h-[150px] pb-5 bg-gray-100 rounded-4xl cursor-pointer overflow-hidden border border-gray-200">
						<img :src="item.imageLink" :alt="item.name" class="w-full h-[200px] object-cover" />
						<div class="px-3 mt-3">
							<div class="h-[120px]">
								<span class="px-4 py-1 rounded-full text-[10px] text-white bg-[#F72B1D]">{{ item.discount }} %</span>
								<div class="text-lg font-medium pt-1">
									{{ item.name }}
								</div>
								<div class="mt-2 text-[#ACB3B9] text-sm">
									{{ item.shortDescription }}
								</div>
							</div>
							<div class="mt-2 flex justify-between items-center">
								<div class="flex flex-col">
									<span class="text-[#F72B1D] text-lg"
										>{{ (Number(item.price) - (Number(item.price) * item.discount) / 100).toLocaleString() }} UZS</span
									>
									<span class="text-[#ACB3B9] text-md line-through">{{ Number(item.price).toLocaleString() }} UZS</span>
								</div>
								<a-button type="primary" class="flex justify-center items-center" shape="circle" size="large">
									<icon name="cart" is-svg class="text-white" />
								</a-button>
							</div>
						</div>
					</swiper-slide>
				</template>
			</swiper>
		</div>
	</div>
</template>
