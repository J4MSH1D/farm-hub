<script setup>
const leasingProccess = [
  "Выберите новую технику или оборудование",
  "Заполните заявку на лизинг",
  "Предоставьте комплект документов",
  "Подпишите договор лизинга",
  "Получите технику в лизинг с последующим выкупом в собственность",
];

const leasingItems = ["Сельскохозяйственная техника", "Автобусы", "Грузовой транспорт", "Легковой автотранспорт", "Самоходные машины"];
</script>

<template>
  <div class="container py-8 pt-0">
    <div class="flex justify-center gap-14 bg-white rounded-4xl p-14">
      <!-- Как оформить лизинг -->
      <div class="max-w-[425px]">
        <h3 class="text-2xl text-zinc-900">Как оформить лизинг</h3>
        <ul class="relative flex flex-col gap-8 mt-10">
          <li v-for="(item, index) in leasingProccess" :key="item" class="relative z-10 flex items-center gap-5">
            <div class="h-14 min-w-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl text-zinc-500 font-semibold">
              {{ index + 1 }}
            </div>
            <p class="text-zinc-900 font-light">{{ item }}</p>
          </li>

          <hr class="absolute border-0 h-full w-1 left-7 transform -translate-x-1/2 bg-gray-100" />
        </ul>
      </div>

      <!-- Предметы лизинга -->
      <div class="max-w-[425px]">
        <h3 class="text-2xl text-zinc-900">Предметы лизинга</h3>
        <ul class="relative flex flex-col gap-8 mt-10">
          <li v-for="item in leasingItems" :key="item" class="relative z-10 flex items-center gap-5">
            <div class="h-14 min-w-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl text-green-500">✓</div>
            <p class="text-zinc-900 font-light">{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
