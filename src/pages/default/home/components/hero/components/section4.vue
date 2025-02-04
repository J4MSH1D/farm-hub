<template>
  <div class="background h-[300px] rounded-3xl overflow-hidden p-10">
    <div class="relative z-20">
      <div class="text-4xl font-bold">{{ $t("home_banner_text_4") }}</div>
      <div class="mt-5 max-w-[800px] leading-relaxed">{{ $t("home_banner_4") }}</div>
    </div>
    <icon name="banner-img4.png" class="absolute right-20 top-0 h-full z-10" />
    <icon name="gradient_1" is-svg class="absolute right-0 top-0 h-full z-0" />
    <icon name="gradient_2" is-svg class="absolute left-0 top-0 h-full z-0" />
  </div>
</template>
<style scoped>
.background {
  background: #a5fe6d;
  background: -webkit-linear-gradient(to right, #60bf23, #a5fe6d);
  background: linear-gradient(to right, #60bf23, #a5fe6d);
}
</style>
