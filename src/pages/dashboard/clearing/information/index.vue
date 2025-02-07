<script setup>
import { ref, reactive } from "vue";
import { dateFormatter, numberFormatter, timeFormatter } from "@/utils/internalization";
import { tableColumns, tableData } from "./data";

const table = reactive({
  data: tableData,
  columns: tableColumns,
  pagination: 0,
  loading: false,
});

const clearingStats = ref({
  free: 0,
  paid: 0,
  blocked: 0,
});

const clearingStatsList = [
  {
    title: "Свободные ден средства",
    image: "clearing-stats-1.png",
    key: "free",
  },
  {
    title: "Оплаченные ден средства",
    image: "clearing-stats-2.png",
    key: "paid",
  },
  {
    title: "Блокированные ден средства",
    image: "clearing-stats-3.png",
    key: "blocked",
  },
];
</script>

<template>
  <div class="container">
    <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Клиринг") }}</h2>
    <!-- Статистики Клиринга -->
    <ul class="flex justify-around gap-8 mt-8 border bg-gray-50 border-gray-300 border-dashed rounded-xl px-3 py-6">
      <li v-for="item in clearingStatsList" class="flex flex-col items-center">
        <icon :name="item.image" class="h-15" />
        <h3 class="text-zinc-500 mt-4">{{ $t(item.title) }}</h3>
        <p class="text-2xl text-zinc-900 font-semibold mt-3">{{ clearingStats[item.key] }}</p>
      </li>
    </ul>

    <!-- Table -->
    <div class="mt-10">
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
