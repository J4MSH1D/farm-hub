<script setup>
const descriptionList = [
  {
    title: "Доступ к счету 24/7",
    description: "Расплачивайтесь картой в магазинах без комиссии и ограничений в любое время суток",
    image: "https://svoefermerstvo.ru/_nuxt_front_services/img/consideration.ff3efa4.svg",
  },
  {
    title: "Снятие наличных в любых банкоматах",
    description: "До 300 000 ₽ в сутки по счёту",
    image: "https://svoefermerstvo.ru/_nuxt_front_services/img/bank.887682a.svg",
  },
  {
    title: "Внесение наличных",
    description: "Мгновенное зачисление на расчётный счёт",
    image: "https://svoefermerstvo.ru/_nuxt_front_services/img/make_payment.a9ee258.svg",
  },
  {
    title: "Контроль расходов",
    description: "Мониторинг расходов и установка лимитов по картам",
    image: "https://svoefermerstvo.ru/_nuxt_front_services/img/certificate_installed.9aea194.svg",
  },
  {
    title: "Выпуск неограниченного количества карт",
    description: "Бесплатно и столько, сколько необходимо",
    image: "https://svoefermerstvo.ru/_nuxt_front_services/img/bank_card.07a65d1.svg",
  },
  {
    title: "Перевод с Бизнес-карты на карту физического лица",
    description: "24/7",
    image: "https://svoefermerstvo.ru/_nuxt_front_services/img/hands.747ece8.svg",
  },
];
</script>

<template>
  <ul class="grid grid-cols-3 gap-5">
    <li v-for="item in descriptionList" :key="item.title" class="bg-slate-100 rounded-xl p-10">
      <img :src="item.image" alt="" />
      <h3 class="text-lg text-zinc-900 font-semibold mt-5">{{ $t(item.title) }}</h3>
      <p class="text-sm text-zinc-500 mt-3">{{ $t(item.description) }}</p>
    </li>
  </ul>
</template>
