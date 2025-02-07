<script setup>
import { ref, onMounted, reactive, watch } from "vue";
import { roleService } from "@/services/RoleService";
import { authService } from "@/services/auth";
import { useTranslation } from "i18next-vue";

const { i18next } = useTranslation();
const locale = i18next.language;

const data = ref([]);
const allPermnissions = ref([]);

const newUserModal = ref(false);
const newUser = ref({
  name: "",
  permissions: [],
});

const updateUserModal = ref(false);
const updateUserForm = ref({
  id: null,
  name: "",
  permissions: [],
});

watch(newUserModal, value => {
  if (!value) {
    newUser.value = {
      name: "",
      permissions: [],
    };
  }
});

watch(updateUserForm, value => {
  if (!value) {
    updateUserForm.value = {
      id: null,
      name: "",
      permissions: [],
    };
  }
});

async function handleEditClick(record) {
  const response = await roleService.GetById(record.id);
  const permissions = response?.permissions.map(e => e.id);
  if (permissions) updateUserForm.value = { ...record, permissions };
  else updateUserForm.value = { ...record, permissions: [] };

  updateUserModal.value = true;
}

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

async function deleteUser(item) {
  const response = await roleService.Delete(item.id);
  if (response) getAll();
}

async function updateUser() {
  const response = await roleService.Update(updateUserForm.value);
  if (response) {
    updateUserModal.value = false;
    getAll();
  }
}

async function createNewUser() {
  const response = await roleService.Create(newUser.value);
  if (response) {
    newUserModal.value = false;
    getAll();
  }
}

onMounted(async () => {
  await getAll();
  await getAllPermissions();
});

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
    width: 240,
  },
];
</script>

<template>
  <div class="container">
    <div class="flex justify-end mb-5">
      <a-button type="primary" @click="newUserModal = true" v-if="authService.CheckOnePermission(1000)">{{ $t("Создать") }}</a-button>
    </div>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          {{ text }}
        </template>
        <template v-if="column.dataIndex === 'actions'">
          <div class="flex gap-2">
            <a-button type="primary" @click="handleEditClick(record)">{{ $t("Изменить") }}</a-button>
            <a-button @click="deleteUser(record)" class="bg-red-500 text-white !hover:(text-white border-white)">{{ $t("Удалить") }}</a-button>
          </div>
        </template>
      </template>
    </a-table>

    <!-- Создать (new-user) -->
    <a-modal v-model:open="newUserModal" :title="$t('Создать роль')" :footer="false">
      <div class="py-5">
        <a-input v-model:value="newUser.name" :placeholder="$t('Название')" />
        <a-select v-model:value="newUser.permissions" mode="multiple" :placeholder="$t('Разрешения')" class="w-full mt-5">
          <a-select-option v-for="item in allPermnissions" :value="item.id">{{ item.name?.[locale] }}</a-select-option>
        </a-select>
      </div>
      <div class="flex justify-end gap-3 mt-5">
        <a-button key="back" @click="newUserModal = false">{{ $t("Отменитиь") }}</a-button>
        <a-button key="submit" type="primary" @click="createNewUser">{{ $t("Создать") }}</a-button>
      </div>
    </a-modal>

    <!-- Изменить (new-user) -->
    <a-modal v-model:open="updateUserModal" :title="$t('Изменить')" :footer="false">
      <div class="py-5">
        <a-input v-model:value="updateUserForm.name" :placeholder="$t('Название')" />
        <a-select v-model:value="updateUserForm.permissions" mode="multiple" :placeholder="$t('Разрешения')" class="w-full mt-5">
          <a-select-option v-for="item in allPermnissions" :value="item.id">{{ item.name?.[locale] }}</a-select-option>
        </a-select>
      </div>
      <div class="flex justify-end gap-3 mt-5">
        <a-button key="back" @click="updateUserModal = false">{{ $t("Отменитиь") }}</a-button>
        <a-button key="submit" type="primary" @click="updateUser">{{ $t("Сохранить") }}</a-button>
      </div>
    </a-modal>
  </div>
</template>
