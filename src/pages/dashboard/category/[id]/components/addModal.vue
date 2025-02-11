<script setup>
import { categoryService } from "@/services/CategoryService";
import { inject, reactive, ref, toRefs, watch } from "vue";

const modals = inject("modals");
const categories = inject("categories");
const methods = inject("methods");
const { open } = toRefs(modals.add);
const categoryType = ref();

const formRef = ref();
const loading = ref(false);
const form = reactive({
  name: {
    uz: "",
    ru: "",
  },
  parentId: null,
  categoryTypeId: null,
});

async function createCategory() {
  try {
    loading.value = true;
    const response = await categoryService.Create(form);
    if (response) {
      await methods.refreshCategory();
      formRef.value.resetFields();
    }
    modals.add.open = false;
  } finally {
    loading.value = false;
  }
}

watch(categories.data, () => {
  console.log(categories.data);
  form.parentId = categories.data?.at(-1)?.id;
  form.categoryTypeId = categories.data[0]?.categoryType.id;
});
</script>

<template>
  <a-modal v-model:open="open" :loading="loading" :footer="false">
    <a-form :model="form" ref="formRef" @finish="createCategory" class="mb-5 mt-10">
      <a-form-item name="uz" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
        <a-input size="large" v-model:value="form.name.uz" placeholder="O'zbekcha" />
      </a-form-item>
      <a-form-item name="ru" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
        <a-input size="large" v-model:value="form.name.ru" placeholder="Русский" />
      </a-form-item>
      <a-form-item class="w-full mt-5">
        <a-button size="large" type="primary" class="!w-full" html-type="submit" @click="createCategory">{{ $t("Добавить") }}</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
