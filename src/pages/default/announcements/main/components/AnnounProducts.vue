<script setup>
import { ref } from "vue";
import data from "../data/productData";
const current = ref(1);
import { convertDate } from "@/utils/dateFormatter";
</script>
<template>
  <div class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
    <div
      v-for="item in data"
      :key="item.id"
      class="flex flex-col gap-4 justify-between cursor-pointer p-4 rounded-xl bg-white .cus-shadow transition duration-300 ease-linear hover:shadow-xl"
    >
      <div class="flex flex-col">
        <img v-if="item.img" :src="item.img" :alt="item.name" class="w-full h-48 object-cover rounded-xl" />
        <img v-else src="https://svoefermerstvo.ru/assets/bulletins/placeholder.svg" alt="no image" class="w-full h-48 object-cover rounded-xl" />
        <h4 class="text-md font-medium mt-2 line-clamp-2">{{ item.name }}</h4>
        <p class="text-sm text-gray-500 mt-1 line-clamp-2">{{ item.title }}</p>
      </div>
      <div>
        <div class="flex justify-between items-center">
          <p class="text-lg font-semibold">{{ Number(item.price).toLocaleString() }} 000 UZS</p>
          <icon name="heart300" is-svg-raw class="h-4 w-4 cursor-pointer transition duration-300 ease-linear hover:fill-green-500" />
        </div>
        <p class="text-sm text-gray-400">{{ convertDate(item.date, "cus", "ru") }}</p>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-6">
    <a-pagination v-model:current="current" :total="data.length" />
  </div>
</template>
