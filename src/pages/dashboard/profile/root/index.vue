<script setup>
import storage from "@/utils/storageService";

const user = storage.get("accessToken") ? JSON.parse(storage.get("accessToken")) : null;
console.log(user);
</script>
<template>
  <div>Profile</div>
</template>
