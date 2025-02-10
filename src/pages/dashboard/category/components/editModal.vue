<script setup>
import { computed, inject, ref, watch } from "vue";
import { useTranslation } from "i18next-vue";

const modals = inject("modals");

const { open, params } = modals.edit;
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

async function updateCategory() {
  try {
    loading.value = true;
    await categoryService.Update(form.value);
    await getAllCategories();
    updateModal.value = false;
  } finally {
    loading.value = false;
  }
}

watch(params, () => {
  if (params.value) {
    form.value = params.value;
    const categoryName = item.category.name;
    updateData.value = { id: item.id, name: { ...categoryName }, categoryTypeId: item.categoryType.id };
  }
});
</script>

<template>
  <a-modal v-model:open="updateModal" :footer="false">
    <a-form :model="form" @finish="updateCategory" class="mb-5 mt-10">
      <a-form-item name="uz" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
        <a-input size="large" v-model:value="form.name.uz" placeholder="O'zbekcha" />
      </a-form-item>
      <a-form-item name="ru" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
        <a-input size="large" v-model:value="form.name.ru" placeholder="Русский" />
      </a-form-item>
      <a-form-item name="categoryTypeId" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
        <a-select size="large" v-model:value="form.categoryTypeId" :placeholder="$t('Категория')">
          <a-select-option v-for="item in categoryTypes" :value="item.id">{{ item.name?.[locale] }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="w-full">
        <a-button size="large" type="primary" class="!w-full" html-type="submit" @click="updateCategory">{{ $t("Сохранить") }}</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
