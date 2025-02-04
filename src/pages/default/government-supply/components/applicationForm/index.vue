<script setup>
import { ref } from "vue";

const form = ref({
  phone: null,
  creditAmount: null,
  surname: null,
  name: null,
  companyName: null,
  INN: null,
  email: null,
  region: null,
});

function validator(rule, value) {
  if (!value) return Promise.reject("Обязательное поле");
}

const formRules = Object.keys(form.value).reduce((acc, curr) => {
  return { ...acc, [curr]: [{ required: true, validator, trigger: "blur" }] };
}, {});

const regions = [
  "Республика Каракалпакстан",
  "Город Ташкент",
  "Андижанская область",
  "Ферганская область",
  "Наманганская область",
  "Ташкентская область",
  "Джизакская область",
  "Сырдарьинская область",
  "Самаркандская область",
  "Бухарская область",
  "Хорезмская область",
  "Кашкадарьинская область",
  "Сурхандарьинская область",
  "Навоийская область",
];
</script>

<template>
  <div class="container py-8">
    <div class="max-w-[900px] mx-auto">
      <!-- Form -->
      <div class="rounded-2xl bg-white overflow-hidden mt-3">
        <div class="border-b border-gray-200 p-8">
          <h2 class="text-2xl text-zinc-900 text-center font-medium">Заявка на кредит для малого бизнеса от BRB</h2>
        </div>

        <div class="max-w-[700px] py-14 px-4 mx-auto">
          <a-form :model="form" :rules="formRules" class="grid grid-cols-2 gap-x-5" size="large">
            <a-form-item has-feedback name="phone">
              <a-input v-model:value="form.phone" prefix="+998" placeholder="+998 (__) ___ __ __*" />
            </a-form-item>
            <a-form-item has-feedback name="creditAmount">
              <a-input v-model:value="form.creditAmount" placeholder="Сумма кредита, сум*" />
            </a-form-item>
            <a-form-item has-feedback name="surname">
              <a-input v-model:value="form.surname" placeholder="Фамилия*" />
            </a-form-item>
            <a-form-item has-feedback name="name">
              <a-input v-model:value="form.name" placeholder="Имя*" />
            </a-form-item>
            <a-form-item has-feedback name="companyName" class="col-span-2">
              <a-input v-model:value="form.companyName" placeholder="Название компании или ИНН*" />
            </a-form-item>
            <a-form-item has-feedback name="INN">
              <a-input v-model:value="form.INN" placeholder="ИНН компании*" />
            </a-form-item>
            <a-form-item has-feedback name="email">
              <a-input v-model:value="form.email" placeholder="Эл.почта*" />
            </a-form-item>
            <a-form-item has-feedback name="region" class="col-span-2">
              <a-select v-model:value="form.region" placeholder="Субъект Узбекистана*">
                <a-select-option v-for="item in regions" :value="item">{{ item }}</a-select-option>
              </a-select>
            </a-form-item>

            <p class="text-xs text-zinc-500 mb-5">* Все поля обязательные</p>

            <a-form-item has-feedback class="col-span-2 m-0">
              <a-checkbox
                >Даю своё <router-link to="/" class="text-green-500">согласие на обработку персональных данных</router-link> и подтверждаю своё
                согласие <router-link to="/" class="text-green-500">с правилами</router-link></a-checkbox
              >
            </a-form-item>
            <a-form-item has-feedback class="col-span-2">
              <a-checkbox
                >Даю своё
                <router-link to="/" class="text-green-500">согласие на информирование о продуктах, услугах, сервисах Банка</router-link></a-checkbox
              >
            </a-form-item>

            <a-form-item>
              <a-button type="primary" html-type="submit" class="w-full !rounded-full" size="large">Отправить заявку</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
