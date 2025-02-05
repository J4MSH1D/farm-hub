<script setup>
import Header from "../../components/dashboard/headerDashboard/index.vue";
import Footer from "../../components/dashboard/footerDashboard/index.vue";
import Sidebar from "../../components/dashboard/sidebarDashboard/index.vue";
</script>
<template>
  <div class="min-h-screen bg-[#F5F7F9]">
    <div class="flex">
      <Sidebar />
      <div class="flex-grow flex flex-col">
        <Header />
        <div class="overflow-y-scroll flex-grow">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
