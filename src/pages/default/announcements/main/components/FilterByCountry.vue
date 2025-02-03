<script setup>
import { ref } from "vue";
const isCountry = ref(true);
const checkCountry = ref(null);
const data = [
  {
    id: 1,
    value: 1,
    label: "Tashkent",
    total: 432,
    disabled: false,
  },
  {
    id: 2,
    value: 2,
    label: "Baku",
    total: 44,
    disabled: true,
  },
  {
    id: 3,
    value: 3,
    label: "Samarkand",
    total: 234,
    disabled: false,
  },
  {
    id: 4,
    value: 4,
    label: "Andijan",
    total: 12,
    disabled: false,
  },
  {
    id: 14,
    value: 14,
    label: "Namangan",
    total: 15,
    disabled: true,
  },
  {
    id: 5,
    value: 5,
    label: "Fergana",
    total: 22,
    disabled: false,
  },
  {
    id: 6,
    value: 6,
    label: "Nukus",
    total: 66,
    disabled: false,
  },
  { id: 7, value: 7, label: "Qashqadaryo", total: 63, disabled: false },
  { id: 8, value: 8, label: "Jizzakh", total: 123, disabled: false },
  { id: 9, value: 9, label: "Sirdaryo", total: 123, disabled: false },
  { id: 10, value: 10, label: "Surxondaryo", total: 123, disabled: false },
  { id: 11, value: 11, label: "Navoiy", total: 63, disabled: true },
  { id: 12, value: 12, label: "Qoraqalpog'iston", total: 8, disabled: true },
  { id: 13, value: 13, label: "Xorazm", total: 32, disabled: false },
];
</script>
<template>
  <div class="flex flex-col gap-2 w-full py-6">
    <div class="flex justify-between w-full cursor-pointer" @click="isCountry = !isCountry">
      <h5 class="font-semibold text-sm">Country of origin</h5>
      <icon name="up-arrow_black" is-svg class="w-3 h-4 transform transition duration-300 ease-linear" :class="{ 'rotate-180': !isCountry }" />
    </div>
    <a-checkbox-group v-if="isCountry" v-model:value="checkCountry" :options="data" :disabled="data.disabled" class="mt-2 flex flex-col gap-2 w-full">
      <template #label="{ label, total }">
        <div class="left-0">
          <span>{{ label }}</span>
          &nbsp;
          <span class="text-sm text-zinc-500">{{ total }}</span>
        </div>
      </template>
    </a-checkbox-group>
  </div>
</template>
