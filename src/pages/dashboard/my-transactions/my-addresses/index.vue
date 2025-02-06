<script setup>
import regions from "@/enums/regions";
import { ref } from "vue";

const addresses = ref([
  {
    region: "Ташкентская область",
    district: "г. Ташкент",
    address: "Ул. Бадамзар, д.51",
  },
]);
const addAddressModal = ref(false);
</script>

<template>
  <div class="container">
    <div class="flex items-center justify-between gap-5">
      <h2 class="text-2xl text-zinc-900 font-semibold">{{ $t("Управление адресами") }}</h2>

      <a-button size="large" class="group" @click="addAddressModal = true">
        <div class="flex items-center gap-2 text-sm">
          <icon name="plus400" is-svg-raw class="w-2.5 h-2.5 fill-zinc-900 duration-300 group-hover:fill-green-500" />
          <span>{{ $t("Добавить адрес") }}</span>
        </div>
      </a-button>
    </div>

    <!-- Address-list -->
    <ul>
      <li v-for="item in addresses" class="mt-8 border border-gray-200 rounded-2xl bg-sky-50 max-w-[400px] p-4">
        <h5 class="text-zinc-900 font-semibold mb-4">{{ $t("Адресс доставки") }}</h5>
        <div class="mt-3">
          <b class="font-medium">{{ $t("Область") }}:</b>&nbsp;
          <span class="text-zinc-500">{{ item.region }}</span>
        </div>
        <div class="mt-3">
          <b class="font-medium">{{ $t("Район") }}:</b>&nbsp;
          <span class="text-zinc-500">{{ item.district }}</span>
        </div>
        <div class="mt-3">
          <b class="font-medium">{{ $t("Адрес") }}:</b>&nbsp;
          <span class="text-zinc-500">{{ item.address }}</span>
        </div>
      </li>
    </ul>

    <!-- Address qoshish -->
    <a-modal v-model:open="addAddressModal" :title="$t('Добавить адрес')">
      <a-form class="py-4">
        <!-- region -->
        <a-form-item :label="$t('Область')" :labelCol="{ span: 24 }" :labelStyle="{ marginBottom: 0 }">
          <a-select :placeholder="$t('Введите Область')">
            <a-select-option v-for="item in regions" :value="item">{{ item }}</a-select-option>
          </a-select>
        </a-form-item>
        <!-- rayon -->
        <a-form-item :label="$t('Район')" :labelCol="{ span: 24 }" :labelStyle="{ marginBottom: 0 }">
          <a-select :placeholder="$t('Введите Район')">
            <a-select-option v-for="item in regions" :value="item">{{ item }}</a-select-option>
          </a-select>
        </a-form-item>
        <!-- address -->
        <a-form-item :label="$t('Адрес')" :labelCol="{ span: 24 }" :labelStyle="{ marginBottom: 0 }">
          <a-input :placeholder="$t('Введите Адрес')"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<style scoped>
::v-deep(.ant-form-item-label) {
  padding-bottom: 0 !important;
}
</style>
