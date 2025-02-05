<script setup>
import Header from "../../components/dashboard/headerDashboard/index.vue";
import Sidebar from "../../components/dashboard/sidebarDashboard/index.vue";
</script>
<template>
  <div class="flex flex-col bg-[#f5f7f9]">
    <Header />
    <div class="container flex">
      <Sidebar />
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
