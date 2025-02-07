<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const data = [
  {
    id: 1,
    title: "Фрукты груши",
    product_type: "Ферганская область, Кувинский район",
    image:
      "https://agrobaza.uz/upload/company/000/000/224/proposals/2022/08/03/nok-mevasi-olmalar-yabloki-2022-08-03-13-13-46-330026-034ce444225b2429d37f2808f5b3ba6d.webp?_=ozb9y",
    price: 22500,
    express_leasing: true,
  },
  {
    id: 2,
    title: "Черешня свежая",
    product_type: "\"NORCHONTOL\" KO'CHATCHILIK XO'JALIGI",
    image:
      "https://agrobaza.uz/upload/company/000/000/027/proposals/2022/08/07/chereshnya-svejaya-shirin-gilos-chereshnya-2022-08-07-18-12-52-806174-7024634bd3f692958d7662cae06606a2.webp?_=ozb9y",
    price: 43000,
    express_leasing: true,
  },
  {
    id: 3,
    title: "Виноград",
    product_type: "Сырдарьинская область, Город Гулистан",
    image:
      "https://agrobaza.uz/upload/company/000/000/680/proposals/2024/04/24/uzum-uzum-vinograd-2024-04-24-19-57-52-198613-c2ff8c572117a080b371fd498fdc4d4d.webp?_=ozb9y",
    price: "53000",
    express_leasing: true,
  },
  {
    id: 4,
    title: "Гранат",
    product_type: "Сырдарьинская область",
    image:
      "https://agrobaza.uz/upload/company/000/000/608/proposals/2024/12/14/anor-anor-granat-2024-12-14-09-40-12-755768-73b71871cddab1390e32097734fc515b.webp?_=ozb9y",
    price: "37000",
    express_leasing: false,
  },
  {
    id: 5,
    title: "Абрикос свежий",
    product_type: "АГРИУС,Ташкент, Мирабадский район",
    image:
      "https://agrobaza.uz/upload/company/000/000/027/proposals/2022/08/07/abrikos-svejiy-orik-abrikos-2022-08-07-12-27-24-645745-ffdc59e7778502f592baeda63ba4bb8b.webp?_=ozb9y",
    price: 22000,
    express_leasing: false,
  },
  {
    id: 6,
    title: "Виноград",
    product_type: "AGRO EXPORT GROUP LLC,Ташкент, Мирзо-Улугбекский район",
    image:
      "https://agrobaza.uz/upload/company/000/000/224/proposals/2022/08/03/uzum-uzum-vinograd-2022-08-03-12-53-30-270322-e723bbac06c7cb37c2cc79b8147bee0f.webp?_=ozb9y",
    price: "16000",
    express_leasing: true,
  },
];
</script>

<template>
  <div class="container py-8">
    <div class="flex items-center justify-between">
      <!-- section-title -->
      <h2 class="text-2xl font-semibold">{{ $t("Объявление от покупателей") }}</h2>
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
      <swiper-slide v-for="item in data" :key="item" class="max-w-[220px] bg-white rounded-xl p-4 my-4 cus-shadow last:mr-0">
        <!-- image -->
        <router-link :to="`/products/${item.id}`" class="block border border-gray-200 aspect-square bg-gray-200">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-contain" />
        </router-link>

        <!-- title -->
        <router-link :to="`/products/${item.id}`" class="text-sm text-zinc-900 line-clamp-2 mt-4 h-10">{{ $t(item.title) }}</router-link>

        <!-- product_type -->
        <span class="text-xs text-zinc-400 line-clamp-2 mt-2 h-8">{{ $t(item.product_type) }}</span>

        <!-- price -->
        <div class="flex items-center justify-between gap-2 mt-4">
          <div class="relative flex items-center">
            <p class="text-sm text-zinc-900 font-medium">{{ Number(item.price).toLocaleString("ru-RU") }} {{ $t("UZS") }}</p>
          </div>
          <icon name="heart300" is-svg-raw class="h-3.5 w-3.5 cursor-pointer" />
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
