<script setup>
import { ref } from "vue";
const checkPhoto = ref(false);
const data = ref(5832);
</script>
<template>
  <div class="flex flex-col gap-2 w-full py-6">
    <a-checkbox v-model:checked="checkPhoto" class="mt-2"
      >Only with photo
      <span class="text-sm text-zinc-500"> {{ data }}</span>
    </a-checkbox>
  </div>
</template>
