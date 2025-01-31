<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const brands = Array(10).fill({
  id: 1,
  image: "https://s56442.cdn.ngenix.net/img/270/120/resize/rshb/landings/landing/image_334.png",
});
</script>

<template>
  <div class="container py-8">
    <div class="flex items-center justify-between">
      <!-- section-title -->
      <h2 class="text-2xl font-semibold">Популярные бренды</h2>
      <!-- slider-buttons -->
      <div class="flex items-center justify-end gap-2">
        <button class="popularBrands-button-prev bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-left-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
        <button class="popularBrands-button-next bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-right-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
      </div>
    </div>

    <!-- Slider -->
    <swiper
      :modules="[Navigation]"
      slides-per-view="auto"
      :navigation="{ nextEl: '.popularBrands-button-next', prevEl: '.popularBrands-button-prev' }"
      class="mt-5"
    >
      <swiper-slide v-for="item in brands" :key="item" class="!w-[200px] !h-[100px] bg-white rounded-xl mr-4 hover:(shadow-2xl) last:(mr-0)">
        <router-link :to="`/organization/${item.id}`" class="brand-logo block h-full w-full p-4">
          <img :src="item.image" alt="" class="h-full w-full object-contain" />
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.brand-logo {
  filter: grayscale(100%);
  transition: 0.3s;
}

.brand-logo:hover {
  filter: grayscale(0);
}
</style>
