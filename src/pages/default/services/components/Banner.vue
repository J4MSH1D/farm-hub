<template>
  <div class="relative mt-10 overflow-hidden rounded-3xl">
    <banner backgroundColor="services">
      <div class="relative z-20 flex flex-col gap-4 min-h-[220px]">
        <h2 class="text-xl lg:text-3xl font-medium text-white leading-10">{{ $t("Ваше хозяйство — наша забота") }}</h2>
        <p class="text-lg text-white">{{ $t("Полный спектр услуг для вашего участка, оптимизируйте работу своего хозяйства с нашими услугами") }}</p>
      </div>
      <a-button class="text-[#2C6E4A] !rounded-tl-3xl !rounded-br-3xl !rounded-bl-none !rounded-tr-none ml-10" size="large">{{
        $t("Разместить услугу")
      }}</a-button>
    </banner>
    <icon name="services-banner-1.png" class="absolute right-20 top-0 h-full z-10" />
    <!-- <div class="absolute h-[90px] w-full z-10 px-20 bottom-0 pt-5 rounded-b-2xl">
      <div class="absolute bg-white/20 blur-md inset-0" style="backdrop-filter: blur(8px)"></div>
      <div class="relative z-20"></div>
    </div> -->
  </div>
</template>
