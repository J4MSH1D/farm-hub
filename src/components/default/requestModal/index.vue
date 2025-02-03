<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import regions from "../../../enums/regions";
import measure from "@/enums/measure";
import phoneNumber from "@/components/global/phoneNumber.vue";

const store = useStore(),
  fileList = ref([]),
  formState = reactive({
    name: "",
    category: null,
    count: null,
    measure: null,
    region: null,
    dateOfUpload: null,
    description: null,
    radioVal: "1",
    phoneNumber: "",
    email: "",
    telegram: "",
  }),
  categories = [
    "Сельхозтехника",
    "Запчасти",
    "Мини-заводы",
    "Оборудования",
    "Семена",
    "Посадочные материалы",
    "Средства защиты растений",
    "Удобрения",
    "Агрохимия",
    "Сад и огород",
    "Спецодежда",
    "Сельскохозяйственные животные",
    "Корма",
    "Ветеринария",
    "Зерно",
    "Упаковочные материалы",
    "Готовая продукция",
  ];
</script>

<template>
  <a-modal :open="store.state.requestModal" :footer="null" width="800px" @cancel="store.commit('toggleRequest')">
    <div class="py-5">
      <div class="text-center">
        <div class="text-2xl font-bold">Заявка на закупку</div>
        <div>Авторизуйтесь для отправки заявки</div>
      </div>
      <a-form :model="formState" autocomplete="off">
        <div class="mt-7">
          <div class="font-medium">Укажите важные для вас параметры товара, и мы подберём предложения под ваш запрос.</div>
          <div class="mt-2 font-medium">Информация о товаре</div>
          <div class="mt-2 grid grid-cols-2 gap-x-5">
            <a-form-item class="col-span-2" name="name" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <a-input v-model:value="formState.name" size="large" placeholder="Наименование товара*" />
            </a-form-item>
            <a-form-item class="col-span-2" name="category" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <a-select v-model:value="formState.category" placeholder="Категория товара*" size="large">
                <a-select-option v-for="i in categories" :value="i">{{ i }}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item name="count" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <a-input v-model:value="formState.count" size="large" placeholder="Количество*" />
            </a-form-item>
            <a-form-item name="measure" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <a-select v-model:value="formState.measure" placeholder="Еденица измерения*" size="large">
                <a-select-option v-for="i in measure" :value="i">{{ i }}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item name="region" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <a-select v-model:value="formState.region" placeholder="Ваш регион*" size="large">
                <a-select-option v-for="i in regions" :value="i">{{ i }}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item name="dateOfUpload" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <a-input v-model:value="formState.dateOfUpload" size="large" placeholder="Желаемая дата отгрузки*" />
            </a-form-item>
            <a-form-item class="col-span-2" name="description" :rules="[{ required: false }]">
              <a-textarea
                v-model:value="formState.description"
                :auto-size="{ minRows: 5, maxRows: 10 }"
                placeholder="Опишите товар, который вам нужен"
              />
            </a-form-item>
          </div>
          <div class="mt-5 font-bold">Прикрепить файлы</div>
          <div class="mt-3">
            <a-upload class="w-full" v-model:file-list="fileList" name="file">
              <a-button class="w-full"> Выберите или перетащите файлы сюда </a-button>
            </a-upload>
          </div>
          <div class="mt-2 text-gray-400">Размер файла не должен превышать 10 Мб. Вы можете прикрепить не более 10 файлов</div>
          <div class="mt-5 font-bold">Цель покупки</div>
          <div class="mt-2">
            <a-form-item name="radioVal" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <a-radio-group v-model:value="formState.radioVal" name="radioGroup">
                <a-radio value="1">Для собственных нужд</a-radio>
                <a-radio value="2">Для компании</a-radio>
              </a-radio-group>
            </a-form-item>
          </div>
          <div class="mt-5 font-bold">Контакты для связи</div>
          <div class="mt-2 grid grid-cols-2 gap-x-5">
            <a-form-item class="col-span-2" name="phoneNumber" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <phoneNumber class="w-full" size="large" v-model="formState.phoneNumber" />
              <!-- <a-input v-model:value="formState.phoneNumber" class="col-span-2" size="large" placeholder="+998 (__) ___-__-__*" /> -->
            </a-form-item>
            <a-form-item name="email" :rules="[{ required: true, message: 'Обязательно к заполнению' }]">
              <a-input v-model:value="formState.email" size="large" placeholder="Email*" />
            </a-form-item>
            <a-form-item name="telegram" :rules="[{ required: false }]">
              <a-input v-model:value="formState.telegram" size="large" placeholder="Telegram" />
            </a-form-item>
          </div>
          <div class="mt-5 flex justify-center items-center">
            <a-button :disabled="true" type="primary" @click="store.commit('toggleRequest')">Отправить заявку</a-button>
          </div>
          <div class="text-gray-400">*Обязательные поля</div>
        </div>
      </a-form>
    </div>
  </a-modal>
</template>
