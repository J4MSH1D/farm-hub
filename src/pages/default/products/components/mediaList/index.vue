<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const mediaList = [
  {
    id: 1,
    created_at: new Date(2023, 5, 28),
    topic: "Выращивание",
    image: "https://i.ytimg.com/vi/HwNdO0gg9es/sddefault.jpg",
    description: "Проект по выращиванию лимонов",
  },
  {
    id: 1,
    created_at: new Date(2023, 5, 28),
    topic: "Выращивание",
    image: "https://i.ytimg.com/vi/RLt-WcZLrsE/sddefault.jpg",
    description: "Проект по выращиванию малины",
  },
  {
    id: 1,
    created_at: new Date(2023, 5, 28),
    topic: "Выращивание",
    image: "https://i.ytimg.com/vi/g1ugbetS1V8/sddefault.jpg",
    description: "Проект по выращиванию винограда",
  },
  {
    id: 1,
    created_at: new Date(2023, 5, 28),
    topic: "Выращивание",
    image: "https://i.ytimg.com/vi/Jr75JOQLN8s/sddefault.jpg",
    description: "Проект по выращиванию мандаринов",
  },
];

function getDate(dateString) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateString);
}
</script>

<template>
  <div class="container py-8 pb-40">
    <div class="flex items-center justify-between">
      <!-- section-title -->
      <h2 class="text-2xl font-semibold">Смотрите и читайте на Своё Медиа</h2>
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
      :space-between="20"
      :navigation="{ nextEl: '.mediaList-button-next', prevEl: '.mediaList-button-prev' }"
      class="mt-5"
    >
      <swiper-slide v-for="item in mediaList" :key="item">
        <router-link
          :to="`svoe-media/articles/${item.id}`"
          class="grid grid-rows-2 max-h-[360px] h-full bg-white rounded-xl overflow-hidden hover:(shadow-2xl)"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
          <!-- media-content -->
          <div class="flex flex-col justify-between px-4 py-5">
            <div>
              <span class="text-[10px] text-zinc-500 font-bold uppercase rounded bg-gray-100 py-1.5 px-2" v-if="item.topic">{{ item.topic }}</span>
              <p class="text-sm text-zinc-900 mt-5 line-clamp-3">{{ item.description }}</p>
            </div>
            <span class="text-xs text-zinc-500 mt-5">{{ getDate(item.created_at) }}</span>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
