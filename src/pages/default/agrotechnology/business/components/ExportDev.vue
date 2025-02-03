<script setup>
const data = [
  {
    id: 1,
    name: "Решение для теплиц ",
    img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317254%20(2).png",
    link: "",
    path: "",
  },
  {
    id: 2,
    name: "Средства защиты растений",
    img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317256.png",
    link: "https://epauzb.uz/",
  },
  {
    id: 3,
    name: "Стимуляторы роста",
    img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317254%20(1)_1.png",
    link: "",
  },
  {
    id: 4,
    name: "Биологические фунгициды",
    img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317253%20(1)_1.png",
    link: "",
  },
  {
    id: 5,
    name: "Деструкторы пожнивных остатков",
    img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317253_2.png",
    link: "",
  },
  {
    id: 6,
    name: " Прогнозирование спроса",
    img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317257.png",
    link: "",
  },
];
</script>
<template>
  <div class="flex flex-col gap-6 my-6">
    <h2 class="text-3xl font-semibold">Каталог</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      <div class="flex items-center gap-4 p-6 bg-white rounded-xl cursor-pointer" v-for="item in data" :key="item.id">
        <img :src="item.img" :alt="item.name" class="w-24 h-24 object-cover" />
        <span class="text-md font-semibold"> {{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
