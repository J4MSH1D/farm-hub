<script setup>
import { ref } from "vue";
import { Product, Service, Vacancy } from "./components";

const activeTab = ref("product");
</script>

<template>
  <div class="container pb-10">
    <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Разместить объявление") }}</h2>

    <a-radio-group v-model:value="activeTab" size="large" class="my-4">
      <a-radio-button size="large" value="product">{{ $t("Товар") }}</a-radio-button>
      <a-radio-button size="large" value="service">{{ $t("Услуга") }}</a-radio-button>
      <a-radio-button size="large" value="vacancy">{{ $t("Вакансии") }}</a-radio-button>
    </a-radio-group>

    <!-- ============= Товар ============= -->
    <Product v-if="activeTab === 'product'" />
    <!-- ============= Услуга ============= -->
    <Service v-if="activeTab === 'service'" />
    <!-- ============= Вакансии ============= -->
    <Vacancy v-if="activeTab === 'vacancy'" />
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
