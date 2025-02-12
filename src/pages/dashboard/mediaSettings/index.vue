<script setup>
import { authService } from "@/services/auth";
import { mediaService } from "@/services/MediaService";
import { fileService } from "@/services/fileUpload";
import { useTranslation } from "i18next-vue";
import { onMounted, ref, watch } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";

const { i18next } = useTranslation();
const locale = i18next.language;
const data = ref([]);
const loading = ref(false);
const addModal = ref(false);

const mediaTypes = ref([
  {
    id: 1,
    name: "Статьи",
  },
  {
    id: 2,
    name: "Новости",
  },
  {
    id: 3,
    name: "Видео",
  },
]);

const addForm = ref({
  id: 0,
  title: "",
  description: "",
  tags: "",
  socialMediaTypeId: "",
  mediaDtos: [
    {
      id: 0,
      downLoadPath: "",
      youtubeLink: "",
    },
  ],
});

const addMediaLink = () => {
  addForm.value.mediaDtos.push({
    id: Date.now(),
    downLoadPath: "",
    youtubeLink: "",
  });
};

const removeMediaLink = item => {
  const index = addForm.value.mediaDtos.indexOf(item);
  if (index !== -1) {
    addForm.value.mediaDtos.splice(index, 1);
  }
};

async function getAll() {
  loading.value = true;
  const response = await mediaService.GetAll();
  data.value = response;
  loading.value = false;
}

const downloadImage = () => {
  fileInput.value.click();
};

onMounted(() => {
  getAll();
});
</script>

<template>
  <div class="container">
    <div class="flex justify-end mb-5">
      <a-button type="primary" @click="addModal = true" v-if="authService.CheckOnePermission(11000)">{{ $t("Создать") }}</a-button>
    </div>

    <!-- Table Media -->
    <pre>{{ data }}</pre>
    <!-- Создать (new-media) -->
    <a-modal v-model:open="addModal" width="1000px" :title="$t('Добавить Медиа')" :footer="false">
      <div class="py-5 grid grid-cols-2 gap-3 gap-y-5">
        <a-input v-model:value="addForm.tags" :placeholder="$t('Теги')" />
        <a-select v-model:value="addForm.socialMediaTypeId" :placeholder="$t('Тип медиа')" class="w-full">
          <a-select-option v-for="item in mediaTypes" :value="item.id">{{ item.name }}</a-select-option>
        </a-select>
        <a-textarea class="col-span-2" v-model:value="addForm.title" :placeholder="$t('Заголовок')" />
        <a-textarea class="col-span-2" v-model:value="addForm.description" :placeholder="$t('Описание')" />
      </div>
      <div class="flex justify-end gap-3 mt-5">
        <a-button key="back" @click="addModal = false">{{ $t("Отменитиь") }}</a-button>
        <a-button key="submit" type="primary" @click="addMedia">{{ $t("Создать") }}</a-button>
      </div>
    </a-modal>
  </div>
</template>
