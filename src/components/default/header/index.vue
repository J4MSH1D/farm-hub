<script setup>
import { computed, onUnmounted, ref, watch } from "vue";
import { catalogue, quickLinks } from "./data/index";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { Vue3Marquee } from "vue3-marquee";
import regions from "@/enums/regions";
import languageSelect from "@/components/global/languageSelect.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { authService } from "@/services/auth";
import bgHeader from "@/assets/images/png/bg-header.png";

const route = useRoute();
const inputData = ref("");
const selectValue = ref("Product");
const region = ref("Город Ташкент");
const catalogueOpen = ref(false);
const catalogueType = ref("products");
const store = useStore();
const router = useRouter();

const dataOptions = [
  {
    value: "products",
    payload: {
      name: "Products",
    },
  },
  {
    value: "services",
    payload: {
      name: "Services",
    },
  },
];

function navigateProfile() {
  if (authService.CheckOnePermission(6000)) {
    router.push("/structures");
  } else if (authService.CheckOnePermission(10000)) {
    router.push("/translations");
  } else {
    router.push("/my-transactions");
  }
}

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
  <div
    class="shadowCus sticky top-0 z-100 h-[140px] flex flex-col items-center"
    :style="{ backgroundImage: `url(${bgHeader})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
  >
    <div class="absolute w-full h-full top-0 left-0 bg-black/50"></div>
    <div class="h-[20px] w-full overflow-x-hidden bg-yellow-500 flex items-center mb-6 relative z-10">
      <Vue3Marquee :pause-on-hover="true" :duration="100" class="overflow-hidden">
        <p v-for="i in 15" class="mx-7 text-white text-sm">{{ $t("Сайт находится в режиме разработки") }}</p>
      </Vue3Marquee>
    </div>
    <div class="container bg-white rounded-xl py-3 z-10">
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
          <span class="text-white">{{ $t("Каталог") }}</span>
        </button>
        <!-- searchbar (input) -->
        <div class="flex-grow flex items-center gap-4">
          <a-input-group compact class="!flex">
            <a-select v-model:value="selectValue" class="min-w-[145px]" size="large" :get-popup-container="trigger => trigger.parentNode">
              <a-select-option value="Product">{{ $t("Товары") }}</a-select-option>
              <a-select-option value="Services">{{ $t("Услуги") }}</a-select-option>
              <a-select-option value="Article">{{ $t("Обяъвления") }}</a-select-option>
              <a-select-option value="Media">{{ $t("Медиа") }}</a-select-option>
            </a-select>
            <a-input :placeholder="$t('Поиск')" v-model:value="inputData" size="large" class="w-full" />
          </a-input-group>

          <!-- regions -->
          <a-select
            class="regions-select max-w-[200px] w-full"
            size="large"
            v-model="region"
            default-value="Все"
            :get-popup-container="trigger => trigger.parentNode"
          >
            <a-select-option v-for="item in regions" :value="item">{{ $t(item) }}</a-select-option>
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
                <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ $t(item.label) }} </span>
              </router-link>
            </template>
            <template v-else>
              <span @click="store.commit(item.method)" class="group flex flex-col items-center cursor-pointer">
                <icon :name="item.icon" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
                <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ $t(item.label) }}</span>
              </span>
            </template>
          </template>
          <template v-if="store.getters.user">
            <button @click="navigateProfile" class="group flex flex-col items-center">
              <icon name="user300" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
              <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ $t("Профиль") }}</span>
            </button>
          </template>
          <template v-else>
            <router-link to="/auth/login" class="group flex flex-col items-center">
              <icon name="user300" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
              <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ $t("Вход") }}</span>
            </router-link>
          </template>
        </div>
      </div>
    </div>
    <!-- KATALOGLAR -->
    <div
      class="fixed inset-0 top-auto z-0 h-[calc(100vh-130px-30px)] w-full bg-white rounded-t-5xl shadow-2xl overflow-y-auto flex"
      v-if="catalogueOpen"
    >
      <div class="container py-8 flex-grow flex flex-col">
        <div class="flex items-center gap-2">
          <a-segmented v-model:value="catalogueType" class="custom-segmented p-1" size="large" :options="dataOptions">
            <template #label="{ value: val, payload }">
              <div style="padding: 4px 4px">
                <div>{{ $t(payload.name) }}</div>
              </div>
            </template>
          </a-segmented>
        </div>
        <div v-if="catalogueType === 'services'" class="mt-10 flex items-start gap-5 w-full flex-grow overflow-y-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
            <div
              v-for="item in catalogue[catalogueType]"
              :key="item"
              class="flex flex-col justify-between gap-6 bg-[#f5f7f9] rounded-2xl p-6 cursor-pointer"
            >
              <h5 class="text-xl font-semibold">{{ $t(item.name) }}</h5>
              <div class="flex justify-end">
                <icon :name="item.img" class="h-32 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div v-else class="mt-10 flex items-start gap-5 w-full flex-grow overflow-y-auto">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.shadowCus {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

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

.custom-segmented.ant-segmented {
  background-color: #f5f7f9;
}

.custom-segmented .ant-segmented-item {
  color: #333;
  transition: all 0.3s;
  background-color: transparent;
  margin: 0 4px;
}

.custom-segmented .ant-segmented-item-selected {
  color: #fff;
  background-color: #10b981;
}

.custom-segmented .ant-segmented-thumb {
  background-color: #10b981;
}

/* Hover effekti */
.custom-segmented .ant-segmented-item:hover {
  color: #10b981;
  background: transparent;
}

/* Faol element uchun hover effekti */
.custom-segmented .ant-segmented-item-selected:hover {
  color: #fff;
  background-color: #0d7d58;
}
</style>
