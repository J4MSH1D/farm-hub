<script setup>
import { inject } from "vue";

const modals = inject("modals");
</script>

<template>
  <div class="container flex items-center justify-between">
    <h2 class="text-zinc-900 text-lg font-semibold flex items-center">
      {{ $t("Подкатегории") }}
    </h2>
    <a-button @click="modals.add.open = true" type="primary"> {{ $t("Создать") }} </a-button>
  </div>
</template>
