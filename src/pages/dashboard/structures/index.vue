<script setup>
import { ref, onMounted, reactive } from "vue";
import { roleService } from "@/services/RoleService";
import { authService } from "@/services/auth";

const data = ref([]),
  open = ref(false),
  allPermnissions = ref([]),
  newUserData = reactive({
    name: "",
    permissions: [],
  });

async function getAll() {
  const response = await roleService.GetAll();
  data.value = response;
  console.log(response);
}

async function getAllPermissions() {
  const response = await roleService.GetAllPermissions();
  allPermnissions.value = response;
  console.log(response);
}

const columns = [
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    ellipsis: true,
  },
  {
    title: "Действия",
    dataIndex: "actions",
    width: 150,
  },
];

onMounted(async () => {
  await getAll();
  await getAllPermissions();
});
</script>
<template>
  <div class="container">
    <div class="flex justify-end mb-5">
      <a-button type="primary" @click="open = !open" v-if="authService.CheckOnePermission(1000)">{{ $t("Создать") }}</a-button>
    </div>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          {{ text }}
        </template>
        <template v-if="column.dataIndex === 'actions'">
          <a-button type="primary">{{ $t("Изменить") }}</a-button>
        </template>
      </template>
    </a-table>
    <a-modal v-model:open="open" :title="$t('Создать роль')" :footer="false">
      <div></div>
    </a-modal>
  </div>
</template>
