<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import data from "../data/catalog";
const current = ref(data[0]);

function handleCatalog(item) {
	current.value = item;
	console.log("current", current.value);
}
</script>

<template>
	<div class="flex flex-col gap-4 max-h-[500px]">
		<div class="flex gap-2">
			<button
				v-for="item in data"
				:key="item.id"
				class="rounded-full px-4 py-2 cursor-pointer"
				:class="item.id === current.id ? 'bg-black text-white' : 'bg-[#ECEDEF] text-black'"
				@click="handleCatalog(item)"
			>
				{{ item.name }}
			</button>
		</div>
		<div class="flex-1 bg-green-300 rounded-3xl overflow-hidden">
			<swiper class="" :slidesPerView="'auto'" direction="vertical" slides-per-view="2" :modules="modules" :spaceBetween="30" hash-navigation="true">
				<template v-for="item in current.children" :key="item.id">
					<swiper-slide class="!h-[200px] bg-red-200 rounded-3xl cursor-pointer overflow-hidden border border-gray-200">
						<div class="p-4">
							{{ item.name }}
						</div>
					</swiper-slide>
				</template>
			</swiper>
		</div>
	</div>
</template>
