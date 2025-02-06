<script setup>
import { useTranslation } from "i18next-vue";
import { computed } from "vue";
import { type } from "windicss/utils";

const { i18next } = useTranslation();
const language = computed(() => i18next.language);

function changeLanguage(lang) {
  i18next.changeLanguage(lang);
}

defineProps({
  size: String,
});
</script>

<template>
  <a-select v-model:value="language" @change="changeLanguage" :size="size">
    <a-select-option value="uz">
      <div class="flex items-center gap-2">
        <icon name="uzbek-flag-rounded" is-svg-raw class="h-4 w-4" />
        <span>UZ</span>
      </div>
    </a-select-option>
    <a-select-option value="ru">
      <div class="flex items-center gap-2">
        <icon name="russian-flag-rounded" is-svg-raw class="h-4 w-4" />
        <span>RU</span>
      </div>
    </a-select-option>
  </a-select>
</template>
