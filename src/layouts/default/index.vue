<script setup>
import HeaderDefault from "../../components/default/header/index.vue";
import FooterDefault from "../../components/default/footer/index.vue";
import RequestModal from "../../components/default/requestModal/index.vue";
</script>
<template>
  <div class="min-h-screen flex flex-col bg-[#F5F7F9]">
    <header-default />
    <RequestModal />
    <main class="flex-grow min-w-full">
      <slot />
    </main>
    <footer-default />
  </div>
</template>
