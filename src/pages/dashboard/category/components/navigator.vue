<script setup>
import { useTranslation } from "i18next-vue";
import { inject } from "vue";

const categories = inject("categories");
const modals = inject("modals");

const { i18next } = useTranslation();
const locale = i18next.language;
</script>

<template>
  <div class="container flex items-center justify-between">
    <h2 class="text-zinc-900 text-lg font-semibold flex items-center">
      <span class="mr-2 cursor-pointer" @click="categories.splice(1)">{{ $t("Подкатегории") }}</span>
      <span v-for="(item, index) in categories.slice(1)" class="cursor-pointer" @click="nestedCategories.splice(index)">
        >
        {{ item.category.name?.[locale] }}
      </span>
    </h2>
    <a-button @click="modals.add.open = true" type="primary"> {{ $t("Создать") }} </a-button>
  </div>
</template>
