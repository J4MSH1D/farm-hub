<script setup>
defineProps({
  isSmall: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <span class="py-2 px-3 rounded-full bg-gray-200 text-sm" :class="{ '!py-1 !px-2': isSmall }"> Скоро </span>
</template>
