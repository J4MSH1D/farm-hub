<script setup>
import { onMounted, ref, reactive } from "vue";
import { langService } from "@/services/LangService";
import cloneDeep from "lodash/cloneDeep"; // cloneDeep ni import qilish kerak
import { message } from "ant-design-vue"; // Ant Design Vue xabarnoma uchun

const data = ref([]);
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
  await langService.Delete(id);
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
    filters: [
      { text: "Bo'shlari'", value: "empty" },
      { text: "To'liqlari", value: "filled" },
    ],
    onFilter: (value, record) => (value === "empty" ? !record.ru || record.ru.trim() === "" : record.ru && record.ru.trim() !== ""),
    width: "20%",
  },
  {
    title: "Uz",
    dataIndex: "uz",
    filters: [
      { text: "Bo'shlari'", value: "empty" },
      { text: "To'liqlari", value: "filled" },
    ],
    onFilter: (value, record) => (value === "empty" ? !record.uz || record.uz.trim() === "" : record.uz && record.uz.trim() !== ""),
  },

  {
    title: "operation",
    dataIndex: "operation",
  },
];

async function getAll() {
  try {
    const response = await langService.GetAll();
    data.value = response;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const copyToClipboard = async text => {
  try {
    await navigator.clipboard.writeText(text);
    message.success("Copied to clipboard!");
  } catch (err) {
    message.error("Copy failed!");
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
        <div class="flex items-center gap-2">
          <a-input v-if="editableData[record.id]" v-model:value="editableData[record.id][column.dataIndex]" style="margin: -5px 0" />
          <template v-else>
            {{ text }}
          </template>
          <a-button v-if="text" @click="copyToClipboard(text)" size="small">Copy</a-button>
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
            <a-button @click="edit(record.id)">Edit</a-button>
            <a-popconfirm title="Sure to delete?" @confirm="delete record.id">
              <a-button danger @click="Delete(record.id)">Delete</a-button>
            </a-popconfirm>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
