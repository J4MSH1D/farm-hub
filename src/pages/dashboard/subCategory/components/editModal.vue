<script setup>
import { computed, inject, reactive, ref, toRefs, watch } from "vue";
import { useTranslation } from "i18next-vue";
import { categoryService } from "@/services/CategoryService";

const modals = inject("modals");
const categories = inject("categories");
const methods = inject("methods");
const categoryTypes = inject("categoryTypes");
const { open, params } = toRefs(modals.edit);
const { i18next } = useTranslation();
const locale = computed(() => i18next.language);

const categoryDisabled = computed(() => !modals.edit.params?.categoryType?.id);

const formRef = ref();
const loading = ref(false);
const form = reactive({
  name: {
    uz: "",
    ru: "",
  },
  parentId: null,
  image: null,
  categoryTypeId: null,
});

async function updateCategory() {
  try {
    loading.value = true;
    await categoryService.Update(form);
    await methods.refreshCategory();
    formRef.value.resetFields();
    modals.edit.open = false;
    modals.edit.params = null;
  } finally {
    loading.value = false;
  }
}

watch(
  params,
  value => {
    if (value) {
      const categoryTypeId = value?.categoryType?.id;

      if (categoryTypeId) {
        form.categoryTypeId = value.categoryType.id;
      } else {
        form.categoryTypeId = categories.data?.at(-1)?.id;
      }

      form.id = value.id;
      form.name = { ...value.name };
      form.parentId = categories.data?.at(-1)?.id || null;
    }
  },
  { deep: true }
);
</script>

<template>
  <a-modal v-model:open="open" :footer="false">
    <a-form :model="form" ref="formRef" @finish="updateCategory" class="mb-5 mt-10">
      <!-- Name (uz) -->
      <a-form-item
        name="uz"
        :label="$t('Название (uz)')"
        :rules="[{ required: true, message: $t('Обязательно к заполнению') }]"
        :labelCol="{ span: 24 }"
      >
        <a-input size="large" v-model:value="form.name.uz" placeholder="O'zbekcha" />
      </a-form-item>
      <!-- Name (ru) -->
      <a-form-item
        name="ru"
        :label="$t('Название (ru)')"
        :rules="[{ required: true, message: $t('Обязательно к заполнению') }]"
        :labelCol="{ span: 24 }"
      >
        <a-input size="large" v-model:value="form.name.ru" placeholder="Русский" />
      </a-form-item>
      <!-- CategoryId (ru) -->
      <a-form-item
        name="categoryTypeId"
        :label="$t('Категория')"
        :rules="[{ required: true, message: $t('Обязательно к заполнению') }]"
        :labelCol="{ span: 24 }"
      >
        <a-select size="large" v-model:value="form.categoryTypeId" :disabled="categoryDisabled" :placeholder="$t('Категория')">
          <a-select-option v-for="item in categoryTypes.data" :value="item.id">{{ item.name?.[locale] }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="w-full">
        <a-button size="large" type="primary" class="!w-full" html-type="submit" @click="updateCategory">{{ $t("Сохранить") }}</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
