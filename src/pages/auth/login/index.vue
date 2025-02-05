<script setup>
import { onMounted, ref } from "vue";
import { useEimzo } from "@/composables/eimzo";
import { message } from "ant-design-vue";
import storage from "@/utils/storageService";
import { useRouter } from "vue-router";

const { getAllUserKeys, signWithEsiId } = useEimzo(),
  keys = ref([]),
  selectedValue = ref(null),
  router = useRouter();

async function getAllKeys() {
  keys.value = await getAllUserKeys();
}

async function sign() {
  try {
    // await signWithEsiId(selectedValue.value);
    // let user = keys.value.find(key => key["esiId"] === selectedValue.value),
    //   storedData = {
    //     ...user,
    //     permissions: [1, 2, 3],
    //   };
    // storage.set("accessToken", JSON.stringify(storedData));
    router.push("/profile/root");
  } catch {
    message.error("Ошибка подписи с ключом E-IMZO");
  }
}

onMounted(async () => {
  await getAllKeys();
});
</script>
<template>
  <div class="container my-40 grid grid-cols-2 gap-30">
    <div>
      <div class="text-center">
        <div class="font-medium text-xl">Авторизация в сервисах</div>
        <div class="mt-5 font-bold text-2xl">Управляйте своим бизнесом на <span class="font-bold text-3xl text-mainGreen">Mening tomorqam</span></div>
        <div class="mt-5 text-gray-400">Управляйте своим аккаунтом: "Товары", "Услуги", "Работа"</div>
        <div class="mt-5 text-gray-400"><router-link to="/" class="underline">Вернуться на главную страницу</router-link></div>
      </div>
    </div>
    <div class="bg-white rounded-3xl py-10 px-20">
      <div class="text-center font-medium text-2xl">Войдите в личный кабинет</div>
      <div class="my-5">
        <a-select v-model:value="selectedValue" class="w-full" size="large" placeholder="Выберите ключ E-IMZO">
          <a-select-option v-for="key in keys" :value="key['esiId']">{{ key["CN"] }}</a-select-option>
        </a-select>
      </div>
      <div class="my-5">
        <a-button size="large" @click="sign" class="min-w-full" type="primary">Авторизоваться</a-button>
      </div>
    </div>
  </div>
</template>
