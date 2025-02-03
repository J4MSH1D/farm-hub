<script setup>
const banners = [
  {
    title: "Простой способ расчёта по оперативным расходам бизнеса без комиссий и налога",
    subtitle: "Бизнес-карта помогает планировать расходы и точнее рассчитывать налоговую базу",
    image: "https://s56442.cdn.ngenix.net/img/630/210/resize/rshb/contentlanding/Desktop-3_1.jpg",
    link: null,
  },
  {
    title: "РКО на выгодных условиях с продвижением в экосистеме Своё",
    subtitle: "Оптимальные тарифы, бесплатное открытие и бонусы от партнёров",
    image: "https://s56442.cdn.ngenix.net/img/630/210/resize/rshb/contentlanding/Desktop1.jpg",
    link: "/",
  },
];
</script>

<template>
  <div class="container py-8">
    <ul class="grid grid-cols-2 gap-5">
      <li v-for="item in banners" class="relative rounded-xl overflow-hidden px-8 py-8">
        <!-- banner-bg -->
        <img :src="item.image" alt="" class="absolute inset-0 h-full w-full object-cover" />
        <!-- banner-content -->
        <div class="relative max-w-[275px]">
          <h3 class="text-lg leading-[1.2] text-white font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-white font-light leading-[1.5] mt-4">{{ item.subtitle }}</p>
          <router-link class="inline-block text-sm text-white border-2 border-white rounded-full py-3 px-8 mt-8" v-if="item.link"
            >Подробнее</router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>
