<template>
  <div class="container my-10 bg-white py-10 rounded-xl">
    <div class="px-10 py-10 rounded-3xl background relative">
      <div class="relative z-20 text-white flex justify-between items-center">
        <div class="flex flex-col gap-2">
          <div class="text-3xl">{{ $t("Господдержка для фермеров") }}</div>
          <div class="mt-2 max-w-4/5">
            {{
              $t(
                "Узнайте о льготах и субсидиях от государства для малого и среднего фермерского бизнеса (заменить на:Информационная система рассмотрения вопросов предоставления субсидий производителям сельскохозяйственной продукции."
              )
            }}
          </div>
        </div>
      </div>
      <div class="absolute right-0 bottom-0">
        <arrowButton color="#f83600"></arrowButton>
      </div>
      <icon name="support_farmers.png" class="absolute right-[10%] top-0 h-full z-10" />
      <icon name="home_goverment_1" is-svg class="absolute right-20 top-0 h-full object-cover z-0" />
      <icon name="home_goverment_2" is-svg class="absolute left-10 top-0 h-full object-cover z-0" />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: linear-gradient(to right, #f67021 0%, #f78d42 100%);
}
</style>
