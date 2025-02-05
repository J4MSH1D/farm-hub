<script setup>
const infoTovare = [
  {
    type: "input",
    title: "Наименование товара",
    placeholder: ""
  },
  {
    type: "select",
    title: "Наименование товара",
    placeholder: ""
  },
  {
    type: "input",
    title: "Наименование товара",
    placeholder: ""
  },
  {
    type: "input",
    title: "Наименование товара",
    placeholder: ""
  },
];
</script>
<template>
  <div class="flex flex-col mt-6">
    <h2 class="text-2xl font-semibold">{{ $t("Добавить товар") }}</h2>
    <h3 class="text-md font-medium text-green-500">{{ $t("Информация о товаре") }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="flex flex-col gap-2">
        <div>
          <h5></h5>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
