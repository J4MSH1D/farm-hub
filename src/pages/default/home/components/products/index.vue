<script setup>
import links from "./data";
</script>
<template>
  <div class="my-10 container bg-white py-10 rounded-xl">
    <div class="text-3xl font-medium">{{ $t("home_product_title") }}</div>
    <div class="mt-5 text-xl text-gray-400 max-w-[700px]">{{ $t("home_product_description") }}</div>
    <div class="mt-5 grid grid-cols-22 gap-5">
      <div
        v-for="link in links"
        class="bg-[#F6F7F8] rounded-4xl h-[130px] p-5 relative overflow-hidden cursor-pointer"
        :style="{ gridColumn: `span ${link.span} / span ${link.span}` }"
      >
        <div class="z-10">{{ $t(`${link.name}`) }}</div>
        <icon :name="link.iconName" class="absolute -right-2 -bottom-5 w-28 h-28 h-full z-10" />
      </div>
      <div class="bg-[#4AB75F] rounded-4xl col-span-4 !text-white p-5 cursor-pointer">
        <div>{{ $t("Все товары") }}</div>
        <div class="flex justify-end mt-10">
          <ArrowButton />
        </div>
      </div>
    </div>
  </div>
</template>
