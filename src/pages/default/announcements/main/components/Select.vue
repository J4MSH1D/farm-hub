<script setup>
import { ref } from "vue";

const value1 = ref("1");
const options1 = ref([
  {
    value: "1",
    label: "By popularity",
  },
  {
    value: "2",
    label: "By price ascending",
  },
  {
    value: "3",
    label: "By price descending",
  },
]);
</script>
<template>
  <div class="flex items-center justify-end">
    <a-select ref="select" v-model:value="value1" style="width: 200px" :options="options1" @focus="focus" @change="handleChange">
      <icon name="updown" />
    </a-select>
  </div>
</template>
