<script setup>
const exclusiveList = [
  {
    id: 1,
    title: "Дополнительная скидка на запчасти",
    subtitle: "При заказе от 100 тысяч рублей",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Desktop-1_rusagroset.png",
  },
  {
    id: 2,
    title: "Комплект для загрузки сеялок в подарок",
    subtitle: "",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Desktop-1_5.png",
  },
  {
    id: 3,
    title: "-10% на кроликов",
    subtitle: "При заказе от 100 тысяч рублей",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Desktop-3_1.png",
  },
];
</script>

<template>
  <div class="container py-8 pb-25">
    <!-- section-title -->
    <h2 class="text-2xl font-semibold">Эксклюзивно на Своём Фермерстве</h2>

    <div class="grid grid-cols-4 gap-5 mt-6">
      <div v-for="item in exclusiveList" class="relative min-h-[240px] rounded-xl overflow-hidden">
        <router-link :to="`/organization/${item.id}`" class="block px-5 py-8">
          <img :src="item.image" :alt="item.title" class="absolute inset-0 w-full h-full object-cover" />
          <p class="relative text-lg text-white font-medium">{{ item.title }}</p>
          <p class="relative text-sm text-white mt-1">{{ item.subtitle }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
