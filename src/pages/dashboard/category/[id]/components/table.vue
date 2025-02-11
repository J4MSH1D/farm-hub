<script setup>
import { computed, inject, toRefs } from "vue";
import { useTranslation } from "i18next-vue";
import { categoryService } from "@/services/CategoryService";

const modals = inject("modals");
const methods = inject("methods");
const categories = inject("categories");
const { loading } = toRefs(categories);

const { i18next } = useTranslation();
const locale = computed(() => i18next.language);
const tableData = computed(() => {
  if (categories.data) {
    return categories.data?.at(-1)?.subCategories;
  }
});

function openEditModal(item) {
  modals.edit.open = true;
  modals.edit.params = item;
}

async function deleteCategory(id) {
  try {
    loading.value = true;
    categoryService.Delete(id);
    methods.refreshCategory();
  } finally {
    loading.value = false;
  }
}

function handleRecordClick(record) {
  methods.getCategoryById(record.id);
}

const columns = [
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Действия",
    dataIndex: "actions",
    width: 200,
  },
];
</script>

<template>
  <div class="container py-8">
    <a-table :loading="loading" :dataSource="tableData" :columns="columns">
      <template v-slot:bodyCell="{ record, column }">
        <template v-if="column.dataIndex === 'name'">
          <span @click="handleRecordClick(record)" class="block cursor-pointer">{{ record.name?.[locale] }}</span>
        </template>
        <template v-if="column.dataIndex === 'actions'">
          <div class="flex gap-2">
            <a-button :loading="loading" danger type="primary" @click="deleteCategory(record.id)">{{ $t("Удалить") }}</a-button>
            <a-button :loading="loading" class="bg-yellow-500 hover:(!bg-yellow-400)" type="primary" @click="openEditModal(record)">{{
              $t("Изменить")
            }}</a-button>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>
