<script setup>
import { ref, watch } from "vue";
import { inject } from "vue";

const form = inject("form");
const fileList = ref([]);

const documentTypes = [
  "Эпидемиологические заключения",
  "Ветеринарные заключения",
  "Фитосанитарные заключения",
  "Ветеринарно-санитарные заключения",
  "Экологическая экспертиза",
  "Наличие лицензии",
];

watch(fileList, value => {
  if (value.length) {
    const uploadedFile = value[0].originFileObj;
    console.log(uploadedFile);
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = () => (form.documentation = reader.result);
  }
});
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
        <a-upload-dragger
          v-model:fileList="fileList"
          :multiple="false"
          :show-upload-list="false"
          :before-upload="() => false"
          class="max-w-[500px] mt-4"
        >
          <div class="grid grid-cols-2 gap-5 px-3">
            <!-- file-image -->
            <div class="h-[200px] aspect-square">
              <div v-if="form.documentation" class="flex-1 h-full border border-green-300 border-dashed rounded-2xl">
                <img :src="form.documentation" alt="Uploaded Image" class="h-full w-full object-contain" />
              </div>
              <!-- file-upload-icon -->
              <div v-else class="border h-full border-blue-300 border-dashed rounded-2xl h-full flex items-center justify-center">
                <icon name="upload.png" class="h-1/2 w-1/2 object-contain" />
              </div>
            </div>

            <!-- file-upload-info -->
            <div class="flex-1 grid grid-rows-3 items-center justify-items-end">
              <div />
              <p class="text-zinc-900 font-medium">{{ $t("Перетащите файлы сюда или выберите в ручную") }}</p>
              <a-button class="px-7">{{ $t("Выбрать") }}</a-button>
            </div>
          </div>
        </a-upload-dragger>
      </div>
    </div>
  </section>
</template>
