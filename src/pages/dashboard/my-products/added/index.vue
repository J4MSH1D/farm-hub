<script setup>
import { reactive } from "vue";
import { tableColumns, tableData } from "./data";
import { dateFormatter, numberFormatter, timeFormatter } from "@/utils/internalization";
import { ref } from "vue";

const table = reactive({
  data: tableData,
  columns: tableColumns,
  pagination: 0,
  loading: false,
});

const activeTab = ref("products");
</script>

<template>
  <div class="container">
    <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Добавленные товары") }}</h2>

    <div class="flex items-center justify-between gap-5">
      <div class="flex gap-3 mt-5">
        <a-radio-group size="large" v-model:value="activeTab">
          <a-radio-button size="large" value="products">{{ $t("Товары") }}</a-radio-button>
          <a-radio-button size="large" value="services">{{ $t("Услуги") }}</a-radio-button>
        </a-radio-group>
      </div>

      <a-button size="large">
        <div class="flex items-center gap-2">
          <icon name="filter400" is-svg-raw class="h-4 w-4 fill-zinc-500" />
          <span class="text-zinc-900">{{ $t("Фильтр") }}</span>
        </div>
      </a-button>
    </div>

    <div class="mt-8">
      <a-table :columns="table.columns" :data-source="table.data" :pagination="true" :scroll="{ x: 'max-content' }">
        <template v-slot:bodyCell="props">
          <template v-if="props.column.dataIndex === 'name'">
            {{ $t(props.text) }}
          </template>
          <template v-if="props.column.dataIndex === 'date'"> {{ dateFormatter(props.text) }} {{ timeFormatter(props.text) }} </template>
          <template v-if="props.column.dataIndex === 'price'"> {{ numberFormatter(props.text) }} {{ $t("сум") }} </template>
          <template v-if="props.column.dataIndex === 'sum'"> {{ numberFormatter(props.text) }} {{ $t("сум") }} </template>
          <template v-if="props.column.dataIndex === 'subject'">
            {{ $t(props.text) }}
          </template>
          <template v-if="props.column.dataIndex === 'status'">
            {{ $t(props.text) }}
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
