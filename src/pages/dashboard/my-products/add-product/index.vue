<script setup>
import { computed, onMounted, ref } from "vue";
import { productService } from "@/services/ProductService";
import ImageUploader from "@/components/global/imageUploader.vue";
import { message } from "ant-design-vue";
import { useTranslation } from "i18next-vue";
import { categoryService } from "@/services/CategoryService";
import { regionsService } from "@/services/RegionsService";

const { t, i18next } = useTranslation();
const locale = computed(() => i18next.language);
const trades = ref([]);
const regions = ref([]);
const districts = ref([]);
const categories = ref([]);

const formRef = ref();

const form = ref({
  tradeId: null,
  image: "",
  assets: "",
  title: "",
  description: "",
  amount: "",
  categoryId: null,
  districtId: null,
  regionId: null,
  address: "",
});

function saveAsDraft() {}

async function createProduct() {
  const response = await productService.Create(form.value);
  if (response) {
    form.value = {};
    resetForm();
    message.success(t("Товар успешно добавлен!"));
  }
}

async function getInfos() {
  const tradesRes = await productService.GetTrade();
  const regionsRes = await regionsService.GetAll();
  const categoriesRes = await categoryService.GetAll();

  categories.value = categoriesRes;
  regions.value = regionsRes;
  trades.value = tradesRes;
}

async function getDistricts(value) {
  const response = await regionsService.GetByRegion(value);
  districts.value = response;
}

function resetForm() {
  formRef.value.resetFields();
}

onMounted(() => {
  getInfos();
});

const tradeTypes = {
  Sell: "Продажа",
  Buy: "Покупка",
};
</script>

<template>
  <div class="container pb-10">
    <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Добавить товар") }}</h2>

    <a-form :ref="formRef" class="grid grid-cols-2 gap-x-4 gap-y-2">
      <!-- Наименование товара -->
      <a-form-item :label="$t('Наименование товара')" :labelCol="{ span: 24 }">
        <a-input :placeholder="$t('Наименование товара')" v-model:value="form.title" />
      </a-form-item>
      <!-- Количество -->
      <a-form-item :label="$t('Количество')" :labelCol="{ span: 24 }">
        <a-input type="number" :placeholder="$t('Количество')" v-model:value="form.amount" />
      </a-form-item>
      <!-- description -->
      <a-form-item class="col-span-2" :label="$t('Описание товара')" :labelCol="{ span: 24 }">
        <a-textarea v-model:value="form.description" :placeholder="$t('Описание товара')" :rows="10" style="resize: none" />
      </a-form-item>
      <!-- Категория -->
      <a-form-item :label="$t('Категория')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Категория')" v-model:value="form.categoryId" :get-popup-container="trigger => trigger.parentNode">
          <a-select-option v-for="item in categories" :key="item.id" :value="item.category.id">{{ item.category.name?.[locale] }}</a-select-option>
        </a-select>
      </a-form-item>
      <!-- Тип торговли -->
      <a-form-item :label="$t('Тип торговли')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Тип торговли')" v-model:value="form.tradeId" :get-popup-container="trigger => trigger.parentNode">
          <a-select-option v-for="item in trades" :key="item.id" :value="item.id">{{ tradeTypes[item.name] }}</a-select-option>
        </a-select>
      </a-form-item>
      <!-- Область -->
      <a-form-item :label="$t('Область')" :labelCol="{ span: 24 }">
        <a-select
          :placeholder="$t('Область')"
          v-model:value="form.regionId"
          @change="val => getDistricts(val)"
          :get-popup-container="trigger => trigger.parentNode"
        >
          <a-select-option v-for="item in regions" :key="item.id" :value="item.id">{{ $t(item.name?.[locale]) }}</a-select-option>
        </a-select>
      </a-form-item>
      <!-- Район -->
      <a-form-item :label="$t('Район')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Район')" v-model:value="form.districtId" :get-popup-container="trigger => trigger.parentNode">
          <a-select-option v-for="item in districts" :key="item.id" :value="item.id">{{ $t(item.name?.[locale]) }}</a-select-option>
        </a-select>
      </a-form-item>
      <!-- Адрес -->
      <a-form-item :label="$t('Адрес')" :labelCol="{ span: 24 }">
        <a-input :placeholder="$t('Адрес')" v-model:value="form.address" />
      </a-form-item>
      <!-- Добавить фото товара -->
      <a-form-item :label="$t('Добавить фото товара')" :labelCol="{ span: 24 }">
        <!-- <ImageUploader @upload="(_, base64) => (form.image = base64)" @delete="() => (form.image = null)" /> -->
      </a-form-item>
    </a-form>

    <!-- Save and Send buttons -->
    <div class="flex justify-end gap-3 mt-20">
      <a-button size="large" @click="saveAsDraft">{{ $t("Сохранить как черновик") }}</a-button>
      <a-button size="large" @click="createProduct" type="primary">{{ $t("Отправить на модерацию") }}</a-button>
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
