<script setup>
import { ref, onMounted, reactive, watch } from "vue";
import { categoryTypeService } from "@/services/CategoryTypeService";
import { useTranslation } from "i18next-vue";

let data = ref([]),
  { i18next } = useTranslation(),
  loading = ref(false),
  createModal = ref(false),
  updateModal = ref(false),
  addData = reactive({ uz: "", ru: "" }),
  updateData = reactive({ id: null, uz: "", ru: "" });

async function getAllCategories() {
  const response = await categoryTypeService.GetAllCategories();
  data.value = response;
}

function setUpdateModal(category) {
  updateModal.value = true;
  setTimeout(() => {
    updateData.id = category.id;
    updateData.ru = category.name.ru;
    updateData.uz = category.name.uz;
  }, 300);
}

async function deleteCategory(id) {
  try {
    loading.value = true;
    await categoryTypeService.DeleteCategory(id);
    await getAllCategories();
  } finally {
    loading.value = false;
  }
}

async function onAdd() {
  try {
    loading.value = true;
    await categoryTypeService.CreateCategory({ name: addData });
    await getAllCategories();
    createModal.value = false;
  } finally {
    loading.value = false;
  }
}

async function onEdit() {
  try {
    loading.value = true;
    await categoryTypeService.UpdateCategoryType({ name: updateData, id: updateData.id });
    await getAllCategories();
    updateModal.value = false;
  } finally {
    loading.value = false;
  }
}

watch(createModal, () => {
  addData.ru = addData.uz = "";
});

watch(updateModal, () => {
  updateData.id = null;
  updateData.ru = updateData.uz = "";
});

onMounted(async () => {
  await getAllCategories();
});

const columns = [
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Действия",
    dataIndex: "actions",
    width: 200,
  },
];
</script>
<template>
  <div>
    <div class="mb-5 flex justify-end items-center">
      <a-button @click="createModal = !createModal" type="primary" :loading="loading"> {{ $t("Создать") }} </a-button>
      <a-modal v-model:open="createModal" :footer="false">
        <a-form :model="addData" @finish="onAdd" class="mb-5 mt-10">
          <a-form-item name="uz" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-input size="large" v-model:value="addData.uz" placeholder="O'zbekcha" />
          </a-form-item>
          <a-form-item name="ru" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-input size="large" v-model:value="addData.ru" placeholder="Русский" />
          </a-form-item>
          <a-form-item class="w-full">
            <a-button size="large" type="primary" class="!w-full" html-type="submit">{{ $t("Добавить") }}</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
      <a-modal v-model:open="updateModal" :footer="false">
        <a-form :model="updateData" @finish="onEdit" class="mb-5 mt-10">
          <a-form-item name="uz" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-input size="large" v-model:value="updateData.uz" placeholder="O'zbekcha" />
          </a-form-item>
          <a-form-item name="ru" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-input size="large" v-model:value="updateData.ru" placeholder="Русский" />
          </a-form-item>
          <a-form-item class="w-full">
            <a-button size="large" type="primary" class="!w-full" html-type="submit">{{ $t("Добавить") }}</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <a-table :dataSource="data" :columns="columns">
      <template v-slot:bodyCell="props">
        <template v-if="props.column.dataIndex === 'name'">
          <span>{{ props.value[`${i18next.language}`] }}</span>
        </template>
        <template v-if="props.column.dataIndex === 'actions'">
          <div class="flex gap-2">
            <a-button :loading="loading" danger type="primary" @click="deleteCategory(props.record.id)">{{ $t("Удалить") }}</a-button>
            <a-button :loading="loading" class="bg-yellow-500 hover:(!bg-yellow-400)" type="primary" @click="setUpdateModal(props.record)">{{
              $t("Изменить")
            }}</a-button>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>
