<script setup>
import { fileService } from "@/services/fileUpload";
import { ref, watch } from "vue";

const model = defineModel();
const emit = defineEmits(["delete", "upload"]);
const props = defineProps({ contentClass: String });

const base64Image = ref(null);
const fileList = ref([]);

watch(model, value => {
  if (value) {
    const formData = new FormData();
    formData.append("file", value);
    UploadFile(formData);
    // const reader = new FileReader();
    // reader.readAsDataURL(value);
    // reader.onload = () => {
    //   base64Image.value = reader.result;
    //   emit("upload", value, reader.result);
    // };
  } else {
    base64Image.value = null;
  }
});

watch(fileList, value => {
  if (value.length) model.value = value[0].originFileObj;
});

async function UploadFile(file) {
  const data = await fileService.PostUploadFile(file);
  console.log(data);
  model.value = data;
}

function deleteFile() {
  model.value = null;
  fileList.value = [];
  emit("delete");
}
</script>

<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    accept="image/png, image/jpeg"
    :multiple="false"
    :show-upload-list="false"
    :before-upload="() => false"
    class="max-w-[500px] mt-8"
  >
    <div class="grid grid-cols-2 gap-5 px-3" :class="contentClass">
      <!-- file-image -->
      <div class="max-w-[200px] w-full aspect-square">
        <div v-if="base64Image" class="flex-1 h-full border border-green-300 border-dashed rounded-2xl">
          <img :src="base64Image" alt="Uploaded Image" class="h-full w-full object-contain" />
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
        <a-button class="px-7" v-if="model" @click.stop="deleteFile()">{{ $t("Удалить") }}</a-button>
        <a-button class="px-7" v-else>{{ $t("Выбрать") }}</a-button>
      </div>
    </div>
  </a-upload-dragger>
</template>
