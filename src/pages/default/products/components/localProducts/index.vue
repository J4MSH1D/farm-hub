<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const offersList = Array(10).fill({
  id: 1,
  title: "Мобильный комбикормовый завод на базе КАМАЗ",
  product_type: "Комбикормовые заводы",
  image: "https://s56442.cdn.ngenix.net/img/164/164/resize/catalog/product/2/d/2d0vjiRQLCpV_1.png",
  price: 18145000,
  express_leasing: true,
});
</script>

<template>
  <div class="container py-8">
    <div class="flex items-center justify-between">
      <!-- section-title -->
      <h2 class="text-2xl font-semibold">Товары узбекского производства</h2>
      <!-- slider-buttons -->
      <div class="flex items-center justify-end gap-2">
        <button class="localProducts-button-prev bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-left-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
        <button class="localProducts-button-next bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-right-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
      </div>
    </div>

    <!-- Slider -->
    <swiper
      :modules="[Navigation]"
      slides-per-view="auto"
      :navigation="{ nextEl: '.localProducts-button-next', prevEl: '.localProducts-button-prev' }"
      class="mt-5"
    >
      <swiper-slide v-for="item in offersList" :key="item" class="max-w-[220px] bg-white rounded-xl p-4 mr-4 hover:(shadow-2xl) last:(mr-0)">
        <!-- image -->
        <router-link :to="`/products/${item.id}`" class="block border border-gray-200 aspect-square bg-gray-200">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-contain" />
        </router-link>
        <!-- Express-leasing -->
        <div class="group relative invisible mt-3" :class="{ '!visible': item.express_leasing }">
          <div
            class="absolute left-1/2 bottom-[calc(100%+8px)] transform -translate-x-1/2 max-w-[140px] w-full bg-gray-500 rounded-md pointer-events-none invisible opacity-0 duration-200 p-2 group-hover:(opacity-100 visible)"
          >
            <span class="absolute w-2 h-2 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 bg-gray-500" />
            <p class="text-xs font-light leading-[1.8] text-white">
              Специальные условия для покупки техники с использованием государственной поддержки
            </p>
          </div>
          <span class="bg-sky-100 text-[10px] text-blue-500 font-bold uppercase rounded p-1 px-1.5 cursor-pointer">EXPRESS-LEASING</span>
        </div>
        <!-- title -->
        <router-link :to="`/products/${item.id}`" class="text-sm text-zinc-900 line-clamp-2 mt-4">{{ item.title }}</router-link>
        <!-- product_type -->
        <span class="text-xs text-zinc-400 line-clamp-2 mt-2">{{ item.product_type }}</span>
        <!-- price -->
        <div class="flex items-center justify-between gap-2 mt-4">
          <div class="relative flex items-center">
            <p class="text-sm text-zinc-900 font-medium">{{ Number(item.price).toLocaleString("ru-RU") }} UZS</p>
          </div>
          <icon name="heart300" is-svg-raw class="h-3.5 w-3.5 cursor-pointer" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
