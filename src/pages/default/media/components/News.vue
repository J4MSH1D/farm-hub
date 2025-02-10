<script setup>
import { news } from "../data";
</script>
<template>
  <div class="flex flex-col gap-6">
    <h2 class="text-2xl font-semibold">{{ $t("Новости") }}</h2>
    <div v-for="item in news" :key="item.id" class="grid grid-cols-4 gap-10">
      <img :src="item.img" :alt="item.name" class="object-cover w-full h-56 rounded-2xl" />
      <div class="col-span-3 flex flex-col justify-around">
        <div class="flex flex-col gap-4">
          <span class="text-lg font-semibold"> {{ $t(item.name) }} </span>
          <p class="text-gray-500 text-md leading-6">{{ $t(item.title) }}</p>
        </div>
        <div class="flex justify-between">
          <span>{{ $t(item.date) }}</span>

          <a :href="item.link" target="_blank">{{ $t("Подробнее") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
