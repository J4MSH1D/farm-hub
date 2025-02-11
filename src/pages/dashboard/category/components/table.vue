<script setup>
import { computed, inject, toRefs } from "vue";
import { useTranslation } from "i18next-vue";
import { categoryService } from "@/services/CategoryService";
import { useRouter } from "vue-router";

const router = useRouter();
const modals = inject("modals");
const methods = inject("methods");
const categories = inject("categories");
const { loading, data } = toRefs(categories);

const { i18next } = useTranslation();
const locale = computed(() => i18next.language);

function openEditModal(item) {
  modals.edit.open = true;
  modals.edit.params = item;
}

async function deleteCategory(id) {
  try {
    loading.value = true;
    await categoryService.Delete(id);
    await methods.getAllCategories();
  } finally {
    loading.value = false;
  }
}

function handleRecordClick(record) {
  router.push(`/category/${record.id}`);
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
    <a-table :loading="loading" :dataSource="data" :columns="columns">
      <template v-slot:bodyCell="{ record, column }">
        <template v-if="column.dataIndex === 'name'">
          <span @click="handleRecordClick(record)" class="block cursor-pointer">{{ record.category.name?.[locale] }}</span>
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
