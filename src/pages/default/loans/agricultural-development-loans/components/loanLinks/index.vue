<script setup>
const linksList = [
  {
    title: "Льготный кредит без залога",
    link: "/credit",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/make_payment_01.svg",
    info: ["Льготная ставка", "Срок кредитования до 18 мес.", "Упрощенный порядок согласования до 10 млн ₽", "На пополнение оборотных средств"],
  },
  {
    title: "Кредит на развитие бизнеса",
    link: "/credit",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/increase_sales.svg",
    info: ["Льготная ставка", "Срок кредитования до 7 лет", "Упрощенный порядок согласования до 10 млн ₽", "Кредит на инвестиционные цели"],
  },
  {
    title: "Льготный кредит на покупку техники и оборудования",
    link: "/credit",
    image: "https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/marketplace_1_.svg",
    info: ["Льготная ставка", "Сумма до 30 млн Р", "Срок до 7 лет", "На покупку с/х техники, оборудования, запчастей и спецтехники"],
  },
];
</script>

<template>
  <div class="container py-8">
    <ul class="grid grid-cols-3 gap-5">
      <li v-for="item in linksList" class="flex flex-col items-start justify-between bg-white rounded-xl px-6 py-8">
        <div>
          <img :src="item.image" alt="" class="h-[150px] object-contain" />
          <h3 class="text-xl text-zinc-900 font-semibold mt-5">{{ $t(item.title) }}</h3>
          <ul class="list flex flex-col gap-3 mt-4">
            <li v-for="child in item.info" class="text-sm">{{ $t(child) }}</li>
          </ul>
        </div>
        <button class="text-xs text-zinc-900 border border-gray-300 rounded-full py-2.5 px-6 mt-8">{{ $t("Подробнее") }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list {
  list-style: disc;
  list-style-position: inside;
}

.list li::marker {
  color: green;
}
</style>
