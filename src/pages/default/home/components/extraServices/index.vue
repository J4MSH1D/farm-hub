<template>
  <div class="container my-10 bg-white py-10 rounded-xl grid grid-cols-2 gap-x-5 text-white">
    <div class="px-8 py-10 rounded-4xl bg-[#3cca2f] relative">
      <div class="flex justify-between items-start relative z-10">
        <div>
          <div class="text-2xl">{{ $t("Объявления") }}</div>
          <div class="mt-2 max-w-2/3">
            {{ $t("Покупайте товары и услуги для сельского хозяйства и размещайте предложения на доске частных объявлений") }}
          </div>
        </div>
      </div>
      <div class="absolute right-0 bottom-0 z-20">
        <arrowButton />
      </div>
      <icon name="home_extra_1.png" class="absolute right-10 top-0 h-full z-20" />
      <icon name="home_banner_11" is-svg class="absolute right-0 top-0 h-full z-0" />
      <icon name="home_banner_12" is-svg class="absolute left-10 top-0 h-full z-0" />
    </div>
    <div class="px-8 py-10 rounded-4xl bg-[#8b3bda] relative">
      <div class="flex justify-between items-start relative z-10">
        <div>
          <div class="text-2xl">{{ $t("Бесплатный поиск сотрудников") }}</div>
          <div class="mt-2 max-w-2/3">{{ $t("Бесплатный поиск сотрудников в сельскохозяйственной отрасли") }}</div>
        </div>
      </div>
      <div class="absolute right-0 bottom-0 z-20">
        <arrowButton color="#6F75E2" />
      </div>
      <icon name="home_extra_2.png" class="absolute right-10 top-0 h-full z-20" />
      <icon name="home_banner_31" is-svg class="absolute right-0 top-0 h-full z-0" />
      <icon name="home_banner_32" is-svg class="absolute left-10 top-0 h-full z-0" />
    </div>
  </div>
</template>

<style scoped>
.background1 {
  background: #1d976c; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #93f9b9, #1d976c); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #93f9b9, #1d976c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.background2 {
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8f94fb, #4e54c8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
