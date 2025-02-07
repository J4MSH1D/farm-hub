<script setup>
const banner = {
  title: "Бизнес-карта Фермера от Россельхозбанка",
  subtitle:
    "Сокращайте время и расходы на отчёты, покупайте сельскохозяйственную технику, запчасти, оборудование, удобрения по сниженным ценам и получайте скидки на продукты и сервисы партнёров Своего Фермерства",
  image: "https://svoefermerstvo.ru/_nuxt_front_services/img/card1.75b7d60.png",
};
</script>

<template>
  <div class="container pb-8">
    <div class="content relative rounded-b-4xl px-14 py-8">
      <div class="flex justify-between gap-6 flex-grow">
        <div class="max-w-[500px]">
          <!-- Ortga qaytish (button) -->
          <button class="flex items-center gap-3">
            <div class="rounded-full bg-white border-2 border-gray-200 p-3">
              <icon name="arrow-left-small600" is-svg-raw class="w-5 h-5 fill-black" />
            </div>
            <span class="text-sm text-zinc-500">{{ $t("Вернуться") }}</span>
          </button>
          <!-- title -->
          <div class="text-3xl text-zinc-900 font-semibold mt-10">{{ $t(banner.title) }}</div>
          <!-- subtitle -->
          <div class="text-sm text-zinc-500 leading-[1.8] mt-6">{{ $t(banner.subtitle) }}</div>
          <!-- Oformit (button) -->
          <button class="bg-green-500 rounded-full text-white text-sm py-3 px-7 mt-8">{{ $t("Оформить карту") }}</button>
        </div>
        <!-- banner-image -->
        <div class="flex-grow max-w-[350px]">
          <img :src="banner.image" alt="" class="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  background: linear-gradient(211.37deg, hsla(0, 0%, 100%, 0.5) 42.78%, transparent 92.23%),
    linear-gradient(190.54deg, #c2dbec 7.47%, #f3fafe 63.27%, #fff 92.95%);
}
</style>
