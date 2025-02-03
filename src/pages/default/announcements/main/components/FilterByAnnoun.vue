<script setup>
import { ref } from "vue";
const isAnnoun = ref(true);
const annoounValue = ref(1);
const data = [
  {
    id: 1,
    value: 1,
    label: "Sell",
    total: 6480,
  },
  {
    id: 2,
    value: 2,
    label: "Pass",
    total: 89,
  },
  {
    id: 3,
    value: 3,
    label: "Rent",
    total: 5,
  },
  {
    id: 4,
    value: 4,
    label: "Buy",
    total: 237,
  },
  {
    id: 5,
    value: 5,
    label: "All ads",
    total: 6811,
  },
];
</script>
<template>
  <div class="flex flex-col gap-2 w-full py-6">
    <div class="flex justify-between w-full cursor-pointer" @click="isAnnoun = !isAnnoun">
      <h5 class="font-semibold text-sm">Announcements</h5>
      <icon name="up-arrow_black" is-svg class="w-3 h-4 transform transition duration-300 ease-linear" :class="{ 'rotate-180': !isAnnoun }" />
    </div>
    <a-radio-group v-if="isAnnoun" v-model:value="annoounValue" class="flex flex-col gap-2">
      <a-radio v-for="item in data" :key="item.id" :style="radioStyle" :value="item.value"
        >{{ item.label }}
        <span class="text-sm text-zinc-500">{{ item.total }}</span>
      </a-radio>
    </a-radio-group>
  </div>
</template>
<style scoped>
.radioStyle {
  display: "flex";
  height: "30px";
  line-height: "30px";
}
</style>
