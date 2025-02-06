<script setup>
import { computed, inject } from "vue";
import { leasings } from "./data";
import { useTranslation } from "i18next-vue";

const filter = inject("filter");
const { i18next } = useTranslation();
const locale = computed(() => i18next.language);

const filteredLeasings = computed(() => leasings);

function getMonthlyPayment(item) {
  return Number((getTotalPayment(item) / item.duration.to).toFixed());
}

function getTotalPayment(item) {
  return Number((filter.amount + (item.interest * filter.amount) / 100).toFixed());
}
</script>

<template>
  <div class="container py-8">
    <ul>
      <li v-for="item in filteredLeasings" class="flex justify-between bg-white rounded-xl px-8 py-7 mb-5">
        <div class="grid grid-cols-[40%,30%,30%] gap-5 w-full px-5">
          <div>
            <icon :name="item.logo" is-svg class="h-12 max-w-24 object-contain" v-if="item.logo" />
            <h3 class="text-lg text-zinc-900 font-medium mt-2">{{ item.company }}</h3>
          </div>
          <!-- credit-info -->
          <ul class="flex flex-col gap-3" style="list-style-type: disc">
            <li v-for="child in item.info" class="credit-info-item text-sm text-zinc-900">
              {{ child[locale] }}
            </li>
          </ul>

          <!-- credit-payment -->
          <div>
            <div>
              <span class="text-xs text-zinc-900">{{ $t("Ежемесячный платёж*") }}</span>
              <p class="text-2xl text-zinc-900 mt-2"><span class="text-sm">от</span> {{ getMonthlyPayment(item).toLocaleString() }} сум</p>
            </div>
            <div class="mt-3">
              <span class="text-xs text-zinc-900">{{ $t("Общая сумма выплат*") }}</span>
              <p class="text-2xl text-zinc-900 mt-2"><span class="text-sm">от</span> {{ getTotalPayment(item).toLocaleString() }} сум</p>
            </div>
          </div>
        </div>

        <!-- buttons -->
        <div class="flex flex-col justify-center gap-4 border-l border-gray-200 pl-20">
          <a :href="item.link" target="_blank" class="text-center w-[200px] py-3 px-4 rounded-full text-sm text-white font-medium bg-green-600"
            >Оформить кредит</a
          >
          <button class="w-[200px] py-3 px-4 rounded-full text-sm text-zinc-900 font-medium border-2 border-gray-200">{{ $t("Подробнее") }}</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.credit-info-item {
  text-indent: -5px;
}
.credit-info-item::marker {
  color: #42ab44;
  font-size: 20px;
  line-height: 0;
}
</style>
