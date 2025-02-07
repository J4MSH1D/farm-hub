<template>
  <div class="container my-8 bg-white rounded-xl p-10">
    <div class="grid grid-cols-2 items-center">
      <div class="flex flex-col gap-6">
        <h4 class="text-2xl font-semibold">{{ $t("Как разместить объявление о продаже") }}</h4>
        <div class="flex flex-col relative gap-10">
          <div class="flex items-center gap-4 z-10">
            <span class="min-w-14 h-14 rounded-2xl bg-[#f6f8fa] flex items-center justify-center font-semibold text-lg">1</span>
            <p class="text-lg">{{ $t("Пройти регистрацию на сервисе") }}</p>
          </div>
          <div class="flex gap-4 items-center z-10">
            <div class="min-w-14 h-14 rounded-2xl bg-[#f6f8fa] flex items-center justify-center font-semibold text-lg">2</div>
            <p class="text-lg">{{ $t("Опубликовать объявление через личный кабинет") }}</p>
          </div>
          <div class="h-full w-2 bg-[#f6f8fa] absolute left-6"></div>
        </div>
      </div>
      <icon name="bank-banner-3.png" class="w-80" />
    </div>
  </div>
</template>
