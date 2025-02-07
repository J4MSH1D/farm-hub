<script setup>
const supportList = [
  {
    title: "Финансовая поддержка для роста",
    description: "Финансовые ресурсы, которые можно использовать для расширения и улучшения бизнес-процессов",
    image: "support-goals-icon1.png",
  },
  {
    title: "Решение временных финансовых трудностей",
    description: "Урегулирование задолженности или покрытие расходов в периоды временного снижения объема продаж",
    image: "support-goals-icon2.png",
  },
  {
    title: "Построение кредитной истории и репутации",
    description: "Регулярное и успешное погашение кредита помогает бизнесу создавать положительную кредитную историю",
    image: "support-goals-icon3.png",
  },
];
</script>

<template>
  <div class="container py-8">
    <h2 class="text-3xl text-zinc-900 text-center font-medium">{{ $t("Поддержим ваши цели") }}</h2>

    <ul class="mt-12 grid grid-cols-3 gap-5 justify-items-center">
      <li v-for="item in supportList" :key="item.title" class="max-w-[350px] flex flex-col items-center">
        <icon :name="$t(item.image)" alt="" class="h-[100px] aspect-square" />
        <h3 class="text-xl text-zinc-900 text-center font-semibold mt-5">{{ $t(item.title) }}</h3>
        <p class="text-sm text-zinc-500 text-center mt-4">{{ $t(item.description) }}</p>
      </li>
    </ul>
  </div>
</template>
