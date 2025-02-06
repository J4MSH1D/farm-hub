<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import data from "../data/popServices";
</script>

<template>
  <div class="container py-10">
    <div class="flex items-center justify-between">
      <!-- section-title -->
      <h2 class="text-3xl font-semibold">{{ $t("Популярные услуги") }}</h2>
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
      space-between="20"
    >
      <swiper-slide v-for="item in data" :key="item" class="max-w-[320px] bg-white rounded-xl p-4 my-4 cus-shadow last:(mr-0)">
        <!-- image -->
        <router-link :to="`/products/${item.id}`" class="block border border-gray-200 aspect-square bg-gray-200 w-full h-48">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
        </router-link>
        <!-- Express-leasing -->
        <div class="group relative invisible" :class="{ '!visible': item.express_leasing }">
          <div
            class="absolute left-1/2 bottom-[calc(100%+8px)] transform -translate-x-1/2 max-w-[140px] w-full bg-gray-500 rounded-md pointer-events-none invisible opacity-0 duration-200 p-2 group-hover:(opacity-100 visible)"
          >
            <span class="absolute w-2 h-2 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 bg-gray-500" />
            <p class="text-xs font-light leading-[1.8] text-white">
              {{ $t("Специальные условия для покупки техники с использованием государственной поддержки") }}
            </p>
          </div>
          <span class="bg-sky-100 text-[10px] text-blue-500 font-bold uppercase rounded p-1 px-1.5 cursor-pointer">{{ $t("Экспресс-лизинг") }}</span>
        </div>
        <!-- title -->
        <router-link :to="`/products/${item.id}`" class="text-lg leading-5 text-zinc-900 line-clamp-2 mt-4 h-10">{{ $t(item.title) }}</router-link>
        <!-- product_type -->
        <span class="text-sm leading-4 text-zinc-400 mt-2" :class="!item.price ? 'line-clamp-8 h-32' : 'line-clamp-5  h-20'">{{
          item.product_type
        }}</span>
        <!-- price -->
        <div v-if="item.price" class="flex items-center justify-between gap-2 mt-4 h-8">
          <div class="relative flex items-center">
            <p class="text-sm text-zinc-900 font-medium">{{ Number(item.price).toLocaleString("ru-RU") }} {{ $t("млн Сум") }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.cus-shadow {
  transition: all 0.3s linear;
}
.cus-shadow:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
