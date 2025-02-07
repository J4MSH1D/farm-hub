<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const offersList = Array(10).fill({
  title: "Инвест-кредит АПК",
  image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/services/images/invest_kredit.svg",
  info: [
    "Аванс от 10%",
    "Срок до 60 месяцев",
    "Техника и оборудование на специальных условиях, в том числе с использованием мер государственной поддержки",
  ],
});
</script>

<template>
  <div class="container mt-10 py-8">
    <h2 class="text-3xl text-zinc-900 font-medium text-center">{{ $t("Другие предложения для бизнеса") }}</h2>

    <div class="relative mt-14">
      <swiper
        space-between="20"
        slides-per-view="3.5"
        :modules="[Navigation]"
        :navigation="{ nextEl: '.otherOffers-btn-next', prevEl: '.otherOffers-btn-prev' }"
      >
        <swiper-slide v-for="item in offersList" :key="item.title" class="bg-white rounded-xl p-8">
          <div class="flex flex-col items-center justify-between">
            <div class="flex flex-col items-center">
              <img :src="item.image" alt="" class="h-[150px] object-contain" />
              <h3 class="text-xl text-zinc-900 font-semibold mt-5">{{ $t(item.title) }}</h3>
              <ul class="offer-info-list flex flex-col gap-4 mt-6">
                <li v-for="child in item.info" :key="child" class="offer-info-item font-light leading-[1.8]">
                  {{ $t(child) }}
                </li>
              </ul>
            </div>

            <button class="border-2 border-gray-300 rounded-full text-sm w-full py-3 px-6 mt-8 hover:border-gray-400">
              {{ $t("Подробнее") }}
            </button>
          </div>
        </swiper-slide>
      </swiper>

      <button
        class="otherOffers-btn-prev absolute top-1/2 left-0 z-10 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white p-2.5 rounded-full"
      >
        <icon name="arrow-left-small600" is-svg-raw class="w-5 h-5 fill-black" />
      </button>
      <button
        class="otherOffers-btn-next absolute top-1/2 right-0 z-10 transform translate-x-1/2 -translate-y-1/2 shadow-lg bg-white p-2.5 rounded-full"
      >
        <icon name="arrow-right-small600" is-svg-raw class="w-5 h-5 fill-black" />
      </button>
    </div>
  </div>
</template>
