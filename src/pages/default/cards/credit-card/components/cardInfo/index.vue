<script setup>
const infoList = [
  {
    title: "Льготный период до 55 дней",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/consideration_24_02-4_3.svg",
  },
  { title: "3 млн рублей лимит кредитования", image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/Frame_5330766.svg" },
  {
    title: "12 месяцев действие кредитного лимита",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/legal_support_business.svg",
  },
  {
    title: "Минимальный платёж — 10% от суммы основного долга",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/calculating_bid_3.svg",
  },
  {
    title: "Без залогового обеспечения и поручительства",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/signature_documents_01.svg",
  },
  {
    title: "Для действующих клиентов РСХБ — ИП и ООО",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/new_interface_3.svg",
  },
];
</script>

<template>
  <div class="container py-8">
    <ul class="grid grid-cols-3 gap-5">
      <li v-for="item in infoList" class="flex items-center gap-5 bg-white rounded-xl px-5 py-7">
        <img :src="item.image" alt="" />
        <p class="text-lg text-zinc-900 font-medium">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>
