<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import section1 from "./components/section1.vue";
import section2 from "./components/section2.vue";
import section4 from "./components/section4.vue";

const slides = [
  {
    id: 1,
    component: section1,
  },
  {
    id: 2,
    component: section2,
  },
  {
    id: 4,
    component: section4,
  },
];

const modules = [Pagination, Autoplay];
</script>
<!-- :autoplay="{
  delay: 10000,
  disableOnInteraction: false,
}" -->

<template>
  <div class="container relative overflow-hidden mt-10 !text-white px-0">
    <swiper
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
      class="rounded-3xl overflow-hidden"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id"><component :is="slide.component" /></swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet {
  transition: all 0.3s ease;
  background-color: #fff !important;
}
.swiper-pagination-bullet-active {
  width: 50px;
  border-radius: 10px;
}
</style>
