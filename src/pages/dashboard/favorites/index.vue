<script setup>
import api from "@/plugins/axios";
import { onMounted, ref } from "vue";

const skip = ref(0);
const take = 10;

onMounted(() => {
  api.get("Favourite/GetAll").then(e => {
    console.log(e);
  });
});
</script>

<template>
  <div>gdgfgfsgg</div>
</template>
