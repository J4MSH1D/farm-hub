<script setup>
const creditSteps = [
  {
    title: "Получить кредит для бизнеса за 3 дня",
    description: "Упрощённая система оценки платёжеспособности ИП при заявке на кредит до 10 млн ₽",
  },
  {
    title: "Заполните онлайн-заявку",
    description: "Сотрудник банка свяжеться с вами для уточнения деталей",
  },
  {
    title: "Предоставьте документы",
    description: "На получение ответа от банка уйдет от 3 рабочих дней",
  },
];
</script>

<template>
  <div class="container py-8">
    <h2 class="text-2xl text-zinc-900 font-medium">Получить кредит для бизнеса за 3 дня</h2>
    <p class="text-zinc-500 mt-6">Упрощённая система оценки платёжеспособности ИП при заявке на кредит до 10 млн ₽</p>

    <ul class="grid grid-cols-3 justify-items-center mt-10">
      <li v-for="(item, index) in creditSteps" class="px-4">
        <div class="relative">
          <div
            class="mx-auto relative z-10 h-[100px] aspect-square flex items-center justify-center bg-white rounded-2xl text-2xl text-zinc-500 font-semibold"
          >
            <span>{{ index + 1 }}</span>
          </div>
          <div class="absolute w-full h-[2px] bg-gray-300 left-1/2 top-1/2 transform translatey1/2" v-if="index !== creditSteps.length - 1" />
          <div class="absolute w-full h-[2px] bg-gray-300 -left-1/2 top-1/2 transform translatey1/2" v-if="index !== 0" />
        </div>
        <div class="max-w-[250px]">
          <h3 class="text-lg text-zinc-900 font-semibold mt-6">{{ item.title }}</h3>
          <p class="text-sm text-zinc-500 font-light mt-3">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
