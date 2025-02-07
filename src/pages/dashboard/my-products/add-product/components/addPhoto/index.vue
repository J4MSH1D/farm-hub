<script setup>
import { inject, watch, ref } from "vue";

const form = inject("form");

const fileList = ref([]);

watch(fileList, value => {
  if (value.length) {
    const uploadedFile = value[0].originFileObj;
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = () => (form.image = reader.result);
  }
});
</script>

<template>
  <section class="py-2">
    <p class="text-xl text-green-500 mt-3 border-b border-green-500 border-dashed py-2">
      {{ $t("Добавить фото товара") }}
    </p>

    <a-upload-dragger v-model:fileList="fileList" :multiple="false" :show-upload-list="false" :before-upload="() => false" class="max-w-[500px] mt-8">
      <div class="grid grid-cols-2 gap-5 px-3">
        <!-- file-image -->
        <div class="h-[200px] aspect-square">
          <div v-if="form.image" class="flex-1 h-full border border-green-300 border-dashed rounded-2xl">
            <img :src="form.image" alt="Uploaded Image" class="h-full w-full object-contain" />
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
  </section>
</template>
