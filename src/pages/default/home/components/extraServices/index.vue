<template>
  <div class="container my-10 bg-white py-10 rounded-xl grid grid-cols-2 gap-x-5 text-white">
    <div class="px-8 py-10 rounded-4xl background1 relative">
      <div class="flex justify-between items-start relative z-10">
        <div>
          <div class="text-2xl">Объявления</div>
          <div class="mt-2">Покупайте товары и услуги для сельского хозяйства и размещайте предложения на доске частных объявлений</div>
        </div>
        <arrowButton />
      </div>
      <icon name="gradient" is-svg class="absolute right-0 top-0 h-full z-0" />
    </div>
    <div class="px-8 py-10 rounded-4xl background2 relative">
      <div class="flex justify-between items-start relative z-10">
        <div>
          <div class="text-2xl">Бесплатный поиск сотрудников</div>
          <div class="mt-2">Бесплатный поиск сотрудников в сельскохозяйственной отрасли</div>
        </div>
        <arrowButton color="#6F75E2" />
      </div>
      <icon name="gradient" is-svg class="absolute right-0 top-0 h-full z-0" />
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
