<script setup>
const overviewList = [
  {
    title: "Возможности",
    image: "https://svoefermerstvo.ru/_nuxt_front_services/img/opportunities.747d34b.svg",
    info: [
      "Минимальный аванс от 10%, срок договора до 60 месяцев",
      "Специальные условия от производителей-партнёров",
      "Минимальный пакет документов для рассмотрения заявки",
      "График платежей составляется с учётом сезонности бизнеса",
      "Экономия на налогах и ускоренная амортизация",
    ],
  },
  {
    title: "Заемщик",
    image: "https://svoefermerstvo.ru/_nuxt_front_services/img/legal_support_business.6f8b7ac.svg",
    info: ["Срок существования компании или ИП от 18 месяцев", "Отсутствие убытков и позитивная динамика", "Хорошая деловая репутация"],
  },
];
</script>

<template>
  <div class="container py-8 pb-4">
    <div class="grid grid-cols-2 gap-8 bg-white rounded-4xl p-14">
      <div class="flex gap-8" v-for="item in overviewList" :key="item.title">
        <img :src="item.image" alt="" class="w-[112px] h-[112px] object-contain" />
        <div>
          <h2 class="text-lg text-zinc-900 font-medium">{{ item.title }}</h2>
          <ul class="info-list flex flex-col gap-4 mt-6">
            <li v-for="child in item.info" class="info-list-item text-sm text-zinc-500 font-light">{{ child }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-list {
  list-style: disc;
  list-style-position: inside;
}

.info-list-item::marker {
  color: #42ab44;
}
</style>
