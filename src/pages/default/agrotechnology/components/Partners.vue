<script setup>
const data = [
  "/images/partnyors/1.png",
  "/images/partnyors/2.png",
  "/images/partnyors/3.png",
  "/images/partnyors/4.png",
  "/images/partnyors/5.png",
  "/images/partnyors/6.png",
];
</script>
<template>
  <div class="flex flex-col gap-6 my-6">
    <h2 class="text-3xl font-semibold">Партнеры</h2>
    <div class="flex justify-between w-full gap-6">
      <div v-for="(item, index) in data" :key="item" class="w-full h-32 bg-white rounded-3xl flex items-center justify-center rounded-xl">
        <img :src="item" :alt="`partnyor ${index + 1}`" class="w-full h-full object-cover rounded-xl p-4" />
      </div>
    </div>
  </div>
</template>
