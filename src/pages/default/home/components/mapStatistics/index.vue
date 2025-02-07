<script setup>
import { ref, onMounted, watch } from "vue";
import Map from "./components/map.vue";
import axios from "axios";
import { useTranslation } from "i18next-vue";

const selectedTypes = ref([
    {
      name: "Помидор",
      link: "https://api.siat.stat.uz/sdmx/326/table",
    },
    {
      name: "Огурцы",
      link: "https://api.siat.stat.uz/sdmx/328/table",
    },
    {
      name: "Баклажон",
      link: "https://api.siat.stat.uz/sdmx/518/table",
    },
    {
      name: "Сабзи",
      link: "https://api.siat.stat.uz/sdmx/330/table",
    },
    {
      name: "Карам",
      link: "https://api.siat.stat.uz/sdmx/337/table",
    },
    {
      name: "Олма",
      link: "https://api.siat.stat.uz/sdmx/344/table",
    },
    {
      name: "Нок",
      link: "https://api.siat.stat.uz/sdmx/346/table",
    },
    {
      name: "Гилос",
      link: "https://api.siat.stat.uz/sdmx/359/table",
    },
    {
      name: "Шафтоли",
      link: "https://api.siat.stat.uz/sdmx/370/table",
    },
    {
      name: "Ўрик",
      link: "https://api.siat.stat.uz/sdmx/354/table",
    },
  ]),
  selectedType = ref("https://api.siat.stat.uz/sdmx/326/table"),
  selectedYear = ref(null),
  data = ref([]),
  { i18next } = useTranslation();

const years = ref([]);

async function getData() {
  const reponse = await axios.get(selectedType.value);
  years.value = reponse.data[0]["data"].map(e => Object.keys(e)[0]);
  selectedYear.value = years.value[0];
  data.value = reponse.data;
}

async function changedType() {
  years.value = [];
  selectedYear.value = null;
  await getData();
}

onMounted(async () => {
  await getData();
});
</script>
<template>
  <div class="grid grid-cols-3 container min-h-max max-h-max bg-white my-10 rounded-2xl py-10">
    <!-- Map -->
    <div class="col-span-2">
      <Map />
    </div>
    <!-- Info -->
    <div class="flex flex-col h-full">
      <div class="grid grid-cols-3 gap-2 mb-2">
        <div class="col-span-2">
          <a-select size="large" class="w-full" @change="changedType" v-model:value="selectedType">
            <a-select-option v-for="item in selectedTypes" :value="item.link">{{ item.name }}</a-select-option>
          </a-select>
        </div>
        <div>
          <a-select size="large" class="w-full" v-model:value="selectedYear">
            <a-select-option v-for="year in years" :value="year">{{ year }}</a-select-option>
          </a-select>
        </div>
      </div>
      <div class="flex justify-end items-center my-3">
        <span class="text-gray-400">Единица измерения: тыс.тн</span>
      </div>
      <div class="flex-grow overflow-y-auto pr-3 max-h-[400px]">
        <div v-for="item in data" class="w-full border transition bg-gray-100 hover:(shadow-xl) my-3 p-3 rounded flex justify-between items-center">
          <div>
            {{ item[`name_${i18next.language}`] }}
          </div>
          <div class="font-medium">{{ item.data.find(e => Object.keys(e) == selectedYear)[`${selectedYear}`] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
