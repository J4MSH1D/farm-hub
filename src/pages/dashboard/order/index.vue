<script setup>
import { orderService } from "@/services/OrderService";
import { useTranslation } from "i18next-vue";
import { onMounted, reactive, ref } from "vue";
import { productService } from "@/services/ProductService";
import { columnData } from "./data";
import { dateFormatter, numberFormatter } from "@/utils/internalization";
import { message, Modal } from "ant-design-vue";

// Composables
const { i18next } = useTranslation();
const lang = i18next.language;

// Refs
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
  isLoadingData.value = true;
  state.tableData = await orderService.GetAll();
  isLoadingData.value = false;
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

function confirmDelete(orderId) {
  selectedOrderId.value = orderId;
  isDeleteModal.value = true;
}

async function deleteOrder() {
  loading.value = true;
  try {
    await orderService.Delete(selectedOrderId.value);
    message.success("Заказ успешно удален");
    await GetAllOrders();
  } catch (error) {
    message.error("Ошибка при удалении заказа");
  } finally {
    isDeleteModal.value = false;
    loading.value = false;
  }
}

function editOrder(order) {
  isEdit.value = true;
  selectedOrderId.value = order.id;
  formData.productIds = order.products.map(p => p.id);
  isModal.value = true;
}

function closeModal() {
  isModal.value = false;
  isEdit.value = false;
  selectedOrderId.value = null;
  formData.productIds = [];
}

onMounted(async () => {
  await GetAllOrders();
  state.productsData = await productService.GetAll();
});
</script>

<template>
  <div class="container flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold">{{ $t("Заказы") }}</h2>
      <a-button size="large" type="primary" @click="isModal = true">{{ $t("Создать заказ") }}</a-button>
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

    <a-table :data-source="state.tableData" :loading="isLoadingData" :columns="columnData" bordered>
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'products'">
          <a-tag v-for="product in record.products" size="large" color="green">{{ product.title }}</a-tag>
        </template>
        <template v-if="column.dataIndex === 'fee'">{{ numberFormatter(record.order.fee) }}</template>
        <template v-if="column.dataIndex === 'orderDate'">{{ dateFormatter(record.order.orderDate) }}</template>
        <template v-if="column.dataIndex === 'name'">{{ record.orderStatus.name[lang] }}</template>
        <template v-if="column.dataIndex === 'user'">{{ record.user.fullName }}</template>
        <template v-if="column.dataIndex === 'options'">
          <div class="flex gap-2">
            <a-button size="large" type="primary" @click="editOrder(record)">{{ $t("Редактировать") }}</a-button>
            <a-button danger size="large" @click="confirmDelete(record.id)">{{ $t("Удалить") }}</a-button>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>
