<script setup>
import { ref } from "vue";
const value = ref("");
const isLoading = ref(false);
</script>
<template>
  <div class="flex bg-white justify-between items-center pt-12 pb-4 fixed w-full top-20 z-20 shadow-sm">
    <div class="container flex justify-between items-center gap-10">
      <router-link to="/dashboard/my-transactions">
        <a-button type="primary" size="large">{{ $t("Разместить объявление") }}</a-button>
      </router-link>
      <a-input-search
        size="large"
        v-model:value="value"
        @focus="isLoading = true"
        @blur="isLoading = false"
        placeholder="Ввод поиска загрузка с кнопкой ввода"
        :loading="isLoading"
        enter-button
      />
      <icon name="location.png" class="w-8 h-8 cursor-pointer" />
    </div>
  </div>
</template>
