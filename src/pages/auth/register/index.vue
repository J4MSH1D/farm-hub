<script setup>
import { onMounted, ref, reactive } from "vue";
import { useEimzo } from "@/composables/eimzo";
import { message } from "ant-design-vue";
import storage from "@/utils/storageService";
import { useRouter } from "vue-router";
import { authApiService } from "@/services/AuthService";
import { useStore } from "vuex";

const { getAllUserKeys, signWithEsiId } = useEimzo(),
  keys = ref([]),
  router = useRouter(),
  userData = reactive({
    selectedUser: null,
  }),
  store = useStore();

async function getAllKeys() {
  keys.value = await getAllUserKeys();
}

const onFinish = async values => {
  try {
    const signature = await signWithEsiId(userData.selectedUser),
      roleId = 1;
    const data = { signature, roleId };
    const response = await authApiService.RegisterByEimzo(data);
    await store.dispatch("getUser");
    storage.set("accessToken", response.content.accessToken);
    router.push("/my-transactions");
  } catch (err) {
    console.log(err);
    message.error("Ошибка подписи с ключом E-IMZO");
  }
};
const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};

onMounted(async () => {
  await getAllKeys();
});
</script>
<template>
  <div class="container my-40 grid grid-cols-2 gap-30">
    <div>
      <div class="text-center">
        <div class="font-medium text-xl">{{ $t("Авторизация в сервисах") }}</div>
        <div class="mt-5 font-bold text-2xl">
          {{ $t("Управляйте своим бизнесом на") }} <span class="font-bold text-3xl text-mainGreen">Mening tomorqam</span>
        </div>
        <div class="mt-5 text-gray-400">{{ $t("Управляйте своим аккаунтом: 'Товары', 'Услуги', 'Работа'") }}</div>
        <div class="mt-5 text-gray-400">
          <router-link to="/" class="underline">{{ $t("Вернуться на главную страницу") }}</router-link>
        </div>
      </div>
    </div>
    <a-form :model="userData" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed" class="bg-white rounded-3xl py-10 px-20">
      <div class="text-center font-medium text-2xl">{{ $t("Войдите в личный кабинет") }}</div>
      <a-form-item name="selectedUser" :rules="[{ required: true, message: 'Выберите ключ E-IMZO!' }]" class="mt-5">
        <a-select v-model:value="userData.selectedUser" class="w-full" size="large" placeholder="Выберите ключ E-IMZO">
          <a-select-option v-for="key in keys" :value="key['esiId']">{{ key["CN"] }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="my-5">
        <a-button html-type="submit" size="large" class="min-w-full" type="primary">{{ $t("Авторизоваться") }}</a-button>
      </a-form-item>
      <div class="mt-10 text-center">
        <router-link to="/auth/login" class="underline text-gray-400 text-sm">{{ $t("Есть аккаунт? Вход") }}</router-link>
      </div>
    </a-form>
  </div>
</template>
