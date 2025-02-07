<script setup>
import data from "../data/servicesData";
</script>
<template>
  <div class="mt-10 flex flex-col gap-8">
    <h2 class="text-3xl font-semibold">Услуги</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
      <div v-for="item in data" :key="item" class="flex flex-col justify-between gap-6 bg-white rounded-2xl p-6 cursor-pointer">
        <h5 class="text-xl font-semibold">{{ $t(item.name) }}</h5>
        <div class="flex justify-end">
          <icon :name="item.img" class="h-32 w-auto object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>
