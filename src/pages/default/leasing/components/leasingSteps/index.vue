<script setup>
const leasingProccess = [
  "Выберите технику",
  "Заполните заявку на лизинговое финансирование",
  "Оператор лизинговой компании свяжется с вами",
  "Подпишите договор",
  "Получите технику в лизинг с последующим выкупом",
];
</script>

<template>
  <div class="container py-8">
    <!-- Как оформить лизинг -->
    <h3 class="text-2xl font-semibold text-zinc-900 text-center">{{ $t("Как оформить лизинг") }}</h3>
    <ul class="relative flex justify-between gap-8 mt-10">
      <li v-for="(item, index) in leasingProccess" :key="item" class="relative flex-1 z-10 flex flex-col items-center gap-5">
        <div class="h-16 min-w-16 bg-white rounded-2xl flex items-center justify-center text-2xl text-zinc-500 font-semibold">
          {{ index + 1 }}
        </div>
        <p class="text-zinc-900 font-medium text-center leading-[1.6]">{{ $t(item) }}</p>
      </li>
    </ul>
  </div>
</template>
