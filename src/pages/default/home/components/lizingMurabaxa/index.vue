<template>
  <div class="container p-0 mb-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <div class="flex flex-col gap-3 bg-white rounded-3xl p-6 border-2">
      <h2 class="text-xl">{{ $t("Будьте в курсе!") }}</h2>
      <p class="text-sm text-gray-500">{{ $t("Подпишитесь на рассылку, чтобы получать информацию о выгодных акциях и актуальных новостях") }}</p>
      <div class="flex justify-between gap-6">
        <a-input-search :placeholder="$t('Ваш e-mail *')" />
        <a-button type="primary" class="">{{ $t("Подписаться") }}</a-button>
      </div>
    </div>
    <bannerSmall color="#468f46" leafColor="#75d241" cusClass="px-10 py-12" link="https://taibaleasing.com/operativnyj-lizing/">
      <div class="relative flex flex-col gap-10">
        <div class="flex flex-col gap-4 justify-evenly h-full text-white">
          <p class="text-xl">{{ $t("Лизинг Мурабаха") }}</p>
          <p class="text-sm">{{ $t("Получение лизинга на выгодных условиях") }}</p>
        </div>
        <img src="@/assets/images/png/home_tractor.png" alt="banner image" class="w-40 absolute right-10 -top-8" />
      </div>
    </bannerSmall>
  </div>
</template>
