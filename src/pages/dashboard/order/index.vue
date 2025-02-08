<script setup>
import { orderService } from "@/services/OrderService";
import { regionService } from "@/services/RegionService";
import { useTranslation } from "i18next-vue";
import { onMounted, reactive, ref } from "vue";
// Composables
const { i18next } = useTranslation();

// Refs
const lang = i18next.language;
const isModal = ref(false);

// Reactive
const formData = reactive({
  savedLocationId: null,
  productIds: [],
});
const state = reactive({
  tableData: [],
  productsData: [],
});

// Functions
async function GetAllOrders() {
  state.tableData = await orderService.GetAll();
  // state.productsData = await
}
const handleModal = () => {
  isModal.value = true;
};

onMounted(() => {
  GetAllOrders();
});
</script>
<template>
  <div class="container flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold">{{ $t("Заказы") }}</h2>
      <a-button size="large" type="primary" @click.stop="handleModal">{{ $t("Создать заказ") }}s</a-button>
    </div>
    <a-modal v-model:open="isModal" :title="$t('Создать заказ')">
      <a-form class="py-4" layout="vertical">
        <a-form-item :label="$t('Выберите продукты')">
          <a-select v-model="formData.productIds">
            <a-select-item></a-select-item>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
