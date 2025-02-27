<script setup>
import banks from "@/enums/banks";
import regions from "@/enums/regions";
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
  bank: null,
});

function validator(rule, value) {
  if (!value) return Promise.reject("Обязательное поле");
}

const formRules = Object.keys(form.value).reduce((acc, curr) => {
  return { ...acc, [curr]: [{ required: true, validator, trigger: "blur" }] };
}, {});
</script>

<template>
  <div class="container py-8">
    <div class="max-w-[900px] mx-auto">
      <!-- Form -->
      <div class="rounded-2xl bg-white overflow-hidden mt-3">
        <div class="border-b border-gray-200 p-8">
          <h2 class="text-2xl text-zinc-900 text-center font-medium">{{ $t("Заявка на кредит для малого бизнеса") }}</h2>
        </div>

        <div class="max-w-[700px] py-14 px-4 mx-auto">
          <a-form :model="form" :rules="formRules" class="grid grid-cols-2 gap-x-5" size="large">
            <a-form-item has-feedback name="phone">
              <a-input v-model:value="form.phone" prefix="+998" :placeholder="$t('(__) ___ __ __') + '*'" />
            </a-form-item>
            <a-form-item has-feedback name="creditAmount">
              <a-input v-model:value="form.creditAmount" :placeholder="$t('Сумма лизинга, сум') + '*'" />
            </a-form-item>
            <a-form-item has-feedback name="surname">
              <a-input v-model:value="form.surname" :placeholder="$t('Фамилия') + '*'" />
            </a-form-item>
            <a-form-item has-feedback name="name">
              <a-input v-model:value="form.name" :placeholder="$t('Имя') + '*'" />
            </a-form-item>
            <a-form-item has-feedback name="companyName" class="col-span-2">
              <a-input v-model:value="form.companyName" :placeholder="$t('Название компании') + '*'" />
            </a-form-item>
            <a-form-item has-feedback name="INN">
              <a-input v-model:value="form.INN" :placeholder="$t('ИНН компании') + '*'" />
            </a-form-item>
            <a-form-item has-feedback name="email">
              <a-input v-model:value="form.email" :placeholder="$t('Эл.почта') + '*'" />
            </a-form-item>
            <a-form-item has-feedback name="region" class="col-span-2">
              <a-select v-model:value="form.region" :placeholder="$t('Субъект Узбекистана') + '*'">
                <a-select-option v-for="item in regions" :key="item" :value="item">{{ $t(item) }}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item has-feedback name="bank" class="col-span-2">
              <a-select v-model:value="form.bank" :placeholder="$t('Выберите банк') + '*'">
                <a-select-option v-for="item in banks" :key="item" :value="item">{{ $t(item) }}</a-select-option>
              </a-select>
            </a-form-item>

            <p class="text-xs text-zinc-500 mb-5">* {{ $t("Все поля обязательные") }}</p>

            <a-form-item has-feedback class="col-span-2 m-0">
              <a-checkbox>
                {{ $t("Даю своё согласие на обработку персональных данных и подтверждаю своё согласие с правилами") }}
              </a-checkbox>
            </a-form-item>

            <a-form-item class="mt-6 col-span-2">
              <a-button type="primary" html-type="submit" class="w-full !rounded-full" size="large">{{ $t("Отправить заявку") }}</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
