<script setup>
const banner = {
  title: "Бизнес-карта с лимитом кредитования",
  subtitle:
    "Кредиты с господдержкой для сельхозпроизпроизводителей на пополнение оборотных средств, проведение сезонных работ и инвестиционные цели от 5% годовых до 15 лет с удобным и быстрым оформлением по одной заявке.",
  background: "https://s56442.cdn.ngenix.net/img/1440/500/resize/rshb/contentlanding/Desktop-3.jpg",
};
</script>

<template>
  <div class="container pb-8">
    <div class="content relative rounded-b-4xl px-14 py-12 rounded-b-3xl overflow-hidden">
      <img :src="banner.background" alt="" class="absolute inset-0 h-full w-full object-cover" />
      <div class="relative max-w-[600px]">
        <h1 class="text-3xl text-white font-medium">{{ banner.title }}</h1>
        <p class="text-white font-light leading-[1.8] mt-5">{{ banner.subtitle }}</p>
        <button class="border-2 border-gray-300 rounded-full py-3 px-6 text-sm text-white mt-18 hover:(border-gray-200)">Оформить карту</button>
      </div>
    </div>
  </div>
</template>
