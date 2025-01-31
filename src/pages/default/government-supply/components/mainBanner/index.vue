<script setup>
const banner = {
  link: "/loans/preferential-agricultural-loans",
  title: "Кредиты для малого и микробизнеса от Россельхозбанка",
  subtitle: "Кредиты для бизнеса на пополнение оборотных средств, инвестиционные цели и сезонные работы",
  image: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/RSHB_logo_new.png",
  buttonTitle: "Оформить заявку",
};
</script>

<template>
  <div class="container">
    <div class="relative rounded-b-xl overflow-hidden" style="background: linear-gradient(60deg, #a6ce39 10.21%, #248341 92.19%)">
      <!-- banner-content -->
      <div class="relative">
        <!-- banner-content-top -->
        <div class="min-h-[220px] flex items-center justify-between px-10 py-6">
          <div class="max-w-[450px]">
            <h1 class="text-3xl text-white font-medium">{{ banner.title }}</h1>
            <p class="text-sm text-white mt-5">{{ banner.subtitle }}</p>
          </div>
          <img :src="banner.image" alt="" />
        </div>
        <!-- banner-content-bottom -->
        <div class="flex items-center gap-5 w-full px-10 py-4 bg-white/10" style="backdrop-filter: blur(40px)">
          <button class="text-sm text-white font-medium border-2 border-white rounded-full px-7 py-3">{{ banner.buttonTitle }}</button>
          <div class="flex items-center gap-8">
            <div v-for="item in banner.infoList" class="flex items-center justify-between gap-2">
              <span class="text-2xl text-white font-semibold">{{ item.number }}</span>
              <span class="text-sm text-white">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
