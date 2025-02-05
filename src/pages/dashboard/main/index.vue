<script setup>
import storage from "@/utils/storageService";

const user = storage.get("accessToken") ? JSON.parse(storage.get("accessToken")) : null;
console.log(user);
</script>
<template>
  <div class="flex-1 px-8 py-6">
    <BannerMain />
  </div>
</template>
