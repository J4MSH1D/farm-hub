<script setup>
import { videos } from "../data";

const handleVideo = item => {
  window.open(item.link, "_blank");
};
</script>
<template>
  <div class="flex flex-col gap-6">
    <h2 class="text-2xl font-semibold">{{ $t("Видео") }}</h2>
    <div v-for="item in videos" :key="item.id" class="grid grid-cols-4 gap-10">
      <div class="relative">
        <img :src="item.img" :alt="item.name" class="object-cover w-full h-56 rounded-2xl" />
        <icon
          name="play-white.png"
          class="w-14 h-14 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          @click="handleVideo(item)"
        />
      </div>
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
