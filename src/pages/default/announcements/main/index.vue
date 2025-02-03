<script setup>
import {
  SettingsList,
  FilterByPrice,
  FilterByCountry,
  FilterByAnnoun,
  FilterByState,
  FilterByPhoto,
  Select,
  ServiseProducts,
  Banner,
  Reset,
} from "./components";
</script>
<template>
  <div class="flex flex-col gap-10">
    <Banner />
    <div class="mt-2 flex gap-4">
      <!-- Links of service -->
      <div class="flex flex-col gap-4">
        <!-- Category Lists -->
        <SettingsList />

        <!-- Filters -->
        <div class="flex flex-col divide-y bg-white p-4 rounded-xl mb-10 max-w-72">
          <FilterByAnnoun />
          <FilterByState />
          <FilterByPhoto />
          <FilterByPrice />
          <FilterByCountry />
        </div>
      </div>

      <!-- Content of service -->
      <div class="flex-1 flex flex-col gap-4">
        <Select />
        <ServiseProducts />
      </div>
    </div>
  </div>
</template>
