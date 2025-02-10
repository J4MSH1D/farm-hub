<script setup>
import { computed, ref } from "vue";
import { useTranslation } from "i18next-vue";

const { i18next } = useTranslation();
const locale = computed(() => i18next.language);
const loading = ref(false);
const form = ref({
  name: {
    uz: "",
    ru: "",
  },
  categoryTypeId: null,
});

async function createCategory() {
  try {
    loading.value = true;
    await categoryService.Create(form.value);
    await getAllCategories();
    createModal.value = false;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <a-modal v-model:open="createModal" :footer="false">
    <a-form :model="form" @finish="createCategory" class="mb-5 mt-10">
      <a-form-item name="uz" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
        <a-input size="large" v-model:value="form.name.uz" placeholder="O'zbekcha" />
      </a-form-item>
      <a-form-item name="ru" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
        <a-input size="large" v-model:value="form.name.ru" placeholder="Русский" />
      </a-form-item>
      <a-form-item name="categoryTypeId" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
        <a-select size="large" v-model:value="form.categoryTypeId" :placeholder="$t('Категория')">
          <a-select-option v-for="item in categoryTypes" :value="item.id">{{ item.name["uz"] }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="w-full">
        <a-button size="large" type="primary" class="!w-full" html-type="submit" @click="createCategory">{{ $t("Добавить") }}</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
