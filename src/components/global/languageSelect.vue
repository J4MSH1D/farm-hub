<script setup>
import { useTranslation } from "i18next-vue";
import { ref } from "vue";

const { i18next } = useTranslation();
const language = ref(i18next.language);

function changeLanguage(lang) {
  i18next.changeLanguage(lang);
}

defineProps({
  size: String,
});
</script>

<template>
  <a-select class="min-w-[110px]" v-model:value="language" @change="changeLanguage" :size="size" :get-popup-container="trigger => trigger.parentNode">
    <a-select-option value="uz">
      <div class="flex items-center gap-2">
        <icon name="uzbek-flag-rounded" is-svg-raw class="h-4 w-4" />
        <span>O'z</span>
      </div>
    </a-select-option>
    <a-select-option value="ru">
      <div class="flex items-center gap-2">
        <icon name="russian-flag-rounded" is-svg-raw class="h-4 w-4" />
        <span>Рус</span>
      </div>
    </a-select-option>
    <a-select-option value="en">
      <div class="flex items-center gap-2">
        <icon name="america-flag.png" class="h-4.5 w-4.5" />
        <span>Eng</span>
      </div>
    </a-select-option>
    <a-select-option value="cyrl">
      <div class="flex items-center gap-2">
        <icon name="uzbek-flag-rounded" is-svg-raw class="h-4 w-4" />
        <span>Ўз</span>
      </div>
    </a-select-option>
  </a-select>
</template>
