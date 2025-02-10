<script setup>
import { useTranslation } from "i18next-vue";
import { inject, toRefs } from "vue";

const categories = inject("categories");
const { data } = toRefs(categories);
const modals = inject("modals");

const { i18next } = useTranslation();
const locale = i18next.language;

function navigateCategory(index) {
  data.value.splice(index + 1);
}
</script>

<template>
  <div class="container flex items-center justify-between">
    <h2 class="text-zinc-900 text-lg font-semibold flex items-center">
      <span class="mr-2 cursor-pointer" @click="navigateCategory(0)">{{ $t("Подкатегории") }}</span>
      <span v-for="(item, index) in data.slice(1)" class="cursor-pointer" @click="navigateCategory(index + 1)">
        >
        {{ item.category?.name?.[locale] }}&nbsp;
      </span>
    </h2>
    <a-button @click="modals.add.open = true" type="primary"> {{ $t("Создать") }} </a-button>
  </div>
</template>
