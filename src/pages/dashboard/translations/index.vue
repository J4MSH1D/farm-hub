<script setup>
import { onMounted, ref, reactive } from "vue";
import { langService } from "@/services/LangService";
import cloneDeep from "lodash/cloneDeep"; // cloneDeep ni import qilish kerak
import { message } from "ant-design-vue"; // Ant Design Vue xabarnoma uchun

const data = ref([]),
  loading = ref(false);
const editableData = reactive({});

const edit = id => {
  const item = data.value.find(item => item.id === id);
  if (item) {
    editableData[id] = cloneDeep(item);
  }
};

const save = id => {
  console.log(editableData[id]);
  langService.Update(editableData[id]);
  const index = data.value.findIndex(item => item.id === id);
  if (index !== -1 && editableData[id]) {
    Object.assign(data.value[index], editableData[id]);
    delete editableData[id];
  }
};

const cancel = id => {
  delete editableData[id];
};

async function Delete(id) {
  loading.value = true;
  await langService.Delete(id);
  loading.value = false;
}

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    sorter: true,
    width: "20%",
  },
  {
    title: "Ru",
    dataIndex: "ru",
    filters: [{ text: "Bo'shlari'", value: "empty" }],
    onFilter: (value, record) => (value === "empty" ? !record.ru || record.ru.trim() === "" : record.ru && record.ru.trim() !== ""),
    width: "30%",
  },
  {
    title: "Uz",
    dataIndex: "uz",
    filters: [{ text: "Bo'shlari'", value: "empty" }],
    onFilter: (value, record) => (value === "empty" ? !record.uz || record.uz.trim() === "" : record.uz && record.uz.trim() !== ""),
    width: "30%",
  },

  {
    title: "operation",
    dataIndex: "operation",
  },
];

async function getAll() {
  try {
    loading.value = true;
    const response = await langService.GetAll();
    data.value = response;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

const copyToClipboard = async text => {
  try {
    loading.value = true;
    await navigator.clipboard.writeText(text);
    message.success("Copied to clipboard!");
  } catch (err) {
    message.error("Copy failed!");
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await getAll();
});
</script>

<template>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, text, record }">
      <template v-if="['code', 'ru', 'uz', 'cyrl', 'eng'].includes(column.dataIndex)">
        <div class="flex items-center gap-2 justify-between">
          <a-input v-if="editableData[record.id]" v-model:value="editableData[record.id][column.dataIndex]" style="margin: -5px 0" />
          <template v-else>
            {{ text }}
          </template>
          <a-button :loading="loading" v-if="text" @click="copyToClipboard(text)" size="small">Copy</a-button>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.id]" class="flex gap-4">
            <a-typography-link @click="save(record.id)">Save</a-typography-link>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.id)">
              <a-button>Cancel</a-button>
            </a-popconfirm>
          </span>
          <span v-else class="flex gap-4">
            <a-button :loading="loading" type="primary" @click="edit(record.id)">Edit</a-button>
            <a-popconfirm title="Sure to delete?" @confirm="delete record.id">
              <a-button :loading="loading" type="primary" danger @click="Delete(record.id)">Delete</a-button>
            </a-popconfirm>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
