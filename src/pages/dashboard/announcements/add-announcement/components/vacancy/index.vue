<script setup>
import ImageUploader from "@/components/global/imageUploader.vue";
import { ref, watch } from "vue";
import { reactive } from "vue";

const form = reactive({
  category: null,
  name: "",
  experience: "",
  specialization: "",
  salary: "",
  description: "",
  address: "",
  phone: "",
  email: "",
  image: null,
});

const negotiable = ref(false);

watch(negotiable, value => {
  if (value) form.price = "";
});

function saveAsDraft() {}
function publish() {}
</script>

<template>
  <section class="py-5">
    <div>
      <!-- =========== Step - 1 (Общая информация) =========== -->
      <div class="relative grid grid-cols-[45px,auto] gap-5">
        <!-- step-number -->
        <div class="flex flex-col items-center gap-2 pb-2">
          <div class="bg-yellow-400 w-full aspect-square rounded-xl flex items-center justify-center">
            <span class="text-xl font-semibold text-white">1</span>
          </div>
          <hr class="border-0 flex-grow w-[2px] rounded-full bg-red-200" />
        </div>

        <!-- content -->
        <div class="py-2 pb-5">
          <h3 class="text-xl text-gray-500 font-medium">{{ $t("Общая информация") }}</h3>
          <a-form class="grid grid-cols-2 gap-3">
            <!-- Введите должность  -->
            <a-form-item :label="$t('Введите должность')" :labelCol="{ span: 24 }">
              <a-select v-model:value="form.category"></a-select>
            </a-form-item>
            <!-- Тип занятости -->
            <a-form-item :label="$t('Тип занятости')" :labelCol="{ span: 24 }">
              <a-input v-model:value="form.name" />
            </a-form-item>
            <!-- Опыт -->
            <a-form-item :label="$t('Опыт')" :labelCol="{ span: 24 }">
              <a-input v-model:value="form.experience" />
            </a-form-item>
            <!-- Специализация -->
            <a-form-item :label="$t('Специализация')" :labelCol="{ span: 24 }">
              <a-input v-model:value="form.specialization" />
            </a-form-item>
            <!-- Желаемая зарплата -->
            <a-form-item :label="$t('Желаемая зарплата')" :labelCol="{ span: 24 }">
              <div class="flex items-center gap-2">
                <a-input v-model:value="form.salary" />
                <a-checkbox v-model:checked="negotiable">{{ $t("Договорная") }}</a-checkbox>
              </div>
            </a-form-item>
            <!-- Описание -->
            <a-form-item :label="$t('Описание')" :labelCol="{ span: 24 }" class="col-span-2">
              <a-textarea v-model="form.description" :placeholder="$t('Описание')" :auto-size="{ minRows: 3, maxRows: 7 }" style="resize: none" />
            </a-form-item>
          </a-form>
        </div>
      </div>

      <!-- =========== Step - 2 (Контакты для связи) =========== -->
      <div class="relative grid grid-cols-[45px,auto] gap-5">
        <!-- step-number -->
        <div class="flex flex-col items-center gap-2 pb-2">
          <div class="bg-yellow-400 w-full aspect-square rounded-xl flex items-center justify-center">
            <span class="text-xl font-semibold text-white">2</span>
          </div>
          <hr class="border-0 flex-grow w-[2px] rounded-3xl bg-red-200" />
        </div>

        <!-- content -->
        <div class="py-2 pb-5">
          <h3 class="text-xl text-gray-500 font-medium">{{ $t("Контакты для связи") }}</h3>
          <a-form class="grid grid-cols-2 gap-3">
            <!-- Выберите адрес -->
            <a-form-item :label="$t('Выберите адрес')" :labelCol="{ span: 24 }">
              <a-select v-model:value="form.address"></a-select>
            </a-form-item>
            <!-- Способы связи -->
            <a-form-item :label="$t('Способы связи')" :labelCol="{ span: 24 }">
              <div class="flex gap-2">
                <a-input v-model:value="form.phone" prefix="+998" placeholder="(__)-___-__-__" />
                <a-input v-model:value="form.email" :placeholder="$t('E-mail')" />
              </div>
            </a-form-item>
          </a-form>
        </div>
      </div>

      <!-- =========== Step - 3 (Загрузите файл) =========== -->
      <div class="relative grid grid-cols-[45px,auto] gap-5">
        <!-- step-number -->
        <div class="flex flex-col items-center gap-2 pb-2">
          <div class="bg-yellow-400 w-full aspect-square rounded-xl flex items-center justify-center">
            <span class="text-xl font-semibold text-white">3</span>
          </div>
          <hr class="border-0 flex-grow w-[2px] rounded-3xl bg-red-200" />
        </div>

        <!-- content -->
        <div class="py-2 pb-5">
          <h3 class="text-xl text-gray-500 font-medium">{{ $t("Загрузите фото") }}</h3>
          <!-- file-uploader -->
          <ImageUploader v-model="form.image" />
        </div>
      </div>
    </div>

    <!-- Save and Send buttons -->
    <div class="flex justify-end gap-3 mt-20">
      <a-button size="large" @click="saveAsDraft">{{ $t("Сохранить в черновик") }}</a-button>
      <a-button size="large" @click="publish" class="border-green-600 text-green-600">{{ $t("Опубликовать") }}</a-button>
    </div>
  </section>
</template>
