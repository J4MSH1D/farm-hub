<script setup>
const data = [
  {
    id: 1,
    name: "Агроном",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/card1_1.png",
    link: "",
  },
  {
    id: 2,
    name: "Ветеринар",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/card2_1.png",
    link: "",
  },
  {
    id: 3,
    name: "Лаборант",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/card3_1.png",
    link: "",
  },
  {
    id: 5,
    name: "Оператор",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/card4_1.png",
    link: "",
  },
  {
    id: 6,
    name: "Инженер",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/card5_2.png",
    link: "",
  },
];
</script>
<template>
  <div class="flex flex-col items-center gap-6 my-6">
    <h2 class="text-3xl font-semibold w-full">Работа по профессиям</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      <div class="flex items-center gap-4 p-6 bg-white rounded-xl cursor-pointer" v-for="item in data" :key="item.id">
        <img :src="item.img" :alt="item.name" class="w-24 h-24 object-cover" />
        <span class="text-md font-semibold"> {{ item.name }}</span>
      </div>
    </div>
    <button class="rounded-full py-4 px-8 border-2 border-gray-200 my-4 transition duration-300 ease-linear hover:border-gray-500">
      Узнать больше
    </button>
  </div>
</template>
