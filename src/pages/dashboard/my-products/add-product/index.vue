<script setup>
import { onMounted, provide, reactive, ref } from "vue";
import { productService } from "@/services/ProductService";
import ImageUploader from "@/components/global/imageUploader.vue";
import { message } from "ant-design-vue";
import { useTranslation } from "i18next-vue";
import { categoryService } from "@/services/CategoryService";
import { regionsService } from "@/services/RegionsService";

const { t } = useTranslation();
const trades = ref([]);
const categories = ref([]);

const form = ref({
  tradeId: 0,
  image: null,
  assets: null,
  title: "",
  description: "",
  amount: 0,
  categoryId: 0,
  districtId: 0,
  regionId: 0,
  address: "",
});

function saveAsDraft() {}

async function createProduct() {
  const response = await productService.Create(form.value);
  if (response) {
    form.value = {};
    message.success(t("Товар успешно добавлен!"));
  }
}

async function getInfos() {
  const tradesRes = await productService.GetTrade();
  const categoriesRes = await categoryService.GetAll();
  const regionsRes = await regionsService.GetAll();

  console.log(categoriesRes);

  categories.value = categoriesRes;
  trades.value = tradesRes;
  form.tradeId = tradesRes[0].id;
}

onMounted(() => {
  getInfos();
});

provide("form", form);
</script>

<template>
  <div class="container pb-10">
    <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Добавить товар") }}</h2>

    <a-form class="grid grid-cols-2 gap-x-4 gap-y-2">
      <!-- Наименование товара -->
      <a-form-item :label="$t('Наименование товара')" :labelCol="{ span: 24 }">
        <a-input :placeholder="$t('Наименование товара')" v-model="form.title" />
      </a-form-item>
      <!-- Количество -->
      <a-form-item :label="$t('Количество')" :labelCol="{ span: 24 }">
        <a-input type="number" :placeholder="$t('Количество')" v-model="form.amount" />
      </a-form-item>
      <!-- description -->
      <a-form-item class="col-span-2" :label="$t('Описание товара')" :labelCol="{ span: 24 }">
        <a-textarea v-model="form.description" :placeholder="$t('Описание товара')" :rows="10" style="resize: none" />
      </a-form-item>
      <!-- Тип торговли -->
      <a-form-item :label="$t('Тип торговли')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Тип торговли')" v-model="form.tradeId" :get-popup-container="trigger => trigger.parentNode">
          <a-select-option v-for="trade in trades" :key="trade.id" :value="trade.id">{{ trade.name }}</a-select-option>
        </a-select>
      </a-form-item>
      <!-- Область -->
      <a-form-item :label="$t('Область')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Область')" v-model="form.regionId" :get-popup-container="trigger => trigger.parentNode" />
      </a-form-item>
      <!-- Район -->
      <a-form-item :label="$t('Район')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Район')" v-model="form.regionId" :get-popup-container="trigger => trigger.parentNode" />
      </a-form-item>
      <!-- Адрес -->
      <a-form-item :label="$t('Адрес')" :labelCol="{ span: 24 }">
        <a-input :placeholder="$t('Адрес')" v-model="form.address" />
      </a-form-item>
      <!-- Добавить фото товара -->
      <a-form-item :label="$t('Добавить фото товара')" :labelCol="{ span: 24 }">
        <ImageUploader @upload="(_, base64) => (form.image = base64)" />
      </a-form-item>
    </a-form>

    <!-- Save and Send buttons -->
    <div class="flex justify-end gap-3 mt-20">
      <a-button size="large" @click="saveAsDraft">{{ $t("Сохранить как черновик") }}</a-button>
      <a-button size="large" @click="sendForModernization" type="primary">{{ $t("Отправить на модерацию") }}</a-button>
    </div>
  </div>
</template>

<style scoped>
:deep(.ant-form-item-label) {
  height: auto !important;
  padding-bottom: 0 !important;
}

:deep(.ant-form-item) {
  margin-bottom: 0 !important;
}
</style>
