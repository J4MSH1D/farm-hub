<script setup>
import { ref, onMounted, reactive, watch, computed } from "vue";
import { useTranslation } from "i18next-vue";
import { categoryService } from "@/services/CategoryService";
import { categoryTypeService } from "@/services/CategoryTypeService";

const data = ref([]);
const categoryTypes = ref([]);
const { i18next } = useTranslation();
const locale = computed(() => i18next.language);
const loading = ref(false);
const createModal = ref(false);
const updateModal = ref(false);
const addData = ref({
  name: {
    uz: "",
    ru: "",
  },
  categoryTypeId: null,
});
const updateData = ref({
  name: {
    uz: "",
    ru: "",
  },
  categoryTypeId: null,
});

async function getCategoryTypes() {
  const response = await categoryTypeService.GetAllCategories();
  categoryTypes.value = response;
}

async function getAllCategories() {
  const response = await categoryService.GetAll();
  data.value = response;
}

function setUpdateModal(item) {
  updateModal.value = true;
  const categoryName = item.category.name;
  updateData.value = { id: item.id, name: { ...categoryName }, categoryTypeId: item.categoryType.id };
}

async function deleteCategory(id) {
  try {
    loading.value = true;
    const response = await categoryService.Delete(id);
    console.log(response);
    await getAllCategories();
  } finally {
    loading.value = false;
  }
}

async function onAdd() {
  try {
    loading.value = true;
    await categoryService.Create(addData.value);
    await getAllCategories();
    createModal.value = false;
  } finally {
    loading.value = false;
  }
}

async function onEdit() {
  try {
    loading.value = true;
    await categoryService.Update(updateData.value);
    await getAllCategories();
    updateModal.value = false;
  } finally {
    loading.value = false;
  }
}

watch(createModal, () => {
  addData.value = {
    name: {
      uz: "",
      ru: "",
    },
    categoryTypeId: null,
  };
});

watch(updateModal, () => {
  updateData.id = null;
  updateData.ru = updateData.uz = "";
});

onMounted(async () => {
  await getAllCategories();
  await getCategoryTypes();
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
      <!-- Create Modal -->
      <a-modal v-model:open="createModal" :footer="false">
        <a-form :model="addData" @finish="onAdd" class="mb-5 mt-10">
          <a-form-item name="uz" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-input size="large" v-model:value="addData.name.uz" placeholder="O'zbekcha" />
          </a-form-item>
          <a-form-item name="ru" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-input size="large" v-model:value="addData.name.ru" placeholder="Русский" />
          </a-form-item>
          <a-form-item name="categoryTypeId" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-select size="large" v-model:value="addData.categoryTypeId" :placeholder="$t('Категория')">
              <a-select-option v-for="item in categoryTypes" :value="item.id">{{ item.name["uz"] }}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item class="w-full">
            <a-button size="large" type="primary" class="!w-full" html-type="submit" @click="onAdd">{{ $t("Добавить") }}</a-button>
          </a-form-item>
        </a-form>
      </a-modal>

      <!-- Edit modal -->
      <a-modal v-model:open="updateModal" :footer="false">
        <a-form :model="updateData" @finish="onEdit" class="mb-5 mt-10">
          <a-form-item name="uz" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-input size="large" v-model:value="updateData.name.uz" placeholder="O'zbekcha" />
          </a-form-item>
          <a-form-item name="ru" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-input size="large" v-model:value="updateData.name.ru" placeholder="Русский" />
          </a-form-item>
          <a-form-item name="categoryTypeId" :rules="[{ required: true, message: $t('Обязательно к заполнению') }]">
            <a-select size="large" v-model:value="updateData.categoryTypeId" :placeholder="$t('Категория')">
              <a-select-option v-for="item in categoryTypes" :value="item.id">{{ item.name?.[locale] }}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item class="w-full">
            <a-button size="large" type="primary" class="!w-full" html-type="submit" @click="onEdit">{{ $t("Сохранить") }}</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>

    <!-- Table -->
    <a-table :dataSource="data" :columns="columns">
      <template v-slot:bodyCell="props">
        <template v-if="props.column.dataIndex === 'name'">
          <span>{{ props.record.category.name?.[locale] }}</span>
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
