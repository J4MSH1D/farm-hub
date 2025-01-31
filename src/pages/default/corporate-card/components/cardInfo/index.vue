<script setup>
import { ref } from "vue";
import DescriptionTab from "./descriptionTab.vue";
import TarrifsTab from "./tarrifsTab.vue";

const activeTab = ref(0);
</script>

<template>
  <div class="container py-8">
    <!-- Tabs -->
    <div class="flex items-center gap-8 px-20">
      <button class="border-b-3 border-transparent py-5" :class="{ 'border-green-500': activeTab === 0 }" @click="activeTab = 0">Описание</button>
      <button class="border-b-3 border-transparent py-5" :class="{ 'border-green-500': activeTab === 1 }" @click="activeTab = 1">
        Тарифы и документы
      </button>
    </div>

    <!-- Content -->
    <div class="bg-white rounded-3xl p-20">
      <DescriptionTab v-if="activeTab === 0" />
      <TarrifsTab v-if="activeTab === 1" />
    </div>
  </div>
</template>
