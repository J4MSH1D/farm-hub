<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore(),
  radioValue = ref(null);
</script>

<template>
  <a-modal :open="store.state.requestModal" @ok="store.commit('toggleRequest')" @cancel="store.commit('toggleRequest')">
    <div class="py-5">
      <div>
        <div>Заявка на закупку</div>
        <div>Авторизуйтесь для отправки заявки</div>
      </div>
      <div>
        <div>Укажите важные для вас параметры товара, и мы подберём предложения под ваш запрос.</div>
        <div>Информация о товаре</div>
        <div>
          <a-input size="large" placeholder="Наименование товара" />
          <a-input size="large" placeholder="Категория товара" />
          <a-input size="large" placeholder="Количество" />
          <a-input size="large" placeholder="Еденица измерения" />
          <a-input size="large" placeholder="Ваш регион" />
          <a-input size="large" placeholder="Желаемая дата отгрузки" />
          <a-textarea :auto-size="{ minRows: 2, maxRows: 10 }" placeholder="Опишите товар, который вам нужен" />
        </div>
        <div>Прикрепить файлы</div>
        <div>
          <!-- <a-upload name="file">
            <a-button>
              <upload-outlined></upload-outlined>
              Выберите или перетащите файлы сюда
            </a-button>
          </a-upload> -->
        </div>
        <div>Размер файла не должен превышать 10 Мб. Вы можете прикрепить не более 10 файлов</div>
        <div>Цель покупки</div>
        <div>
          <a-radio-group v-model:value="radioValue" name="radioGroup">
            <a-radio value="1">Для собственных нужд</a-radio>
            <a-radio value="2">Для компании</a-radio>
          </a-radio-group>
        </div>
        <div>Контакты для связи</div>
        <div>
          <a-input size="large" placeholder="+998 " />
          <a-input size="large" placeholder="Email" />
          <a-input size="large" placeholder="Telegram" />
        </div>
        <div>
          <a-button size="large">Отправить заявку</a-button>
        </div>
        <div>*Обязательные поля</div>
      </div>
    </div>
  </a-modal>
</template>
