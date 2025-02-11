<script setup>
import { useTranslation } from "i18next-vue";
import { computed, inject, toRefs } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const categories = inject("categories");
const { data } = toRefs(categories);
const modals = inject("modals");

const { i18next } = useTranslation();
const locale = computed(() => i18next.language);

function navigateCategory(index) {
  data.value.splice(index);
}
</script>

<template>
  <div class="container flex items-center justify-between">
    <h2 class="text-zinc-900 text-lg font-semibold flex items-center">
      <span class="mr-2 cursor-pointer" @click="router.push(`/category`)">{{ $t("Подкатегории") }}</span>
      <span v-for="(item, index) in data" class="cursor-pointer" @click="navigateCategory(index + 1)">
        >
        {{ item.category?.name?.[locale] }}&nbsp;
      </span>
    </h2>
    <a-button @click="modals.add.open = true" type="primary"> {{ $t("Создать") }} </a-button>
  </div>
</template>
