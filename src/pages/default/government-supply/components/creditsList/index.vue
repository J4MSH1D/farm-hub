<script setup>
import { computed, inject } from "vue";

const filter = inject("filter");

const credits = Array(10).fill({
  id: 1,
  name: "Кредит микро АПК",
  interest: 5.417,
  payment: 0,
  duration: 18,
  minRate: null,
  partiallySecured: false,
  noCollateral: false,
  preferentialRate: 6.8,
  simplifiedDocuments: false,
  maxAmount: 30000000,
});

const filteredCredits = computed(() => {
  return credits.filter(item => {
    return (
      (filter.amount < item.maxAmount && filter.noCollateral) ||
      (filter.noCollateral === item.noCollateral && filter.preferentialRate) ||
      (filter.preferentialRate === item.preferentialRate && filter.simplifiedDocuments) ||
      filter.simplifiedDocuments === item.simplifiedDocuments
    );
  });
});

function getMonthlyPayment(item) {
  return Number((getTotalPayment(item) / item.duration).toFixed());
}

function getTotalPayment(item) {
  return Number((filter.amount + (item.interest * filter.amount) / 100).toFixed());
}
</script>

<template>
  <div class="container py-8">
    <ul>
      <li v-for="item in filteredCredits" class="flex justify-between bg-white rounded-xl p-8 mb-5">
        <div class="flex justify-between w-full">
          <h3 class="text-lg text-zinc-900 font-medium">{{ item.name }}</h3>
          <!-- credit-info -->
          <ul class="flex flex-col gap-3" style="list-style-type: disc">
            <li class="credit-info-item text-sm text-zinc-900" v-if="item.preferentialRate">Льготная ставка от {{ item.preferentialRate }}%</li>
            <li class="credit-info-item text-sm text-zinc-900" v-if="item.duration">Срок до {{ item.duration }} месяцев</li>
            <li class="credit-info-item text-sm text-zinc-900" v-if="item.simplifiedDocuments">Упрощённый список документов</li>
            <li class="credit-info-item text-sm text-zinc-900" v-if="item.minRate">Ставка от {{ item.minRate }} %</li>
            <li class="credit-info-item text-sm text-zinc-900" v-if="item.partiallySecured">Частично обеспеченный</li>
            <li class="credit-info-item text-sm text-zinc-900" v-if="item.maxAmount">до {{ Number(item.maxAmount).toLocaleString() }}</li>
          </ul>

          <!-- credit-payment -->
          <div>
            <div>
              <span class="text-xs text-zinc-900">Ежемесячный платёж*</span>
              <p class="text-2xl text-zinc-900 mt-2"><span class="text-sm">от</span> {{ getMonthlyPayment(item).toLocaleString() }} сум</p>
            </div>
            <div class="mt-3">
              <span class="text-xs text-zinc-900">Общая сумма выплат*</span>
              <p class="text-2xl text-zinc-900 mt-2"><span class="text-sm">от</span> {{ getTotalPayment(item).toLocaleString() }} сум</p>
            </div>
          </div>
        </div>

        <!-- buttons -->
        <div class="flex flex-col justify-center gap-4 border-l border-gray-200 pl-20 ml-25">
          <button class="w-[200px] py-3 px-4 rounded-full text-sm text-white font-medium bg-green-600">Оформить кредит</button>
          <button class="w-[200px] py-3 px-4 rounded-full text-sm text-zinc-900 font-medium border-2 border-gray-200">Подробнее</button>
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
