<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import data from "../data/banner";

const modules = [Navigation];
</script>
<template>
  <div class="w-full h-[500px] bg-[#3174F6] rounded-3xl relative py-10 pl-10 text-white overflow-hidden">
    <icon name="home_banner_12" is-svg class="w-full h-full absolute top-0 left-0" />
    <div class="absolute right-0 bottom-0"><ArrowButton color="#3174F6" /></div>
    <div class="flex justify-between pr-10">
      <h2 class="text-3xl font-medium">{{ $t("home_media_title") }}</h2>
    </div>
    <p class="pr-10 text-2xl mt-6">{{ $t("home_media_discription") }}</p>
    <icon name="media_slider.png" class="absolute right-10 -bottom-10" />
    <div class="mt-10">
      <swiper :slidesPerView="'auto'" :navigation="true" :modules="modules" :spaceBetween="30" class="mySwiper">
        <template v-for="item in data" :key="item.id">
          <swiper-slide class="!w-[500px] bg-gray-100 rounded-2xl cursor-pointer overflow-hidden border border-gray-200">
            <div class="flex-1 flex text-black p-4 gap-4">
              <div class="relative w-[130px] h-[130px] bg-cover bg-center rounded-lg aspect-square" :style="{ backgroundImage: `url(${item.img})` }">
                <icon name="play-white.png" class="absolute w-18 h-18 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
              </div>

              <div class="flex flex-col justify-between">
                <div class="bg-[#FB6514] py-1.5 px-2 rounded-full text-xs text-white inline-block w-14 flex items-center justify-center">Live</div>
                <h4 class="text-lg font-normal mb-0 line-clamp-2">{{ $t(item.title) }}</h4>
                <p class="text-sm text-gray-400 mb-0">{{ item.date }}</p>
              </div>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </div>
</template>
