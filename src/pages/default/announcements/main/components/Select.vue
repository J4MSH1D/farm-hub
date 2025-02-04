<script setup>
import { ref } from "vue";

const value1 = ref("1");
const options1 = ref([
  {
    value: "1",
    label: "Новые",
  },
  {
    value: "2",
    label: "Давние",
  },
  {
    value: "3",
    label: "Дороже",
  },
  {
    value: "4",
    label: "Дешевле",
  },
]);
const count = ref(123);
</script>
<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <div class="flex items-baseline gap-2">
        <h4 class="font-semibold text-xl">Все объявления: объявления</h4>
        <p class="text-sm text-gray-500">{{ count }} предложения</p>
      </div>
      <a-select ref="select" v-model:value="value1" style="width: 200px" :options="options1" @focus="focus" @change="handleChange">
        <icon name="updown" />
      </a-select>
    </div>
    <div class="flex items-center gap-2">
      <div class="flex items-center px-3 py-1 justify-between"></div>
    </div>
  </div>
</template>
