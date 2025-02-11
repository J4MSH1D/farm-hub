<script setup>
import { inject, reactive, ref, toRefs, watch } from "vue";
import { categoryService } from "@/services/CategoryService";

const modals = inject("modals");
const categories = inject("categories");
const methods = inject("methods");
const { open, params } = toRefs(modals.edit);

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
    modals.edit.open = false;
    modals.edit.params = null;
    formRef.value.resetFields();
  } finally {
    loading.value = false;
  }
}

watch(params, value => {
  if (value) {
    const parent = categories.data?.at(-1);
    form.categoryTypeId = parent.categoryType?.id;
    form.id = value.id;
    form.name = { ...value.name };
    form.parentId = parent.parentCategory?.parentId || null;
  }
});
</script>

<template>
  <a-modal v-model:open="open" :footer="false">
    <a-form :model="form" @finish="updateCategory" class="mb-5 mt-10">
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

      <!-- form-button -->
      <a-form-item class="w-full">
        <a-button size="large" type="primary" class="!w-full" html-type="submit" @click="updateCategory">{{ $t("Сохранить") }}</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
