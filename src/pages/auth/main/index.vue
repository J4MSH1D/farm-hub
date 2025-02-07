<script setup>
import { message } from "ant-design-vue";
import { reactive } from "vue";
import { authApiService } from "@/services/AuthService";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import storage from "@/utils/storageService";
import { authService } from "@/services/auth";

const userData = reactive({ login: "", password: "" }),
  store = useStore(),
  router = useRouter();

const onFinish = async values => {
  const response = await authApiService.LoginWithEmail(userData);
  await store.dispatch("getUser");
  storage.set("accessToken", response.content.accessToken);
  if (authService.CheckOnePermission(10000)) {
    router.push("/translations");
  } else {
    router.push("/structures");
  }
};
const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};
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
      <a-form-item name="login" :rules="[{ required: true, message: 'Вводите логин!' }]" class="mt-5">
        <a-input size="large" v-model:value="userData.login" placeholder="Логин" />
      </a-form-item>
      <a-form-item name="password" :rules="[{ required: true, message: 'Вводите пароль!' }]" class="mt-10">
        <a-input-password size="large" v-model:value="userData.password" placeholder="Пароль" autocomplete="on" />
      </a-form-item>
      <a-form-item class="mt-10">
        <a-button class="w-full" type="primary" size="large" html-type="submit">{{ $t("Авторизоваться") }}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
