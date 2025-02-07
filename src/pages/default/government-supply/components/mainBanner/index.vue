<script setup>
import Banner from "@/components/global/banner.vue";

const bannerData = {
  title: "Развитие животноводства",
  subtitle: "Финансовое решение для дехканских хозяйств и владельцам приусадебных территорий",
  link: "https://brb.uz/ru/kredity/chorvachilikni-rivojlantirish-krediti",
};
</script>

<template>
  <div class="container py-8">
    <Banner class="p-0" :background-color="$t('violet')">
      <div class="relative rounded-b-3xl overflow-hidden">
        <div class="relative">
          <div class="py-14 px-10 max-w-[640px]">
            <h2 class="text-3xl text-white font-semibold">{{ $t(bannerData.title) }}</h2>
            <p class="text-white mt-4 leading-[1.7]">
              {{ $t(bannerData.subtitle) }}
            </p>
          </div>
          <div class="w-full bg-white/10 px-10 py-6 mt-10" style="backdrop-filter: blur(40px)">
            <a
              :href="bannerData.link"
              target="_blank"
              class="inline-block text-white text-sm border-2 border-gray-200 rounded-full py-3 px-6 hover:(border-gray-300)"
              >{{ $t("Оставить заявку") }}</a
            >
          </div>
        </div>
      </div>
    </Banner>
  </div>
</template>
