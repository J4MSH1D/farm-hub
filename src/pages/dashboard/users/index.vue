<script setup>
import { authService } from "@/services/auth";
import { roleService } from "@/services/RoleService";
import { usersService } from "@/services/UsersService";
import { useTranslation } from "i18next-vue";
import { onMounted, ref, watch } from "vue";

const { i18next } = useTranslation();
const locale = i18next.language;

const users = ref([]);
const roles = ref([]);

const addModal = ref(false);
const addForm = ref({
  id: 0,
  firstName: "",
  lastName: "",
  middleName: "",
  fullName: "",
  pinfl: "",
  photo: null,
  login: "",
  password: "",
  roleId: null,
});

const editModal = ref(false);
const editForm = ref({
  id: 0,
  firstName: "",
  lastName: "",
  middleName: "",
  fullName: "",
  pinfl: "",
  photo: null,
  login: "",
  password: "",
  roleId: 0,
});

const columns = [
  {
    title: "Имя",
    key: "firstName",
    dataIndex: "firstName",
  },
  {
    title: "Фамилия",
    key: "lastName",
    dataIndex: "lastName",
  },
  {
    title: "Пинфл",
    key: "pinfl",
    dataIndex: "pinfl",
  },
  {
    title: "Роль",
    key: "role",
    dataIndex: "role",
  },
  {
    title: "Действия",
    key: "actions",
    dataIndex: "actions",
    width: 240,
  },
];

async function handleEditClick(record) {
  const response = await usersService.GetById(record.id);
  if (response) editForm.value = { ...response, roleId: response?.role?.id };
  editModal.value = true;
}

async function getAllRoles() {
  const response = await roleService.GetAll();
  if (response) roles.value = response;
}

async function getUsers() {
  const response = await usersService.GetAll();
  if (response) users.value = response;
}

async function addUser() {
  const response = await usersService.Create(addForm.value);
  if (response) {
    addModal.value = false;
    getUsers();
  }
}

async function updateUser() {
  const response = await usersService.Update(editForm.value);
  if (response) {
    editModal.value = false;
    getUsers();
  }
}

async function deleteUser(item) {
  const response = await usersService.Delete(item.id);
  if (response) {
    getUsers();
  }
}

watch(addModal, value => {
  if (!value) addForm.value = {};
});

watch(editModal, value => {
  if (!value) editForm.value = {};
});

onMounted(() => {
  getUsers();
  getAllRoles();
});
</script>

<template>
  <div class="container">
    <div class="flex justify-end mb-5">
      <a-button type="primary" @click="addModal = true" v-if="authService.CheckOnePermission(1000)">{{ $t("Создать") }}</a-button>
    </div>

    <!-- Table -->
    <a-table :columns="columns" :data-source="users">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.key === 'role'">
          {{ text.name }}
        </template>
        <template v-if="column.key === 'actions'">
          <div class="flex gap-2">
            <a-button type="primary" @click="handleEditClick(record)">{{ $t("Изменить") }}</a-button>
            <a-button @click="deleteUser(record)" class="bg-red-500 text-white !hover:(text-white border-white)">{{ $t("Удалить") }}</a-button>
          </div>
        </template>
      </template>
    </a-table>

    <!-- Создать (new-user) -->
    <a-modal v-model:open="addModal" :title="$t('Добавить Пользователья')" :footer="false">
      <div class="py-5 grid grid-cols-2 gap-3 gap-y-5">
        <a-input v-model:value="addForm.firstName" :placeholder="$t('Имя')" />
        <a-input v-model:value="addForm.lastName" :placeholder="$t('Фамилия')" />
        <a-input v-model:value="addForm.middleName" :placeholder="$t('Отчество')" />
        <a-input v-model:value="addForm.pinfl" :placeholder="$t('Пинфл')" />
        <a-input v-model:value="addForm.login" :placeholder="$t('Логин')" />
        <a-input v-model:value="addForm.password" :placeholder="$t('Пароль')" />
        <a-select v-model:value="addForm.roleId" :placeholder="$t('Разрешения')" class="w-full mt-5 col-span-2">
          <a-select-option v-for="item in roles" :value="item.id">{{ item.name }}</a-select-option>
        </a-select>
      </div>
      <div class="flex justify-end gap-3 mt-5">
        <a-button key="back" @click="addModal = false">{{ $t("Отменитиь") }}</a-button>
        <a-button key="submit" type="primary" @click="addUser">{{ $t("Создать") }}</a-button>
      </div>
    </a-modal>

    <!-- Изменить (new-user) -->
    <a-modal v-model:open="editModal" :title="$t('Изменить')" :footer="false">
      <div class="py-5 grid grid-cols-2 gap-3 gap-y-5">
        <a-input v-model:value="editForm.firstName" :placeholder="$t('Имя')" />
        <a-input v-model:value="editForm.lastName" :placeholder="$t('Фамилия')" />
        <a-input v-model:value="editForm.middleName" :placeholder="$t('Отчество')" />
        <a-input v-model:value="editForm.pinfl" :placeholder="$t('Пинфл')" />
        <a-input v-model:value="editForm.login" :placeholder="$t('Логин')" />
        <a-input v-model:value="editForm.password" :placeholder="$t('Пароль')" />
        <a-select v-model:value="editForm.roleId" :placeholder="$t('Разрешения')" class="w-full mt-5 col-span-2">
          <a-select-option v-for="item in roles" :value="item.id">{{ item.name }}</a-select-option>
        </a-select>
      </div>
      <div class="flex justify-end gap-3 mt-5">
        <a-button key="back" @click="editModal = false">{{ $t("Отменитиь") }}</a-button>
        <a-button key="submit" type="primary" @click="updateUser">{{ $t("Сохранить") }}</a-button>
      </div>
    </a-modal>
  </div>
</template>
