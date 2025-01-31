<script setup>
const banner = {
  title: "Экспресс-Лизинг",
  subtitle:
    "Программа даёт возможность приобрести технику и оборудование на специальных условиях, в том числе с использованием государственной поддержки",
  image: "https://svoefermerstvo.ru/_nuxt_front_services/img/banner.389c768.png",
  info: [
    {
      image: "https://svoefermerstvo.ru/_nuxt_front_services/img/icon_vat.e8aebb5.svg",
      title: "Минимальное удорожание",
      description: "От 0% на популярную технику",
    },
    {
      image: "https://svoefermerstvo.ru/_nuxt_front_services/img/icon_calendars.2450197.svg",
      title: "До 5 лет",
      description: "Максимальный срок лизинга",
    },
    {
      image: "https://svoefermerstvo.ru/_nuxt_front_services/img/icon_vat.e8aebb5.svg",
      title: "Быстрое решение по заявке",
      description: "Оформление договора до 3-х дней",
    },
  ],
};
</script>

<template>
  <div class="container pb-8">
    <div class="content relative rounded-b-4xl px-14 py-8 pb-20 mb-20">
      <div class="flex justify-between gap-6 flex-grow">
        <div class="max-w-[500px]">
          <button class="flex items-center gap-3">
            <div class="rounded-full bg-white border-2 border-gray-200 p-3">
              <icon name="arrow-left-small600" is-svg-raw class="w-5 h-5 fill-black" />
            </div>
            <span class="text-sm text-zinc-500">Вернуться</span>
          </button>
          <div class="text-3xl text-sinc-900 font-semibold mt-10">{{ banner.title }}</div>
          <div class="text-sm text-zinc-500 leading-[1.8] mt-6">{{ banner.subtitle }}</div>
        </div>
        <!-- banner-image -->
        <div class="flex-grow max-w-[500px]">
          <img :src="banner.image" alt="" class="h-full w-full object-contain" />
        </div>
      </div>

      <!-- info-list -->
      <div class="absolute w-full inset-0 top-auto transform translate-y-1/2 px-18">
        <div class="flex items-center gap-8 bg-white shadow rounded-3xl px-4 py-6">
          <!-- list -->
          <ul class="grid grid-cols-3">
            <li v-for="item in banner.info" :key="item.title" class="flex gap-5 border-r border-gray-100 px-5 last:(border-0)">
              <div class="w-12 h-12 bg-gray-100 rounded-full p-3.5">
                <img :src="item.image" alt="" class="w-full h-full object-contain" />
              </div>
              <div>
                <h3 class="text-lg text-zinc-900 font-semibold">{{ item.title }}</h3>
                <p class="text-sm text-zinc-500 mt-2">{{ item.description }}</p>
              </div>
            </li>
          </ul>
          <!-- button -->
          <button class="bg-green-500 rounded-full text-sm text-white font-medium whitespace-nowrap px-8 py-3">Оставить заявку</button>
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
