<script setup>
const infoList = [
  {
    title: "Льготная ставка кредитования АПК",
    description: "Возможно субсидирование до 70 % ключевой ставки РФ",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/cash_withdrawal.svg",
  },
  {
    title: "Срок до 15 лет",
    description: "на инвестиционные цели и <b>до 1 года</b> на пополнение оборотных средств",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/certificate_expires.svg",
  },
  {
    title: "Оформление по 2 документам",
    description: "при сумме кредита до 10 млн ₽",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/act_01.svg",
  },
];
</script>

<template>
  <div class="container py-8">
    <ul class="grid grid-cols-3 gap-5">
      <li v-for="item in infoList" class="flex gap-5 bg-white rounded-xl px-6 py-8">
        <img :src="item.image" alt="" class="max-w-[80px] w-full object-contain" />
        <div>
          <h3 class="text-2xl text-zinc-900 font-semibold">{{ item.title }}</h3>
          <div v-html="item.description" class="text-zinc-900 leading-[1.6] mt-3" />
        </div>
      </li>
    </ul>
  </div>
</template>
