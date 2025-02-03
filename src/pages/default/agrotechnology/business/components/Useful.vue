<script setup>
const data = [
  {
    id: 1,
    text: "Карта урожая, до 150 га свободно",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/Frame%201321317258%20(1)_2.png",
    bg_1: "#4781D9",
    bg_2: "#7DC4F4",
  },
  {
    id: 2,
    text: "Органическая сертификация",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/Frame%201321317259_2.png",
    bg_1: "#4781D9",
    bg_2: "#8967F6",
  },
  {
    id: 3,
    text: "Бесплатная подписка на агроновости",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/Frame%201321317258%20(3)_4.png",
    bg_1: "#A6CE39",
    bg_2: "#248341",
  },
  {
    id: 4,
    text: "Кредит на полевые работы по льготной ставке до 5%",
    img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/Frame%201321317258%20(2)_1.png",
    bg_1: "#4781D9",
    bg_2: "#8967F6",
  },
];
</script>
<template>
  <div class="flex flex-col gap-6 my-6">
    <h2 class="text-3xl font-semibold">Useful links</h2>
    <div class="flex justify-between w-full gap-6">
      <div
        v-for="(item, index) in data"
        :key="item.id"
        class="w-full h-3 rounded-3xl flex h-54 p-6 rounded-xl bg-gradient-to-tr relative overflow-hidden"
        :class="`from-[${item.bg_1}] to-[${item.bg_2}]`"
      >
        <span class="text-lg text-white z-10"> {{ item.text }} </span>
        <img :src="item.img" :alt="item.text" class="object-cover absolute -bottom-4 -right-4 rounded-xl p-4 w-44 h-44" />
      </div>
    </div>
  </div>
</template>
