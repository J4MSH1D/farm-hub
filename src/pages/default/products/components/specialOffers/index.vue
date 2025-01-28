<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

const offersList = Array(10).fill({
	title: "Мобильный комбикормовый завод на базе КАМАЗ",
	product_type: "Комбикормовые заводы",
	image: "https://s56442.cdn.ngenix.net/img/164/164/resize/catalog/product/7/O/7OsHVk6Mj830.jpg",
	price: 48285536,
	price_old: 54896356,
});
</script>

<template>
	<div class="container">
		<h2 class="text-2xl font-semibold">Special offers</h2>
		<div>
			<swiper slides-per-view="auto">
				<swiper-slide v-for="item in offersList" :key="item" class="max-w-[196px] bg-white rounded-xl p-4 mr-4 last:(mr-0)">
					<p class="text-sm text-zinc-900 line-clamp-2">{{ item.title }}</p>
					<span class="text-sm text-zinc-400 line-clamp-2">{{ item.product_type }}</span>
					<p class="text-sm text-zinc-400 line-clamp-2">{{ Number(item.price).toLocaleString("ru-RU") }} UZS</p>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>
