<script setup>
const topCategories = [
  {
    id: "s-h-texnika",
    title: "Сельскохозяйственная техника",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Frame_1321316488.png",
  },
  {
    id: "fermerskoe-oboruvodanie",
    title: "Фермерское  оборудование",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Frame_10692975.png",
  },
  {
    id: "semena",
    title: "Семена",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Frame_277131069.png",
  },
  {
    id: "udobreniya",
    title: "Удобрения",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Frame_277131070.png",
  },
  {
    id: "sredstva-zaschity-rastreniy",
    title: "Средства защиты  растений",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Frame_1321316485.png",
  },
];

const discounts = [
  {
    id: "vse-skidki-na-traktory",
    title: "Все скидки на тракторы",
    image: "https://s56442.cdn.ngenix.net/img/305/240/resize/rshb/landings/landing/Frame_5331013_2_1.png",
  },
];
</script>

<template>
  <div class="container py-8">
    <h2 class="text-2xl font-semibold">Популярные категории</h2>

    <!-- Top categories -->
    <div class="grid grid-cols-4 gap-5 py-6">
      <div v-for="item in topCategories" :key="item.id" class="relative min-h-[240px] rounded-xl overflow-hidden px-4 py-6">
        <router-link :to="`/catalog/${item.id}`">
          <img :src="item.image" :alt="item.title" class="absolute inset-0 w-full h-full object-cover" />
          <p class="relative text-lg text-white font-semibold">{{ item.title }}</p>
        </router-link>
      </div>
    </div>

    <!-- Discounts -->
    <div class="grid grid-cols-4 gap-5 py-6">
      <div v-for="item in discounts" :key="item.id" class="relative min-h-[240px] rounded-xl overflow-hidden px-4 py-6">
        <router-link :to="`/catalog/${item.id}`">
          <img :src="item.image" :alt="item.title" class="absolute inset-0 w-full h-full object-cover" />
          <p class="relative text-lg text-white font-semibold">{{ item.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
