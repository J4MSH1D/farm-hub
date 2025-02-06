<script setup>
const data = [
  {
    id: 1,
    name: "Агроном",
    img: "job_1.png",
    link: "",
  },
  {
    id: 2,
    name: "Ветеринар",
    img: "job_2.png",
    link: "",
  },
  {
    id: 3,
    name: "Инженер-технолог",
    img: "job_3.png",
    link: "",
  },
  {
    id: 4,
    name: "Агроинженер",
    img: "job_4.png",
    link: "",
  },
  {
    id: 5,
    name: "Машинист",
    img: "job_5.png",
    link: "",
  },
  {
    id: 6,
    name: "Тракторист",
    img: "job_6.png",
    link: "",
  },
  {
    id: 7,
    name: "Разнорабочий",
    img: "job_7.png",
    link: "",
  },
  {
    id: 8,
    name: "Менеджер по продажам",
    img: "job_8.png",
    link: "",
  },
  {
    id: 9,
    name: "Архитектор теплиц",
    img: "job_9.png",
    link: "",
  },
  {
    id: 10,
    name: "Геодезист",
    img: "job_10.png",
    link: "",
  },
];
</script>
<template>
  <div class="flex flex-col items-center gap-6 my-6">
    <h2 class="text-3xl font-semibold w-full">Работа по профессиям</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
      <div class="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl cursor-pointer" v-for="item in data" :key="item.id">
        <div class="w-24 h-24 bg-[#EBEEED] rounded-full p-2">
          <icon :name="item.img" :alt="item.name" class="w-full h-full object-cover" />
        </div>
        <div class="col-span-2 flex flex-col justify-between items-end">
          <p class="text-lg leading-5 text-center">{{ $t(item.name) }}</p>
          <a-button class="!rounded-tl-2xl !rounded-br-2xl !rounded-bl-none !rounded-tr-none w-20">
            {{ $t("Видеть") }}
          </a-button>
        </div>
      </div>
    </div>

    <button class="rounded-full py-4 px-8 border-2 border-gray-200 my-4 transition duration-300 ease-linear hover:border-gray-500">
      Узнать больше
    </button>
  </div>
</template>
