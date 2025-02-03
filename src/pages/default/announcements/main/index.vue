<script setup>
import { SettingsList, Filter, Select, ServiseProducts, Banner } from "./components";
</script>
<template>
  <div class="flex flex-col gap-10">
    <Banner />
    <div class="mt-2 flex gap-4">
      <!-- Links of service -->
      <div class="flex flex-col gap-4">
        <SettingsList />
        <Filter />
      </div>

      <!-- Content of service -->
      <div class="flex-1 flex flex-col gap-4">
        <Select />
        <ServiseProducts />
      </div>
    </div>
  </div>
</template>
