<script setup>
import data from "../data/productData";
import { ref } from "vue";
const current = ref(1);
</script>
<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="item in data"
      :key="item.id"
      class="flex p-6 justify-between items-center rounded-xl bg-white transition duration-300 ease-linear shadowCus"
    >
      <div class="w-40 h-40 rounded-sm border flex justify-center items-center">
        <img v-if="item.img" :src="item.img" :alt="item.name" />
        <icon v-else name="ser_backet" is-svg class="w-32 h-32"></icon>
      </div>

      <div class="flex flex-col gap-10 p-2 flex-1">
        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2 items-center">
            <icon name="ser_house.png" class="w-5 h-5" />
            <span class="text-[#42AB44] text-md">Seller: {{ item.seller }}</span>
          </div>
          <div class="flex gap-2 items-center">
            <icon name="ser_location.png" class="w-4 h-4" />
            <span class="text-md">Sales region: Tashkent</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col border-l p-4 w-1/4 h-full">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <p v-if="item.price">{{ item.price }}</p>
            <div v-else class="flex flex-col">
              <span class="text-lg font-semibold">Negotiable</span>
              <span class="text-[10px] font-light">Price</span>
            </div>
          </div>
          <div
            class="w-10 h-10 flex justify-center items-center rounded-full border transition duration-300 ease-linear cursor-pointer hover:border-gray-400"
          >
            <icon name="heart300" is-svg class="w-4 h-4"></icon>
          </div>
        </div>
        <div class="flex flex-col gap-4 mt-6 px-10">
          <a-button type="primary" shape="round" :size="size">Chat</a-button>
          <a-button shape="round" :size="size">Call me back</a-button>
        </div>
      </div>
    </div>
    <a-pagination v-model:current="current" :total="data.length" />
  </div>
</template>
<style scoped>
.shadowCus:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
</style>
