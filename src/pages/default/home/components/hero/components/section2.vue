<template>
  <div class="background h-[300px] rounded-3xl overflow-hidden p-10">
    <div class="relative z-20">
      <div class="text-4xl font-bold">{{ $t("home_banner_text_2") }}</div>
      <div class="mt-5 max-w-[800px] leading-relaxed">{{ $t("home_banner_2") }}</div>
    </div>
    <icon name="banner-img2.png" class="absolute right-20 top-0 h-full z-10" />
    <icon name="home_banner_21" is-svg class="absolute right-0 top-0 h-full z-0" />
    <icon name="home_banner_22" is-svg class="absolute left-0 top-0 h-full z-0" />
  </div>
</template>
<style scoped>
.background {
  background: #9bc8ff;
  background: -webkit-linear-gradient(to right, #2989fb, #9bc8ff);
  background: linear-gradient(to right, #2989fb, #9bc8ff);
}
</style>
