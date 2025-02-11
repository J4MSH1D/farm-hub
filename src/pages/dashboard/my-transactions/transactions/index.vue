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
const userType = ref("vendor");
const guarantee = ref("withGuarantee");
</script>

<template>
  <div class="container">
    <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Мои сделки") }}</h2>

    <div class="flex items-center justify-between gap-5">
      <div class="flex gap-5 mt-5 items-center">
        <a-radio-group button-style="solid" v-model:value="activeTab">
          <a-radio-button primary value="products">{{ $t("Товары") }}</a-radio-button>
          <a-radio-button value="services">{{ $t("Услуги") }}</a-radio-button>
        </a-radio-group>
        <a-radio-group class="block" button-style="solid" v-model:value="userType">
          <a-radio-button value="vendor">{{ $t("Я продавец") }}</a-radio-button>
          <a-radio-button value="customer">{{ $t("Я покупатель") }}</a-radio-button>
        </a-radio-group>
        <a-radio-group class="block" button-style="solid" v-model:value="guarantee">
          <a-radio-button value="withGuarantee">{{ $t("С гарантией") }}</a-radio-button>
          <a-radio-button value="noGuarantee">{{ $t("Без гарантий") }}</a-radio-button>
        </a-radio-group>
      </div>

      <a-button>
        <div class="flex items-center gap-2">
          <icon name="filter400" is-svg-raw class="h-4 w-4 fill-zinc-500" />
          <span class="text-zinc-900">{{ $t("Фильтр") }}</span>
        </div>
      </a-button>
    </div>
    <div></div>

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
