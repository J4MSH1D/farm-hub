<script setup>
import { reactive } from "vue";
import { tableColumns, tableData } from "./data";
import { dateFormatter, numberFormatter, timeFormatter } from "@/utils/internalization";

const table = reactive({
  data: tableData,
  columns: tableColumns,
  pagination: 0,
  loading: false,
});
</script>

<template>
  <div class="container">
    <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Мои сделки") }}</h2>

    <div class="flex items-center justify-between gap-5">
      <div class="flex gap-3 mt-5">
        <a-button size="large">{{ $t("Товары") }}</a-button>
        <a-button size="large">{{ $t("Услуги") }}</a-button>
      </div>

      <a-button size="large">
        <div class="flex items-center gap-2">
          <icon name="filter400" is-svg-raw class="h-4 w-4 fill-zinc-500" />
          <span class="text-zinc-900">{{ $t("Фильтр") }}</span>
        </div>
      </a-button>
    </div>
    <div>
      <a-radio-group class="block mt-8">
        <a-radio-button>{{ $t("Я продавец") }}</a-radio-button>
        <a-radio-button>{{ $t("Я покупатель") }}</a-radio-button>
      </a-radio-group>
      <a-radio-group class="block mt-3">
        <a-radio-button>{{ $t("С гарантией") }}</a-radio-button>
        <a-radio-button>{{ $t("Без гарантий") }}</a-radio-button>
      </a-radio-group>
    </div>

    <div class="mt-8">
      <a-table :columns="table.columns" :data-source="table.data" :pagination="table.pagination" :loading="loading" :scroll="{ x: 'max-content' }">
        <template #name="{ text }">{{ $t(text) }}</template>
        <template #date="{ text }">{{ dateFormatter(text) }} {{ timeFormatter(text) }}</template>
        <template #price="{ text }">{{ numberFormatter(text) }} {{ $t("сум") }}</template>
        <template #sum="{ text }">{{ numberFormatter(text) }} {{ $t("сум") }}</template>
        <template #subject="{ text }">{{ $t(text) }}</template>
        <template #status="{ text }">{{ $t(text) }}</template>
      </a-table>
    </div>
  </div>
</template>
