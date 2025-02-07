<script setup>
import { ref } from "vue";
import regions from "@/enums/regions";
import leasingCompanies from "@/enums/leasingCompanies";

const form = ref({
  phone: "",
  creditAmount: null,
  surname: null,
  name: null,
  companyName: null,
  INN: null,
  email: null,
  region: null,
  leasingCompany: null,
});

function validator(rule, value) {
  if (!value) return Promise.reject("Обязательное поле");
}

const formRules = Object.keys(form.value).reduce((acc, curr) => {
  return { ...acc, [curr]: [{ required: true, validator, trigger: "blur" }] };
}, {});
</script>

<template>
  <div class="container py-8 pb-20">
    <h2 class="text-2xl text-center text-zinc-900 font-medium"></h2>

    <!-- Form -->
    <div class="max-w-[900px] mx-auto mt-14 z-10 rounded-2xl bg-white mt-3" style="box-shadow: 0 4px 25px rgba(0, 0, 0, 0.07)">
      <div class="border-b border-gray-200 p-8">
        <h2 class="text-2xl text-zinc-900 text-center font-medium">{{ $t("Заполните заявку на получение лизинга") }}</h2>
      </div>

      <div class="max-w-[700px] py-14 px-4 mx-auto">
        <a-form :model="form" :rules="formRules" class="grid grid-cols-2 gap-x-5" size="large">
          <a-form-item has-feedback name="phone">
            <a-input v-model:value="form.phone" prefix="+998" placeholder="(__) ___ __ __*" />
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
              <a-select-option v-for="item in regions" :value="item">{{ item }}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item has-feedback name="bank" class="col-span-2">
            <a-select v-model:value="form.leasingCompany" :placeholder="$t('Выберите лизинговую компанию') + '*'">
              <a-select-option v-for="item in leasingCompanies" :value="item">{{ item }}</a-select-option>
            </a-select>
          </a-form-item>

          <p class="text-xs text-zinc-500 mb-5">* {{ $t("Все поля обязательные") }}</p>

          <a-form-item has-feedback class="col-span-2 m-0">
            <a-checkbox>
              {{ $t("Даю своё согласие на обработку персональных данных и подтверждаю своё согласие с правилами") }}
            </a-checkbox>
          </a-form-item>

          <a-form-item class="mt-5">
            <a-button type="primary" html-type="submit" class="w-full !rounded-full" size="large">
              {{ $t("Отправить заявку") }}
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.policy-text ::v-deep(a) {
  color: #42ab44;
}
</style>
