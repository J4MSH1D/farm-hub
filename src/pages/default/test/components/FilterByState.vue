<script setup>
import { ref } from "vue";
const isState = ref(true);
const stateValue = ref(1);
const data = [
  {
    id: 1,
    value: 1,
    label: "New",
    total: 3758,
  },
  {
    id: 2,
    value: 2,
    label: "Used",
    total: 866,
  },
  {
    id: 3,
    value: 3,
    label: "All ads",
    total: 4624,
  },
];
</script>
<template>
  <div class="flex flex-col gap-2 w-full py-6">
    <div class="flex justify-between w-full cursor-pointer" @click="isState = !isState">
      <h5 class="font-semibold text-sm">State</h5>
      <icon name="up-arrow_black" is-svg class="w-3 h-4 transform transition duration-300 ease-linear" :class="{ 'rotate-180': !isState }" />
    </div>
    <a-radio-group v-if="isState" v-model:value="stateValue" class="flex flex-col gap-2">
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
