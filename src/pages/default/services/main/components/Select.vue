<script setup>
import { ref } from "vue";

const value1 = ref("1");
const searchInput = ref("");
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
  <div class="flex items-center justify-end gap-3 py-2">
    <a-input-search class="max-w-[300px]" placeholder="Искать" v-model="searchInput" />
    <a-select ref="select" v-model:value="value1" style="width: 200px" :options="options1" @focus="focus" @change="handleChange"></a-select>
  </div>
</template>

<style>
.ant-input-search-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
