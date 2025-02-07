<script setup>
import { inject } from "vue";

const form = inject("form");
</script>

<template>
  <section class="py-2">
    <p class="text-xl text-green-500 mt-3 border-b border-green-500 border-dashed py-2">{{ $t("Условия сделки") }}</p>
    <!-- Form -->
    <a-form class="flex-1 grid auto-cols-max grid-cols-4 gap-x-5 gap-y-2 mt-3">
      <!-- Тип гарантии -->
      <a-form-item :label="$t('Тип гарантии')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Тип гарантии')" v-model="form.guaranteeType" :get-popup-container="trigger => trigger.parentNode" />
      </a-form-item>
      <!-- Срок оплаты -->
      <a-form-item :label="$t('Срок оплаты')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Срок оплаты')" v-model="form.paymentDeadline" :get-popup-container="trigger => trigger.parentNode" />
      </a-form-item>
      <!-- Срок поставки -->
      <a-form-item :label="$t('Срок поставки')" :labelCol="{ span: 24 }">
        <a-input :placeholder="$t('Срок поставки')" v-model="form.deliveryDeadline" />
      </a-form-item>
      <!-- Залоговая сумма -->
      <a-form-item :label="$t('Залоговая сумма')" :labelCol="{ span: 24 }">
        <a-input :placeholder="$t('Залоговая сумма')" v-model="form.deposit" />
      </a-form-item>
      <!-- Наличие сертификата (заключения, лицензии, экспертизы) -->
      <a-form-item class="col-span-2" :label="$t('Наличие сертификата (заключения, лицензии, экспертизы)')" :labelCol="{ span: 24 }">
        <a-select :placeholder="$t('Наличие сертификата')" v-model="form.certificate" :get-popup-container="trigger => trigger.parentNode" />
      </a-form-item>
    </a-form>
  </section>
</template>
