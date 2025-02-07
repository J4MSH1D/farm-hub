<script setup>
import { inject } from "vue";

const form = inject("form");
</script>

<template>
  <section class="py-2">
    <p class="text-xl text-green-500 mt-3 border-b border-green-500 border-dashed py-2">{{ $t("Информация о товаре") }}</p>
    <!-- Form -->
    <a-form class="flex justify-items-stretch mt-3 gap-6">
      <div class="flex-1 grid grid-cols-2 gap-x-5 gap-y-2">
        <!-- Наименование товара -->
        <a-form-item :label="$t('Наименование товара')" :labelCol="{ span: 24 }">
          <a-input :placeholder="$t('Наименование товара')" v-model="form.name" />
        </a-form-item>
        <!-- Выберите категорию -->
        <a-form-item :label="$t('Выберите категорию')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Выберите категорию')" v-model="form.category" />
        </a-form-item>
        <!-- Наименование сорта -->
        <a-form-item :label="$t('Наименование сорта')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Наименование сорта')" v-model="form.sortName" />
        </a-form-item>
        <!-- Тип сорта -->
        <a-form-item :label="$t('Тип сорта')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Тип сорта')" v-model="form.sortType" />
        </a-form-item>
        <!-- Марка товара -->
        <a-form-item :label="$t('Марка товара')" :labelCol="{ span: 24 }">
          <a-input :placeholder="$t('Марка товара')" v-model="form.mark" />
        </a-form-item>
        <!-- Упаковка -->
        <a-form-item :label="$t('Упаковка')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Упаковка')" v-model="form.package" />
        </a-form-item>
        <!-- Производитель -->
        <a-form-item :label="$t('Производитель')" :labelCol="{ span: 24 }">
          <a-input :placeholder="$t('Производитель')" v-model="form.manufacturer" />
        </a-form-item>
        <!-- Страна производителя -->
        <a-form-item :label="$t('Страна производителя')" :labelCol="{ span: 24 }">
          <a-select :placeholder="$t('Страна производителя')" v-model="form.manufacturerCountry" />
        </a-form-item>
      </div>

      <!-- description -->
      <a-form-item class="flex-1" :label="$t('Описание товара')" :labelCol="{ span: 24 }">
        <a-textarea v-model="form.description" :placeholder="$t('Описание товара')" :rows="10" style="resize: none" />
      </a-form-item>
    </a-form>
  </section>
</template>
