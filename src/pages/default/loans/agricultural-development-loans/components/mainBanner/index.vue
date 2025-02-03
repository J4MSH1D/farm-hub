<script setup>
const banner = {
  title: "Льготное кредитование сельхозпроизводителей",
  subtitle:
    "Сельскохозяйственные товаропроизводители могут получить краткосрочный или инвестиционный кредит по льготной ставке в одном из банков, уполномоченных Минсельхозом России",
  background: "https://s56442.cdn.ngenix.net/img/1440/500/resize/rshb/contentlanding/Web.png",
};
</script>

<template>
  <div class="container pb-8">
    <div class="relative rounded-b-3xl overflow-hidden">
      <img :src="banner.background" alt="" class="absolute inset-0 h-full w-full object-cover" />

      <div class="relative py-14 px-10 max-w-[640px]">
        <h2 class="text-3xl text-white font-semibold">{{ banner.title }}</h2>
        <p class="text-white mt-4 leading-[1.7]">
          {{ banner.subtitle }}
        </p>
        <button class="text-white text-sm border-2 border-gray-200 rounded-full py-3 px-6 mt-20 hover:(border-gray-300)">Оставить заявку</button>
      </div>
    </div>
  </div>
</template>
