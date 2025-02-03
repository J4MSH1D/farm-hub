<template>
  <a-input-number
    v-model:value="phoneNumber"
    :formatter="value => formatPhoneNumber(value)"
    :parser="value => parsePhoneNumber(value)"
    :controls="false"
  />
</template>

<script setup>
import { ref, watch } from "vue";

const phoneNumber = ref("");

const formatPhoneNumber = value => {
  if (!value) return "";
  value = value.toString().replace(/\D/g, ""); // Remove non-numeric characters

  // Format as 99-999-99-99
  const match = value.match(/^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (!match) return value;

  return [match[1], match[2], match[3], match[4]].filter(Boolean).join("-");
};

const parsePhoneNumber = value => {
  return value.replace(/\D/g, ""); // Remove non-numeric characters
};

watch(phoneNumber, val => {
  console.log(val);
});
</script>
