<script setup>
import FileUploader from "@/components/global/fileUploader.vue";
import { inject } from "vue";

const form = inject("form");

const documentTypes = [
  "Эпидемиологические заключения",
  "Ветеринарные заключения",
  "Фитосанитарные заключения",
  "Ветеринарно-санитарные заключения",
  "Экологическая экспертиза",
  "Наличие лицензии",
];
</script>

<template>
  <section class="py-2">
    <p class="text-xl text-green-500 mt-3 border-b border-green-500 border-dashed py-2">
      {{ $t("Наличие сопроводительной документации") }}
    </p>

    <div class="mt-8">
      <a-radio-group v-model:value="form.documentType" class="grid grid-cols-2 max-w-[800px] gap-3">
        <a-radio v-for="item in documentTypes" :value="item" class="text-zinc-900">{{ $t(item) }}</a-radio>
      </a-radio-group>

      <!-- Прикрепите файл: -->
      <div class="mt-10">
        <p class="text-zinc-900 font-medium">{{ $t("Прикрепите файл:") }}</p>

        <!-- File uploader -->
        <FileUploader v-model="form.documentation" />
      </div>
    </div>
  </section>
</template>
