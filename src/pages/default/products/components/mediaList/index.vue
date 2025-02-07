<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const mediaList = [
  {
    id: 41,
    name: "EduBrb",
    title: "Проект по выращиванию лимонов",
    date: "03.12.2024",
    img: "https://i.ytimg.com/vi/HwNdO0gg9es/sddefault.jpg",
    isVideo: true,
    link: "https://www.youtube.com/watch?v=HwNdO0gg9es",
  },
  {
    id: 42,
    name: "EduBrb",
    title: "Проект по выращиванию малины",
    date: "03.12.2024",
    img: "https://i.ytimg.com/vi/RLt-WcZLrsE/sddefault.jpg",
    isVideo: true,
    link: "https://youtu.be/RLt-WcZLrsE",
  },
  {
    id: 43,
    name: "EduBrb",
    title: "Проект по выращиванию голубики",
    date: "03.12.2024",
    img: "https://i.ytimg.com/vi/3hd7qjupKfI/sddefault.jpg",
    isVideo: true,
    link: "https://youtu.be/3hd7qjupKfI",
  },
  {
    id: 44,
    name: "EduBrb",
    title: "Проект по выращиванию клубники",
    date: "03.12.2024",
    img: "https://i.ytimg.com/vi/vCNmOdnogZc/sddefault.jpg",
    isVideo: true,
    link: "https://youtu.be/vCNmOdnogZc",
  },
];
</script>

<template>
  <div class="container py-8 pb-40">
    <div class="flex items-center justify-between">
      <!-- section-title -->
      <h2 class="text-2xl font-semibold">{{ $t("Смотрите и читайте на Своё Медиа") }}</h2>
      <!-- slider-buttons -->
      <div class="flex items-center justify-end gap-2">
        <button class="mediaList-button-prev bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-left-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
        <button class="mediaList-button-next bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-right-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
      </div>
    </div>

    <!-- Slider -->
    <swiper
      :modules="[Navigation]"
      :slides-per-view="4"
      :space-between="10"
      :navigation="{ nextEl: '.mediaList-button-next', prevEl: '.mediaList-button-prev' }"
      class="mt-5"
    >
      <swiper-slide v-for="item in mediaList" :key="item">
        <a :href="item.link" target="_blank" class="flex flex-col max-h-[360px] bg-white rounded-xl overflow-hidden hover:(shadow-2xl)">
          <div class="relative">
            <img :src="item.img" :alt="item.title" class="w-full h-full object-cover" />
            <icon
              v-if="item.isVideo"
              name="play-white.png"
              class="w-16 h-16 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <!-- media-content -->
          <div class="flex flex-col gap-5 justify-between p-4">
            <p class="text-md text-zinc-900 line-clamp-3 h-9">{{ item.title }}</p>
            <span class="text-xs text-zinc-500">{{ item.date }}</span>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
