<script setup>
const banner = {
  title: "Выгодный лизинг для сельского хозяйства",
  image: "https://s56442.cdn.ngenix.net/img/1440/112/resize/rshb/landings/landing/Desktop_12.png",
};
</script>

<template>
  <div class="container py-8">
    <div class="relative rounded-xl overflow-hidden p-5">
      <img :src="banner.image" alt="" class="absolute inset-0 h-full w-full object-cover" />
      <div class="relative h-full flex items-center justify-between min-h-[70px]">
        <h3 class="text-xl text-white font-medium">{{ $t(banner.title ) }}</h3>
        <button class="border-2 border-white rounded-full text-white text-sm font-medium py-3 px-6">{{ $t("Все предложения") }}</button>
      </div>
    </div>
  </div>
</template>
