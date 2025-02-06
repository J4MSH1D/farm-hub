<script setup>
// const banners = [
//   {
//     link: "/agrotechnologies",
//     title: "Решение для теплиц на основе ИИ",
//     image: "https://s56442.cdn.ngenix.net/img/1280/290/resize/rshb/landings/landing/Banner_Desktop-1_1.png",
//     buttonTitle: "Подробнее",
//   },
//   {
//     link: "/government-supply",
//     title: "Гранты и субсидии от государства",
//     image: "https://s56442.cdn.ngenix.net/img/1280/290/resize/rshb/landings/landing/Banner_Desktop.png",
//     buttonTitle: "Подать заявку",
//   },
// ];

const banners = [
  {
    color: "#47C9F3",
    leafColor: "#60D4F0",
    cusClass: "",
    toRouter: "/agrotechnology",
    label: "Решение для теплиц на основе ИИ",
    image: "job-banner-1.png",
  },
  {
    color: "#90B964",
    leafColor: "#ADCA98",
    cusClass: "",
    toRouter: "/government-supply",
    label: "Гранты и субсидии от государства",
    image: "product-banner-3.png",
  },
];
</script>

<!-- <template>
  <div class="container py-8">
    <div class="flex items-stretch justify-between gap-5">
      <div v-for="item in banners" class="relative flex-1 rounded-xl overflow-hidden py-6 px-8">
        <img :src="item.image" alt="" class="absolute inset-0 h-full w-full object-cover" />
        <div class="relative h-full w-1/2 flex flex-col items-start justify-between min-h-[180px]">
          <h3 class="text-xl text-white font-medium">{{ $t(item.title) }}</h3>
          <router-link :to="item.link" class="border-2 border-white rounded-full text-white text-sm font-medium py-3 px-6">{{
            $t(item.buttonTitle)
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10">
    <bannerSmall
      v-for="(item, index) in banners"
      :key="index"
      :color="item.color"
      :leafColor="item.leafColor"
      :cusClass="item.cusClass"
      :toRouter="item.toRouter"
    >
      <div class="relative flex items-center pl-10 gap-10 h-44">
        <p class="text-xl text-white">{{ $t(item.label) }}</p>
        <icon :name="item.image" class="h-42 absolute right-20 bottom-0" />
      </div>
    </bannerSmall>
  </div>
</template>
