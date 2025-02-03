<script setup>
import { useRouter } from "vue-router";
import storage from "@/utils/storageService";

const router = useRouter();

function logOut() {
  storage.logOut();
  router.push("/auth/login");
}
</script>
<template>
  <header class="sticky top-0 left-0 w-full bg-white">
    <div class="pt-6 container flex justify-between">
      <router-link to="/" class="text-gray-400 underline">Главная страница</router-link>
      <div class="flex gap-5">
        <span>О площадке</span>
        <span>Помощь</span>
      </div>
    </div>
    <a-divider />
    <div class="flex justify-between items-center pb-6 container">
      <router-link to="/">
        <icon name="logo" is-svg />
      </router-link>
      <div class="flex items-center gap-5">
        <div>
          <a-dropdown>
            <a-button class="flex justify-center items-center" shape="circle" size="large">
              <icon name="user-grey" is-svg />
            </a-button>
            <template #overlay>
              <div class="bg-white border p-3 rounded">
                <a-button type="danger" @click="logOut">Выход</a-button>
              </div>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
    <div></div>
  </header>
</template>
