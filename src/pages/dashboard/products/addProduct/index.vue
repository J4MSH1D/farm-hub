<script setup>
import { reactive } from "vue";

const infoProduct_1 = [
  {
    type: "input",
    title: "Наименование товара",
    placeholder: "",
    data: "nameProduct",
  },
  {
    type: "select",
    title: "Наименование сорта",
    placeholder: "Выбрат",
    data: "nameSortProduct",
    options: [
      {
        value: 1,
        label: "Sort 1",
      },
      {
        value: 2,
        label: "Sort 2",
      },
      {
        value: 3,
        label: "Sort 3",
      },
    ],
  },
  {
    type: "input",
    title: "Марка товара",
    placeholder: "",
    data: "markaProduct",
  },
  {
    type: "input",
    title: "Производитель",
    placeholder: "",
    data: "manProduct",
  },
];

const infoProduct_2 = [
  {
    type: "select",
    title: "Наименование категорию",
    placeholder: "Выбрат",
    data: "nameSortProduct",
    options: [
      {
        value: 1,
        label: "Sort 1",
      },
      {
        value: 2,
        label: "Sort 2",
      },
      {
        value: 3,
        label: "Sort 3",
      },
    ],
  },
  {
    type: "select",
    title: "Наименование сорта",
    placeholder: "Выбрат",
    data: "nameSortProduct",
    options: [
      {
        value: 1,
        label: "Sort 1",
      },
      {
        value: 2,
        label: "Sort 2",
      },
      {
        value: 3,
        label: "Sort 3",
      },
    ],
  },
  {
    type: "select",
    title: "Наименование сорта",
    placeholder: "Выбрат",
    data: "nameSortProduct",
    options: [
      {
        value: 1,
        label: "Sort 1",
      },
      {
        value: 2,
        label: "Sort 2",
      },
      {
        value: 3,
        label: "Sort 3",
      },
    ],
  },
  {
    type: "select",
    title: "Наименование сорта",
    placeholder: "Выбрат",
    data: "nameSortProduct",
    options: [
      {
        value: 1,
        label: "Sort 1",
      },
      {
        value: 2,
        label: "Sort 2",
      },
      {
        value: 3,
        label: "Sort 3",
      },
    ],
  },
];

const data = reactive({
  nameProduct: "",
  nameSortProduct: "",
  markaProduct: "",
  manProduct: "",
});
</script>
<template>
  <div class="flex flex-col mt-6">
    <h2 class="text-2xl font-semibold">{{ $t("Добавить товар") }}</h2>
    <h3 class="text-md font-medium text-green-500 py-2">{{ $t("Информация о товаре") }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="flex flex-col gap-4">
        <div v-for="(item, index) in infoProduct_1" :key="index">
          <h5>{{ item.title }}</h5>
          <a-input v-if="item.type === 'input'" v-model:value="data[item.data]" :placeholder="item.placeholder" />
          <a-select
            v-else-if="item.type === 'select'"
            :ref="item.data"
            v-model:value="data[item.data]"
            style="width: 100%"
            :options="item.options"
            :place="item.placeholder"
            @focus="focus"
            @change="handleChange"
          ></a-select>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
