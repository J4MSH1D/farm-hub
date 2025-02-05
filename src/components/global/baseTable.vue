<script setup>
import { useFetch } from "@/composables/useFetch";
import { computed, onMounted, ref, toRef, watch } from "vue";

const { $get, data, total } = useFetch();

const props = defineProps({
  isCreate: {
    type: Boolean,
    default: false,
  },
  columns: Array,
  url: String,
  isTableCount: Number,
});

const isTableCount = toRef(props, "isTableCount");

const emit = defineEmits(["create-form", "update:data"]);

const current = ref(1);
const pageSize = ref(10);

const pagination = computed(() => ({
  current: current.value,
  pageSize: pageSize.value,
  total: total.value,
  onChange(page) {
    current.value = page;
    fetchData();
  },
  showTotal(total) {
    return `Total ${total} items`;
  },
}));

const fetchData = async () => {
  const skip = (current.value - 1) * pageSize.value;
  const take = pageSize.value;

  await $get(props.url, {
    skip: skip,
    take: take,
  });
  emit("update:data", data.value);
};

const handleCreateForm = async () => {
  emit("create-form");
};

watch(isTableCount, async () => {
  await fetchData();
});

onMounted(async () => {
  if (props.url) {
    await fetchData();
    if (!Array.isArray(data.value)) {
      data.value = [data.value];
    }
  }
});
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-end" v-if="props.isCreate">
      <a-button size="large" tdype="primary" @click="handleCreateForm">Create</a-button>
    </div>
    <a-table
      class="bg-white rounded-md"
      :data-source="data"
      :columns="props.columns"
      bordered
      :pagination="pagination.total ? pagination : false"
      :scroll="{ x: 1200 }"
    >
      <template #bodyCell="{ column, record }">
        <slot name="bodyCell" :column="column" :record="record">
          <!-- Default rendering -->
          {{ record[column.dataIndex] }}
        </slot>
      </template>
    </a-table>
  </div>
</template>
