<script setup>
import data from "../data/listData";
</script>
<template>
  <div class="bg-white p-4 rounded-xl flex flex-col gap-2">
    <div v-for="item in data" :key="item.id" class="group relative">
      <div
        class="absolute inset-0 h-full w-full bg-gray-200 transform scale-50 rounded-full duration-300 opacity-0 pointer-events-none ease-in group-hover:(scale-100 opacity-100)"
        style="transition-timing-function: cubic-bezier(0.27, 0.63, 0.4, 1.14)"
      />
      <div class="relative flex items-center justify-between gap-2 p-1 pr-2 cursor-pointer rounded-full max-w-64">
        <div class="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center duration-300 ease-out group-hover:bg-white">
          <img :src="item.icon" class="w-5 h-5" />
        </div>
        <div class="flex-1 flex justify-between items-center text-sm">
          {{ item.title }}
        </div>
        <icon name="up-arrow" is-svg class="transform rotate-90 w-4 h-4" />
      </div>
    </div>
  </div>
</template>
