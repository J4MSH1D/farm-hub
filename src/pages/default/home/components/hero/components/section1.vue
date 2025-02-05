<template>
  <div class="background h-[300px] rounded-3xl overflow-hidden p-10">
    <div class="relative z-20">
      <div class="text-4xl font-bold">Mening Tomorqam</div>
      <div class="mt-5 max-w-[800px] leading-relaxed">{{ $t("home_banner_1") }}</div>
      <!-- <div class="mt-15">
        <a-button size="large">Read more</a-button>
      </div> -->
    </div>
    <icon name="banner-img1.png" class="absolute right-20 top-0 h-full z-10" />
    <icon name="home_banner_11" is-svg class="absolute right-0 top-0 h-full z-0" />
    <icon name="home_banner_12" is-svg class="absolute left-0 top-0 h-full z-0" />
  </div>
</template>
<style scoped>
.background {
  background: #e1f44c;
  background: -webkit-linear-gradient(to right, #148a18, #e1f44c);
  background: linear-gradient(to right, #148a18, #e1f44c);
}
</style>
