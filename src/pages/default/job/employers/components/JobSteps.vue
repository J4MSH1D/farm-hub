<script setup>
const data = [
  {
    id: 1,
    img: "job_1.png",
    title: "Вы регистрируетесь",
    text: "Это не займёт много времени. Все возможности платформы будут доступны",
  },
  {
    id: 2,
    img: "job_2.png",
    title: "Вы размещаете вакансии",
    text: "Необходимых вам сотрудников",
  },
  {
    id: 3,
    img: "job_3.png",
    title: "Вы получаете отклики",
    text: "Заинтересованные кандидаты отправляют вам свои резюме",
  },
];
</script>
<template>
  <div class="flex flex-col gap-6 mb-10">
    <h2 class="text-3xl font-semibold">Как это работает</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full relative">
      <span class="w-[70%] top-14 h-0.5 rounded-full bg-gray-200 absolute"></span>
      <div v-for="item in data" :key="item.id" class="flex flex-col gap-3">
        <div class="flex items-center justify-center bg-white rounded-3xl w-28 h-28 z-10 p-6">
          <icon :name="item.img" class="w-full h-full" />
        </div>
        <h6 class="text-md font-semibold">{{ item.title }}</h6>
        <p class="text-sm font-normal max-w-1/2 text-gray-500">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
