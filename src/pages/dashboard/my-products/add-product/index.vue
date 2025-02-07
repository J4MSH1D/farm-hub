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
  documentType: null,
  documentation: null,
});

function saveAsDraft() {}
function sendForModernization() {}

provide("form", form);
</script>

<template>
  <div class="container pb-10">
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

    <!-- Save and Send buttons -->
    <div class="flex justify-end gap-3 mt-20">
      <a-button size="large" @click="saveAsDraft" class="border-green-600 text-green-600">{{ $t("Сохранить как черновик") }}</a-button>
      <a-button size="large" @click="sendForModernization" class="border-green-600 text-green-600">{{ $t("Отправить на модерацию") }}</a-button>
    </div>
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
