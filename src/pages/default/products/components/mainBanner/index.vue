<script setup>
import Banner from "@/components/global/banner.vue";

const banner = {
  link: "/loans/preferential-agricultural-loans",
  title: "Покупайте товары с финансовой поддержкой",
  subtitle: "на целевом маркетплейсе в вашем регионе",
  image: "https://s56442.cdn.ngenix.net/img/1440/500/resize/rshb/landings/landing/Desktop_1__1.jpg",
  buttonTitle: "Получить льготный кредит",
  infoList: [
    { number: "100+", text: "тыс посетителей в месяц" },
    { number: "500+", text: "тыс товаров" },
    { number: "3+", text: "тыс продавцов" },
  ],
};
</script>

<template>
  <div class="container py-8">
    <Banner class="p-0">
      <!-- banner-content-top -->
      <div class="min-h-[250px] w-1/3 px-10 py-6">
        <h1 class="text-3xl text-white font-medium">{{ $t(banner.title) }}</h1>
        <p class="text-sm text-white mt-5">{{ $t(banner.subtitle) }}</p>
      </div>
      <!-- banner-content-bottom -->
      <div class="flex items-center gap-5 w-full px-10 py-4" style="backdrop-filter: blur(40px)">
        <button class="text-sm text-white font-medium border-2 border-white rounded-tl-3xl rounded-br-3xl px-7 py-3">
          {{ $t(banner.buttonTitle) }}
        </button>
        <div class="flex items-center gap-8">
          <div v-for="item in banner.infoList" class="flex items-center justify-between gap-2">
            <span class="text-2xl text-white font-semibold">{{ item.number }}</span>
            <span class="text-sm text-white">{{ $t(item.text) }}</span>
          </div>
        </div>
      </div>
    </Banner>
  </div>
</template>
