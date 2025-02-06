<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

const services = [
  {
    link: "/job",
    title: "Разместите своё объявление",
    image: "https://s56442.cdn.ngenix.net/img/60/60/resize//rshb/landings/landing/file_22-2_3.png",
  },
  {
    link: "/media",
    title: "Бизнес-план по выращиванию фруктов и овощей",
    image: "https://s56442.cdn.ngenix.net/img/60/60/resize//rshb/landings/landing/file_22-2_2_1.png",
  },
  {
    link: "/media",
    title: "Проекты тепличного хозяйства",
    image: "https://s56442.cdn.ngenix.net/img/60/60/resize//rshb/landings/landing/Group_2792_2.png",
  },
  {
    link: "/job",
    title: "Работа в сельском хозяйстве",
    image: "https://s56442.cdn.ngenix.net/img/60/60/resize//rshb/landings/landing/Frame5330258_2.png",
  },
];
</script>

<template>
  <div class="container py-8">
    <!-- section-title -->
    <h2 class="text-2xl font-semibold">{{ $t("Полезные сервисы") }}</h2>

    <!-- Slider -->
    <swiper :slides-per-view="4" class="mt-5" space-between="20" auto-height="true">
      <swiper-slide v-for="item in services" style="height: 100%" class="bg-white rounded-xl overflow-hidden hover:(shadow-xl) last:(mr-0)">
        <router-link :to="item.link" class="h-full flex flex-col items-start justify-between p-5">
          <div class="flex items-center justify-between gap-5">
            <!-- service-title -->
            <p class="text-xl text-zinc-900 font-medium">{{ $t(item.title) }}</p>
            <!-- service-image -->
            <div class="min-w-15 h-15 bg-slate-100">
              <img :src="item.image" alt="" class="h-full w-full object-contain border border-white" />
            </div>
          </div>

          <!-- service-button -->
          <button class="text-sm border-2 border-gray-200 rounded-full px-5 py-2 mt-14 hover:(border-green-800)">{{ $t("Перейти") }}</button>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
