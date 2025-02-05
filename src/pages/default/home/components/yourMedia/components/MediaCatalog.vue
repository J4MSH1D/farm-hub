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

const classes = {
  Бизнес: "bg-[#3174F6]",
  Animals: "bg-[#8B37DF]",
  Live: "bg-[#FB6514]",
  Useful: "bg-[#95A0A9]",
  Производство: "bg-[#76C83A]",
};
</script>

<template>
  <div class="flex flex-col gap-4 h-[500px]">
    <div class="flex gap-2">
      <button
        v-for="item in data"
        :key="item.id"
        class="rounded-full px-4 py-2 cursor-pointer"
        :class="item.id === current.id ? 'bg-black text-white' : 'bg-[#ECEDEF] text-black'"
        @click="handleCatalog(item)"
      >
        {{ $t(item.name) }}
      </button>
    </div>

    <div class="h-full rounded-3xl relative mt-4">
      <swiper
        direction="vertical"
        :navigation="{ prevEl: '.custom-prev', nextEl: '.custom-next' }"
        :auto-height="true"
        style="height: 100%"
        slides-per-view="3"
        :space-between="10"
        :modules="[Navigation]"
      >
        <swiper-slide v-for="item in current.children" :key="item.id" class="bg-[#f6f7f8] rounded-3xl cursor-pointer overflow-hidden">
          <div class="p-4 flex gap-4">
            <div class="relative flex justify-center items-center w-[200px]">
              <img :src="item.img" :alt="item.title" class="min-w-[200px] max-w-[200px] h-28 object-cover rounded-lg" />
              <icon v-if="item.isVideo" name="play-white.png" class="w-14 h-14 absolute" />
            </div>
            <div class="flex flex-col justify-between">
              <span class="px-4 py-1 rounded-full text-xs max-w-min text-white" :class="classes[item.name]">{{ $t(item.name) }}</span>
              <h4 class="text-md font-medium mb-0">{{ $t(item.title) }}</h4>
              <p class="text-xs text-gray-400 mb-0">{{ item.date }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <button class="custom-prev absolute left-1/2 z-20 transform top-0 -translate-y-1/2 -translate-x-1/2 rounded-full border p-2.5 bg-white">
        <icon name="up-arrow" is-svg class="w-4 h-4" />
      </button>
      <button class="custom-next absolute bottom-0 transform translate-y-1/2 -translate-x-1/2 left-1/2 z-20 rounded-full border p-2.5 bg-white">
        <icon name="down-arrow" is-svg class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
