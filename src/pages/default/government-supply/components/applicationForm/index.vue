<script setup>
import { ref } from "vue";

const form = ref({
  number: null,
  creditAmount: null,
  surname: null,
  name: null,
  companyName: null,
  INN: null,
  email: null,
  region: null,
});

const regions = {};
</script>

<template>
  <div class="container py-8">
    <div class="max-w-[800px] rounded-2xl bg-white overflow-hidden mx-auto">
      <div class="border-b border-gray-200 p-8">
        <h2 class="text-2xl text-zinc-900 text-center font-medium">Заявка на кредит для малого бизнеса от Россельхозбанка</h2>
      </div>

      <div class="py-7 px-4">
        <a-form :model="form" class="grid grid-cols-2 gap-5">
          <a-form-item name="number">
            <a-input v-model:value="form.number" placeholder="(__) ___ __ __*" />
          </a-form-item>
          <a-form-item name="creditAmount">
            <a-input v-model:value="form.creditAmount" placeholder="Сумма кредита, сум*" />
          </a-form-item>
          <a-form-item name="surname">
            <a-input v-model:value="form.surname" placeholder="Фамилия*" />
          </a-form-item>
          <a-form-item name="name">
            <a-input v-model:value="form.name" placeholder="Имя*" />
          </a-form-item>
          <a-form-item name="companyName" class="col-span-2">
            <a-input v-model:value="form.companyName" placeholder="Название компании или ИНН*" />
          </a-form-item>
          <a-form-item name="INN">
            <a-input v-model:value="form.INN" placeholder="ИНН*" />
          </a-form-item>
          <a-form-item name="email">
            <a-input v-model:value="form.email" placeholder="Эл.почта*" />
          </a-form-item>
          <a-form-item name="region" class="col-span-2">
            <a-select v-model:value="form.region" placeholder="Субъект Узбекистана*" />
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
