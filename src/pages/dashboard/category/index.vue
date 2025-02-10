<script setup>
import Table from "./components/table.vue";
import AddModal from "./components/addModal.vue";
import EditModal from "./components/editModal.vue";
import { provide, reactive, ref, watch } from "vue";
import { categoryService } from "@/services/CategoryService";
import { categoryTypeService } from "@/services/CategoryTypeService";
import Navigator from "./components/navigator.vue";

const categoryTypes = ref([]);
const categories = ref([]);
const isLoadingData = ref(false);
const modals = reactive({
  add: { open: false },
  edit: { open: false, params: null },
});

async function getCategoryTypes() {
  const response = await categoryTypeService.GetAllCategories();
  categoryTypes.value = response;
}

async function getAllCategories() {
  isLoadingData.value = true;
  const response = await categoryService.GetAll();
  console.log(response);
  categories.value[0] = response;
  isLoadingData.value = false;
}

watch(() => {
  getAllCategories();
  getCategoryTypes();
});

provide("modals", modals);
provide("categories", categories);
provide("categoryTypes", categoryTypes);
provide("isLoadingData", isLoadingData);
</script>

<template>
  <Navigator />
  <Table />
  <EditModal />
  <AddModal />
</template>
