<script setup>
import { onUnmounted, ref, watch } from "vue";
import links, { catalogue, quickLinks } from "./data/index";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Vue3Marquee } from "vue3-marquee";
import soon from "../main/soon.vue";
import regions from "@/enums/regions";
import languageSelect from "@/components/global/languageSelect.vue";

const route = useRoute();
const inputData = ref("");
const selectValue = ref("Product");
const region = ref("Город Ташкент");
const catalogueOpen = ref(false);
const catalogueType = ref("products");
const store = useStore();

watch([catalogueOpen, route], () => {
  if (catalogueOpen.value) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
});

onUnmounted(() => {
  document.body.style.overflow = "auto";
});

watch(route, () => {
  catalogueOpen.value = false;
});
</script>
<template>
  <div class="pb-5 shadow rounded-b-5xl bg-white sticky top-0 z-90 h-[110px]">
    <div class="h-[30px] bg-yellow-500 flex items-center mb-4">
      <Vue3Marquee :pause-on-hover="true" :duration="100" class="overflow-hidden">
        <p v-for="i in 15" class="mx-7 text-white">Сайт находится в режиме разработки</p>
      </Vue3Marquee>
    </div>
    <div class="container">
      <div class="flex items-center justify-start gap-x-10">
        <router-link to="/">
          <icon name="logo" is-svg />
        </router-link>
        <!-- Katalog (button) -->
        <button
          class="flex flex-row items-center gap-2 bg-green-500 py-2.5 px-8 rounded-xl hover:bg-green-600"
          @click="catalogueOpen = !catalogueOpen"
        >
          <icon name="category300" is-svg-raw class="h-4 w-4 fill-white" />
          <span class="text-white">Каталог</span>
        </button>
        <!-- searchbar (input) -->
        <div class="flex-grow flex items-center gap-4">
          <a-input-group compact class="!flex">
            <a-select v-model:value="selectValue" class="min-w-[145px]" size="large" :get-popup-container="trigger => trigger.parentNode">
              <a-select-option value="Product">Товары</a-select-option>
              <a-select-option value="Services">Услуги</a-select-option>
              <a-select-option value="Article">Обяъвления</a-select-option>
              <a-select-option value="Media">Медиа</a-select-option>
            </a-select>
            <a-input placeholder="Поиск" v-model:value="inputData" size="large" class="w-full" />
          </a-input-group>

          <!-- regions -->
          <a-select
            class="regions-select max-w-[200px] w-full"
            size="large"
            v-model="region"
            default-value="Все"
            :get-popup-container="trigger => trigger.parentNode"
          >
            <a-select-option v-for="item in regions" :value="item">{{ item }}</a-select-option>
          </a-select>

          <!-- language (select) -->
          <languageSelect size="large" />
        </div>

        <!-- Quick links -->
        <div class="flex items-center gap-5 m-0">
          <template v-for="item in quickLinks">
            <template v-if="item.path">
              <router-link :to="item.path" class="group flex flex-col items-center">
                <icon :name="item.icon" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
                <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ item.label }}</span>
              </router-link>
            </template>
            <template v-else>
              <span @click="store.commit(item.method)" class="group flex flex-col items-center cursor-pointer">
                <icon :name="item.icon" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
                <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ item.label }}</span>
              </span>
            </template>
          </template>
          <template v-if="store.getters.user">
            <router-link to="/dashboard/my-transactions" class="group flex flex-col items-center">
              <icon name="user300" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
              <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">Профиль</span>
            </router-link>
          </template>
          <template v-else>
            <router-link to="/auth/login" class="group flex flex-col items-center">
              <icon name="user300" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
              <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">Вход</span>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>

  <!-- KATALOGLAR -->
  <div
    class="fixed inset-0 top-auto z-90 h-[calc(100vh-130px-20px)] w-full bg-white rounded-t-5xl shadow-2xl overflow-y-auto flex"
    v-if="catalogueOpen"
  >
    <div class="container py-8 flex-grow flex flex-col">
      <div class="flex items-center gap-2">
        <button
          class="bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-sm"
          :class="{ 'bg-[#000] text-white': catalogueType === 'products' }"
          @click="catalogueType = 'products'"
        >
          Товары
        </button>
        <button
          class="bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-sm"
          :class="{ 'bg-[#000] text-white': catalogueType === 'services' }"
          @click="catalogueType = 'services'"
        >
          Услуги
        </button>
      </div>
      <div class="mt-5 flex items-start gap-5 w-full flex-grow overflow-y-auto">
        <div class="flex flex-col w-full">
          <div v-for="section in catalogue[catalogueType]" class="flex flex-wrap w-full mb-12">
            <div>
              <span class="text-2xl font-medium">
                {{ section.categoryName }}
              </span>
            </div>
            <div class="grid grid-cols-4 w-full gap-10 mt-10">
              <div
                v-for="item in section.categories"
                class="cursor-pointer border rounded-xl p-3 min-h-190px relative flex flex-col justify-center items-center transition hover:(shadow drop-shadow)"
              >
                <template v-if="item.image">
                  <icon :name="item.image" class="h-130px" />
                </template>
                <div class="font-bold text-xl text-center mt-3 text-center">{{ item.title }}</div>
              </div>
            </div>
            <!-- <pre>
              {{ section }}
            </pre> -->
          </div>
        </div>
        <!-- <pre>
          {{ catalogue[catalogueType] }}
        </pre> -->
      </div>
    </div>
  </div>
</template>

<style>
.overlayClass {
  padding-top: 10px;
}

.regions-select .ant-select-selector {
  background-color: #10b981 !important;
}
.regions-select .ant-select-selection-item {
  color: white !important;
}
.regions-select .ant-select-arrow {
  color: white !important;
}
</style>
