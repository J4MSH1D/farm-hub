<script setup>
import { useRouter } from "vue-router";
import storage from "@/utils/storageService";
import LanguageSelect from "@/components/global/languageSelect.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { authApiService } from "@/services/AuthService";

const router = useRouter();
const store = useStore();
const user = computed(() => store.getters.user);
const company = computed(() => store.getters.company);
const darkTheme = computed(() => store.state.darkTheme);

function toggleTheme() {
  store.commit("toggleTheme");
}

async function logOut() {
  await authApiService.Logout();
  storage.logOut();
  router.push("/auth/login");
}
</script>

<template>
  <header class="w-full z-90 bg-white border-b border-gray-200">
    <div class="flex items-center justify-end gap-5 px-5">
      <language-select />
      <a-dropdown trigger="click" class="cursor-pointer select-none">
        <div class="max-w-[250px] text-left flex items-center gap-2 border-l px-4 py-4">
          <div class="aspect-square border rounded-full p-2">
            <icon name="user300" is-svg-raw class="h-5 w-5 fill-red" />
          </div>
          <div>
            <p class="text-xs text-zinc-500">{{ $t("Реквизиты") }}</p>
            <p v-if="user && user['firstName'] && user['lastName']" class="text-sm text-zinc-900 line-clamp-1">
              {{ `${user["firstName"]} ${user["lastName"]}` }}
            </p>
          </div>
        </div>

        <template #overlay>
          <a-menu>
            <a-menu-item>
              <div class="flex items-center gap-2 py-1">
                <icon name="settings400" is-svg-raw class="h-4 w-4 fill-zinc-500" />
                <span class="text-zinc-500">{{ $t("Настройки аккаунта") }}</span>
              </div>
            </a-menu-item>
            <a-menu-item @click="logOut">
              <div class="flex items-center gap-2 py-1">
                <icon name="sign-out400" is-svg-raw class="h-4 w-4 fill-red-600" />
                <span class="text-red-600">{{ $t("Выход") }}</span>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
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
