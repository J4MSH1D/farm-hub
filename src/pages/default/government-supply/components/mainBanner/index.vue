<script setup>
const banner = {
  title: "Развитие животноводства",
  subtitle: "Идеальное финансовое решение для малого бизнеса и фермерских хозяйств!",
  background: "https://s56442.cdn.ngenix.net/img/1440/500/resize/rshb/contentlanding/Web.png",
  link: "https://brb.uz/ru/kredity/chorvachilikni-rivojlantirish-krediti",
};
</script>

<template>
  <div class="container pb-8">
    <div class="relative rounded-b-3xl overflow-hidden">
      <img :src="banner.background" alt="" class="absolute inset-0 h-full w-full object-cover" />

      <div class="relative">
        <div class="py-14 px-10 max-w-[640px]">
          <h2 class="text-3xl text-white font-semibold">{{ banner.title }}</h2>
          <p class="text-white mt-4 leading-[1.7]">
            {{ banner.subtitle }}
          </p>
        </div>
        <div class="w-full bg-white/10 px-10 py-6 mt-10" style="backdrop-filter: blur(40px)">
          <a
            :href="banner.link"
            target="_blank"
            class="inline-block text-white text-sm border-2 border-gray-200 rounded-full py-3 px-6 hover:(border-gray-300)"
            >Оставить заявку</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
