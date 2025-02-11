<script setup>
import Table from "./components/table.vue";
import AddModal from "./components/addModal.vue";
import EditModal from "./components/editModal.vue";
import { onMounted, provide, reactive } from "vue";
import { categoryService } from "@/services/CategoryService";
import { categoryTypeService } from "@/services/CategoryTypeService";
import Navigator from "./components/navigator.vue";

const categoryTypes = reactive({ loading: false, data: [] });
const categories = reactive({ loading: false, data: [] });
const modals = reactive({
  add: { open: false },
  edit: { open: false, params: null },
});

async function getCategoryTypes() {
  const response = await categoryTypeService.GetAllCategories();
  categoryTypes.data = response;
}

async function getAllCategories() {
  try {
    categories.loading = true;
    const response = await categoryService.GetAll();
    categories.data = response;
  } finally {
    categories.loading = false;
  }
}

onMounted(() => {
  getCategoryTypes();
  getAllCategories();
});

provide("modals", modals);
provide("categories", categories);
provide("categoryTypes", categoryTypes);
provide("methods", { getAllCategories, getCategoryTypes });
</script>

<template>
  <Navigator />
  <Table />
  <EditModal />
  <AddModal />
</template>
