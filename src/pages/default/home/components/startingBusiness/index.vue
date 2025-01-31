<template>
  <div class="container my-10 bg-white py-10 rounded-xl">
    <div class="px-10 py-8 rounded-4xl background relative z-40 overflow-hidden">
      <div class="relative z-20 text-white flex justify-between items-center">
        <div>
          <div class="text-3xl">Как начать свой бизнес с нуля</div>
          <div class="mt-2">Бизнес-план по выращиванию фруктов и овощей</div>
        </div>
        <div>
          <arrowButton color="#4481eb"></arrowButton>
        </div>
      </div>
      <icon name="rocket.png" class="absolute right-[20%] top-[-10px] h-[150%] z-10" />
      <icon name="gradient" is-svg class="absolute right-0 top-0 w-1/2 h-full object-cover z-0" />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
}
</style>
