<template>
  <div class="container my-10 bg-white py-10 rounded-xl">
    <div class="px-10 py-10 rounded-3xl background relative z-40 overflow-hidden">
      <div class="relative z-20 text-white flex justify-between items-center">
        <div class="flex flex-col gap-2">
          <div class="text-3xl">{{ $t("home_start_title") }}</div>
          <div class="mt-2">{{ $t("home_start_description") }}</div>
        </div>
      </div>
      <div class="absolute right-0 bottom-0">
        <arrowButton color="#4481eb"></arrowButton>
      </div>
      <icon name="rocket.png" class="absolute right-[10%] top-0 h-full z-10" />
      <icon name="home_start_1" is-svg class="absolute right-20 top-0 h-full object-cover z-0" />
      <icon name="home_start_2" is-svg class="absolute left-10 top-0 h-full object-cover z-0" />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: linear-gradient(to top, #4874f1 0%, #04befe 100%);
}
</style>
