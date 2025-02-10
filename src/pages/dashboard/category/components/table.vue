<script setup>
import { ref, computed, inject } from "vue";
import { useTranslation } from "i18next-vue";
import { categoryService } from "@/services/CategoryService";

const categories = inject("categories");
const modals = inject("modals");

const nestedCategories = ref([]);
const { i18next } = useTranslation();
const locale = computed(() => i18next.language);
const loading = ref(false);

function openEditModal(item) {
  modals.edit = { open: true, params: item };
}

async function deleteCategory(id) {
  try {
    loading.value = true;
    const response = await categoryService.Delete(id);
    console.log(response);
    await getAllCategories();
  } finally {
    loading.value = false;
  }
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
    <a-table :dataSource="categories.at(-1)" :columns="columns">
      <template v-slot:bodyCell="{ record, column }">
        <template v-if="column.dataIndex === 'name'">
          <span @click="nestedCategories.push(record)">{{ record.category.name?.[locale] }}</span>
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
