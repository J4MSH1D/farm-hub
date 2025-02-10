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
    const data = response.map(item => ({ ...item.category, categoryType: item.categoryType }));
    categories.data[0] = { subCategories: data };
  } finally {
    categories.loading = false;
  }
}

async function refreshCategory() {
  const id = categories.data?.at(-1)?.id;
  if (id) {
    try {
      categories.loading = true;
      const response = await categoryService.GetById(id);
      categories.data.splice(-1, 1, response);
    } finally {
      categories.loading = false;
    }
  } else {
    getAllCategories();
  }
}

async function getCategoryById(id) {
  try {
    categories.loading = true;
    const response = await categoryService.GetById(id);
    categories.data.push(response);
    console.log(response);
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
provide("methods", { getAllCategories, getCategoryTypes, refreshCategory, getCategoryById });
</script>

<template>
  <Navigator />
  <Table />
  <EditModal />
  <AddModal />
</template>
