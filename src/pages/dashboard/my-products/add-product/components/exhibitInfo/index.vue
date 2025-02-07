<script setup>
import { inject } from "vue";

const form = inject("form");
</script>

<template>
  <section class="py-2">
    <p class="text-xl text-green-500 mt-3 border-b border-green-500 border-dashed py-2">{{ $t("Информация о выставлении") }}</p>
    <!-- Form -->
    <a-form class="mt-3">
      <div class="flex-1 grid auto-cols-max grid-cols-4 gap-x-5 gap-y-2">
        <!-- Количество -->
        <a-form-item :label="$t('Количество')" :labelCol="{ span: 24 }">
          <a-input :placeholder="$t('Количество')" v-model="form.quantity" />
        </a-form-item>
        <!-- Ед.измерения -->
        <a-form-item :label="$t('Ед.измерения')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Ед.измерения')" v-model="form.unit" />
        </a-form-item>
        <!-- Цена за единицу -->
        <a-form-item :label="$t('Цена за единицу')" :labelCol="{ span: 24 }">
          <a-input :placeholder="$t('Цена за единицу')" v-model="form.unitPrice" />
        </a-form-item>
        <!-- Срок (день) -->
        <a-form-item :label="$t('Срок (день)')" :labelCol="{ span: 24 }">
          <a-input :placeholder="$t('Срок (день)')" v-model="form.deadline" />
        </a-form-item>
        <!-- Марка товара -->
        <a-form-item :label="$t('Марка товара')" :labelCol="{ span: 24 }">
          <a-input :placeholder="$t('Марка товара')" v-model="form.mark" />
        </a-form-item>
        <!-- Тип контракта -->
        <a-form-item :label="$t('Тип контракта')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Тип контракта')" v-model="form.contractType" />
        </a-form-item>
        <!-- Валюта контракта -->
        <a-form-item :label="$t('Валюта контракта')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Валюта контракта')" v-model="form.contractCurrency" />
        </a-form-item>
        <!-- Условия поставки -->
        <a-form-item :label="$t('Условия поставки')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Условия поставки')" v-model="form.termsOfDelivery" />
        </a-form-item>
      </div>

      <!-- description -->
      <a-form-item
        class="flex-1 mt-3"
        :label="$t('Дополнительная информация о товаре (Особые условия, местонахождение и т.д )')"
        :labelCol="{ span: 24 }"
      >
        <a-textarea
          v-model="form.description"
          :placeholder="$t('Дополнительная информация о товаре')"
          :auto-size="{ minRows: 3, maxRows: 10 }"
          style="resize: none"
        />
      </a-form-item>
    </a-form>
  </section>
</template>
