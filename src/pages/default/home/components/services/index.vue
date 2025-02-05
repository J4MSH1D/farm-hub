<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import tabsLinks from "./data";

const modules = [Navigation];

const activeTab = ref("Sales");

const tabsList = [
  { name: "home_services_1", value: "Sales" },
  { name: "home_services_2", value: "Bank" },
  { name: "home_services_3", value: "Lending" },
  { name: "home_services_4", value: "Beginning" },
];
</script>
<template>
  <div class="container bg-white py-10 rounded-xl my-10 relative overflow-hidden">
    <div class="flex justify-between items-start relative z-30">
      <div>
        <div class="text-3xl font-medium">{{ $t("home_services_title") }}</div>
        <div class="mt-5 text-xl text-gray-400 max-w-[900px]">
          {{ $t("home_services_description") }}
        </div>
      </div>
      <div>
        <rightArrowButton color="#4AB75F" />
      </div>
    </div>
    <div class="mt-5 relative z-30">
      <div class="flex gap-x-3">
        <span
          class="bg-[#ECEDEF] px-4 select-none py-2 rounded-5xl text-gray-400 cursor-pointer transition"
          v-for="tab in tabsList"
          :class="{ 'bg-black !text-white': tab.value === activeTab }"
          @click="activeTab = tab.value"
        >
          {{ $t(tab.name) }}
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
            <div>{{ $t(link.name) }}</div>
          </swiper-slide>
        </template>
      </swiper>
    </div>
    <icon name="cms.png" class="absolute w-1/3 top-0 right-[10%] z-0" />
  </div>
</template>
<style>
.swiper-button-disabled {
  display: none;
}
</style>
