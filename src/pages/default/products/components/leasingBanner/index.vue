<script setup>
const banner = {
  title: "Выгодный лизинг для сельского хозяйства",
  image1: "product-banner-1.png",
  image2: "product-banner-2.png",
};
</script>

<!-- 
 -->
<template>
  <div class="container">
    <bannerSmall color="#8FBE4A" leafColor="#A7CD4B" cusClass="" toRouter="">
      <div class="relative flex items-center pl-10 gap-10 h-40">
        <p class="text-2xl text-white">{{ $t(banner.title) }}</p>
        <icon :name="banner.image1" class="h-32 absolute right-64 bottom-0 z-10" />
        <icon :name="banner.image2" class="h-32 absolute right-20 bottom-0 transform rotate-y-180" />
      </div>
    </bannerSmall>
  </div>
</template>
