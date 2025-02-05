<script setup>
import { useRouter } from "vue-router";
import storage from "@/utils/storageService";
import LanguageSelect from "@/components/global/languageSelect.vue";
import { useEimzo } from "@/composables/eimzo";
import { onMounted, ref } from "vue";

const router = useRouter();
const eimzo = useEimzo();
const userData = ref({});

onMounted(async () => {
  const userKeys = await eimzo.getAllUserKeys();
  userData.value = await userKeys[0];
});

function logOut() {
  storage.logOut();
  router.push("/auth/login");
}
</script>

<template>
  <header class="w-full z-90 bg-white border-b">
    <div class="flex items-center justify-between gap-5 px-5">
      <!-- left -->
      <div class="flex items-center gap-3">
        <a-input-search :placeholder="$t('Поиск по сайту')" />
        <a-button>{{ $t("Тёмный режим") }}</a-button>
      </div>

      <!-- right -->
      <div class="flex items-center gap-4">
        <a-date-picker />
        <language-select />
        <a-dropdown trigger="click" class="cursor-pointer select-none">
          <div class="max-w-[250px] text-left flex items-center gap-2 border-l px-4 py-4">
            <div class="aspect-square border rounded-full p-2">
              <icon name="user300" is-svg-raw class="h-5 w-5 fill-red" />
            </div>
            <div>
              <p class="text-xs text-zinc-500">{{ $t("Реквизиты") }}</p>
              <p class="text-sm text-zinc-900 line-clamp-1">{{ userData["CN"] }}</p>
            </div>
          </div>

          <template #overlay>
            <a-menu>
              <a-menu-item>
                <div class="flex items-center gap-2 py-1">
                  <icon name="settings400" is-svg-raw class="h-4 w-4 fill-zinc-500" />
                  <span class="text-zinc-500">Настройки аккаунта</span>
                </div>
              </a-menu-item>
              <a-menu-item>
                <div class="flex items-center gap-2 py-1">
                  <icon name="sign-out400" is-svg-raw class="h-4 w-4 fill-red-600" />
                  <span class="text-red-600">Выйти</span>
                </div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </header>
</template>

<style>
.ant-input-search-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
