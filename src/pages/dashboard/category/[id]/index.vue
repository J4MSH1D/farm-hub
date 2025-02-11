<script setup>
import Table from "./components/table.vue";
import AddModal from "./components/addModal.vue";
import EditModal from "./components/editModal.vue";
import { onMounted, provide, reactive, ref } from "vue";
import { categoryService } from "@/services/CategoryService";
import { categoryTypeService } from "@/services/CategoryTypeService";
import Navigator from "./components/navigator.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;
const categoryTypes = reactive({ loading: false, data: [] });
const categories = reactive({ loading: false, data: [] });
const modals = reactive({
  add: { open: false },
  edit: { open: false, params: null },
});

async function getCategoryById(category_id) {
  try {
    categories.loading = true;
    const response = await categoryService.GetById(category_id);
    categories.data.push(response);
  } finally {
    categories.loading = false;
  }
}

async function getCategoryTypes() {
  const response = await categoryTypeService.GetAllCategories();
  categoryTypes.data = response;
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

onMounted(() => {
  getCategoryTypes();
  getCategoryById(id);
});

provide("modals", modals);
provide("categories", categories);
provide("categoryTypes", categoryTypes);
provide("methods", { getCategoryTypes, refreshCategory, getCategoryById });
</script>

<template>
  <Navigator />
  <Table />
  <EditModal />
  <AddModal />
</template>
