<script setup>
import { orderService } from "@/services/OrderService";
import { useTranslation } from "i18next-vue";
import { onMounted, reactive, ref } from "vue";
import { productService } from "@/services/ProductService";
import { tableColumns } from "./data";
import { dateFormatter, numberFormatter } from "@/utils/internalization";
import { message } from "ant-design-vue";

// Composables
const { i18next } = useTranslation();
const lang = i18next.language;

// Refs
const products = ref([]);
const isModal = ref(false);
const isEdit = ref(false);
const isDeleteModal = ref(false);
const formRef = ref();
const loading = ref(false);
const selectedOrderId = ref(null);
const isLoadingData = ref(false);

// Reactive states
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
}

async function submitForm() {
  loading.value = true;
  try {
    if (isEdit.value && selectedOrderId.value) {
      formData.id = selectedOrderId.value;
      await orderService.Update(formData);
      message.success("Заказ успешно отредактирован");
    } else {
      await orderService.Create(formData);
      message.success("Заказ успешно сохранен");
    }
    await GetAllOrders();
    closeModal();
  } catch (error) {
    message.error("Ошибка при сохранении заказа");
  } finally {
    loading.value = false;
  }
}

async function getAllProducts() {
  try {
    isLoadingData.value = true;
    const response = await productService.GetAll();
    products.value = response;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    isLoadingData.value = false;
  }
}

function closeModal() {
  isModal.value = false;
  isEdit.value = false;
  selectedOrderId.value = null;
  formData.productIds = [];
}

onMounted(() => {
  getAllProducts();
});
</script>

<template>
  <div class="container flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold">{{ $t("Заказы") }}</h2>
    </div>

    <a-modal v-model:open="isModal" :title="$t(isEdit ? 'Редактировать заказ' : 'Создать заказ')" @cancel="closeModal">
      <a-form class="py-4" layout="vertical" size="large" ref="formRef">
        <a-form-item :label="$t('Выберите продукты')">
          <a-select v-model:value="formData.productIds" mode="multiple">
            <a-select-option v-for="item in state.productsData" :key="item.id" :value="item.id">
              {{ item.product.title }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button size="large" @click="closeModal">{{ $t("Отмена") }}</a-button>
        <a-button size="large" type="primary" @click="submitForm" :loading="loading">{{ $t("Сохранить") }}</a-button>
      </template>
    </a-modal>

    <a-modal v-model:open="isDeleteModal" :title="$t('Подтверждение удаления')">
      <p>{{ $t("Вы уверены, что хотите удалить этот заказ?") }}</p>
      <template #footer>
        <a-button size="large" @click="isDeleteModal = false">{{ $t("Отмена") }}</a-button>
        <a-button danger size="large" @click="deleteOrder" :loading="loading">{{ $t("Удалить") }}</a-button>
      </template>
    </a-modal>

    <a-table :data-source="products" :loading="isLoadingData" :columns="tableColumns" bordered>
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'id'">
          {{ record.id }}
        </template>
        <template v-if="column.dataIndex === 'image'">
          <img :src="record.product.image" alt="" />
        </template>
        <template v-if="column.dataIndex === 'title'">
          {{ record.product.title }}
        </template>
        <template v-if="column.dataIndex === 'amount'">{{ numberFormatter(record.product.amount) }}</template>
        <template v-if="column.dataIndex === 'description'">{{ record.product.description }}</template>
      </template>
    </a-table>
  </div>
</template>
