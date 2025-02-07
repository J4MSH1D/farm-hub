<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

const services = [
  {
    link: "",
    title: "Разместите своё объявление",
    image: "",
  },
  {
    link: "",
    title: "Бизнес-план по выращиванию фруктов и овощей",
    image: "",
  },
  {
    link: "",
    title: "Проекты тепличного хозяйства",
    image: "",
  },
  {
    link: "",
    title: "Работа в сельском хозяйстве",
    image: "",
  },
];
</script>

<template>
  <div class="container py-8">
    <!-- section-title -->
    <h2 class="text-2xl font-semibold">{{ $t("Полезные сервисы") }}</h2>

    <!-- Slider -->
    <ul class="grid grid-cols-4 gap-5 mt-4">
      <li v-for="item in services" class="list-item rounded-xl bg-white p-2 flex flex-col"></li>
    </ul>
  </div>
</template>

<style scoped>
.list-item {
  transition: 0.2s;
}
.list-item:hover {
  box-shadow: 0 5px 8px rgba(128, 128, 128, 0.308);
}
</style>
