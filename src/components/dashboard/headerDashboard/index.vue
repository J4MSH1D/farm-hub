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
  <header class="w-full py-5 z-90 bg-white">
    <div class="container flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a-input-search />
        <a-button>{{ $t("Тёмный режим") }}</a-button>
      </div>
    </div>
  </header>
</template>
