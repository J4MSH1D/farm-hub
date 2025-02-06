<script setup>
import { inject } from "vue";

const filter = inject("filter");

const minAmount = 100000;
const maxAmount = 50000000;
const creditPurposeOptions = {
  all: "Все варианты",
  agriculture_equipment: "Покупка сельхозтехники и оборудования",
  land_acquisition: "Приобретение земель с/х назначения",
  construction_modernization: "Строительство новых и модернизация с/х предприятий",
  processing_storage: "Создание предприятий переработки, хранения с/х продукции",
  seasonal_work: "Проведение сезонных работ (покупка семян, СЗР, ГСМ, кормов)",
  breeding_livestock: "Приобретение племенного и товарного молодняка с/х животных",
  fattening_livestock: "Приобретение молодняка сельхозживотных на откорм",
  fish_stock: "Приобретение рыбопосадочного материала",
  loan_refinancing: "Рефинансирование кредитов других банков",
};
</script>

<template>
  <div class="container py-8">
    <div class="bg-white rounded-xl p-12">
      <h2 class="text-2xl text-zinc-900 font-medium">{{ $t("Подобрать лизинг по параметрам") }}</h2>
      <p class="text-md text-zinc-500 mt-3">{{ $t("Итоговый расчёт зависит от типа лизинга, целей, финансового состояния заёмщика") }}</p>

      <!-- Main Content -->
      <div class="max-w-[1100px] grid grid-cols-2 justify-center mx-auto mt-12">
        <div class="border-r border-gray-200 px-10">
          <!-- Kredit summasi (input) -->
          <div>
            <div class="border border-gray-300 rounded rounded-[12px] px-4 mt-2">
              <div class="flex items-center gap-5">
                <span class="text-sm text-zinc-900 py-2 whitespace-nowrap">{{ $t("Желаемая сумма лизинга, UZS") }}</span>
                <input
                  type="text"
                  v-model="filter.amount"
                  :placeholder="$t('Введите сумму')"
                  class="font-medium outline-none py-2 text-right min-w-[200px]"
                />
              </div>
              <div class="relative">
                <a-slider
                  v-model:value="filter.amount"
                  :min="minAmount"
                  :max="maxAmount"
                  class="absolute bottom-0 w-full m-0 transform translate-y-1/2"
                />
              </div>
            </div>
            <!-- info -->
            <p class="text-xs text-zinc-500 mt-3">
              {{ $t("От") }} {{ minAmount.toLocaleString() }} {{ $t("до") }} {{ maxAmount.toLocaleString() }} {{ $t("сумов") }}
            </p>
          </div>

          <!-- Kredit Maqsadi (input) -->
          <div class="mt-4">
            <span class="text-xs text-zinc-500">{{ $t("Цель лизинга") }}</span>
            <a-select class="w-full mt-1" v-model:value="filter.purpose" :placeholder="$t('Цель лизинга')">
              <a-select-option v-for="(item, key) in creditPurposeOptions" :value="key">{{ t(item) }}</a-select-option>
            </a-select>
            <!-- info -->
            <p class="text-xs text-zinc-500 mt-3">
              * {{ $t("Предложение носит информационный характер и не является публичной офертой. Все расчёты предварительные.") }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-5 px-10">
          <a-checkbox v-model:checked="filter.noCollateral">{{ $t("Без залога") }}</a-checkbox>
          <a-checkbox v-model:checked="filter.preferentialRate">{{ $t("Льготная ставка") }}</a-checkbox>
          <a-checkbox v-model:checked="filter.simplifiedDocuments">{{ $t("Упрощённый список документов") }}</a-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
