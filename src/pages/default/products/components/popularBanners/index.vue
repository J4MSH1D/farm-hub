<script setup>
const banners = [
  {
    link: "/applications/breeding",
    title: "Подборка селекционных семян и племенных животных",
    image: "https://s56442.cdn.ngenix.net/img/1280/290/resize/rshb/landings/landing/Banner_Desktop-1_1.png",
    buttonTitle: "Подробнее",
  },
  {
    link: "/leasing",
    title: "С/х техника в лизинг под 0%",
    image: "https://s56442.cdn.ngenix.net/img/1280/290/resize/rshb/landings/landing/Banner_Desktop.png",
    buttonTitle: "Подать заявку",
  },
];
</script>

<template>
  <div class="container py-8">
    <div class="flex items-stretch justify-between gap-5">
      <!-- banners -->
      <div v-for="item in banners" class="relative flex-1 rounded-xl overflow-hidden py-6 px-8">
        <img :src="item.image" alt="" class="absolute inset-0 h-full w-full object-cover" />
        <!-- banner-content -->
        <div class="relative h-full w-1/2 flex flex-col items-start justify-between min-h-[180px]">
          <h3 class="text-xl text-white font-medium">{{ item.title }}</h3>
          <button class="border-2 border-white rounded-full text-white text-sm font-medium py-3 px-6">{{ item.buttonTitle }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
