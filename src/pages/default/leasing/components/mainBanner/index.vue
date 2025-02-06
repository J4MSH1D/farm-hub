<script setup>
import Banner from "@/components/global/banner.vue";

const bannerData = {
  title: "Программы Лизинга",
  subtitle:
    "Как альтернатива кредитованию, Лизинг служит серьезным инструментом финансирования в организации и развитии вашей предпринимательской деяткльности",
  image: "leasing-banner1.png",
};
</script>

<template>
  <div class="container py-8">
    <Banner background-color="lightGreen">
      <div class="flex justify-between gap-6 flex-grow">
        <div class="max-w-[500px]">
          <button class="flex items-center gap-3">
            <div class="rounded-full bg-white border-2 border-gray-200 p-3">
              <icon name="arrow-left-small600" is-svg-raw class="w-5 h-5 fill-black" />
            </div>
            <span class="text-sm text-white">{{ $t("Вернуться") }}</span>
          </button>
          <div class="text-3xl text-white font-semibold mt-10">{{ $t(bannerData.title) }}</div>
          <div class="text-sm text-white leading-[1.8] mt-6">{{ $t(bannerData.subtitle) }}</div>
        </div>
        <!-- bannerData-image -->
        <icon :name="bannerData.image" alt="" class="h-[280px] object-contain" />
      </div>
    </Banner>
  </div>
</template>
