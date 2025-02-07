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
    filters: [{ text: "Yo'qlari", value: "" }],
    width: "20%",
  },
  {
    title: "Uz",
    dataIndex: "uz",
    filters: [{ text: "Yo'qlari", value: "" }],
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
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.id)">Edit</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
