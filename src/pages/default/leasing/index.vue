<script setup>
import { provide, reactive } from "vue";
import { MainBanner, LeasingSteps, LeasingCalculator, LeasingForm, LeasingList } from "./components";

const filter = reactive({
  amount: 0,
  purpose: null,
  noCollateral: false,
  preferentialRate: false,
  simplifiedDocuments: false,
});

provide("filter", filter);
</script>

<template>
  <MainBanner />
  <LeasingSteps />
  <LeasingCalculator />
  <LeasingList />
  <LeasingForm />
</template>
