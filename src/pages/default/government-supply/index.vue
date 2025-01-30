<script setup>
import { provide, reactive } from "vue";
import { MainBanner, CreditParams, CreditList, CreditSteps, ApplicationForm } from "./components";

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
  <CreditParams />
  <CreditList />
  <CreditSteps />
  <ApplicationForm />
</template>
