<script setup>
import { provide, reactive } from "vue";
import { AddPhoto, DocumentationInfo, ExhibitInfo, ProductInfo, TermsOfDeal } from "./components";

const form = reactive({
  name: "",
  category: null,
  sortName: null,
  sortType: null,
  mark: "",
  package: null,
  manufacturer: "",
  manufacturerCountry: null,
  description: "",
  quantity: "",
  unit: null,
  unitPrice: "",
  total: "",
  deadline: null,
  contractType: null,
  currency: null,
  termsOfDelivery: null,
  additionalInfo: "",
  guaranteeType: null,
  paymentDeadline: null,
  deliveryDeadline: null,
  deposit: "",
  certificate: null,
  image: null,
});

provide("form", form);
</script>

<template>
  <div class="container pb-20">
    <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Добавить товар") }}</h2>

    <!-- ============= Информация о товаре ============= -->
    <ProductInfo />
    <!-- ============= Информация о выставлении ============= -->
    <ExhibitInfo />
    <!-- ============= Условия сделки ============= -->
    <TermsOfDeal />
    <!-- ============= Добавить фото товара ============= -->
    <AddPhoto />
    <!-- ============= Наличие сопроводительной документации ============= -->
    <DocumentationInfo />
  </div>
</template>

<style scoped>
:deep(.ant-form-item-label) {
  height: auto !important;
  padding-bottom: 0 !important;
}

:deep(.ant-form-item) {
  margin-bottom: 0 !important;
}
</style>
