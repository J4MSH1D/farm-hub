<script setup>
import ImageUploader from "@/components/global/imageUploader.vue";
import { inject } from "vue";

const form = inject("form");
</script>

<template>
  <section class="py-2">
    <p class="text-xl text-green-500 mt-3 border-b border-green-500 border-dashed py-2">
      {{ $t("Добавить фото товара") }}
    </p>
    <!-- image-uploader -->
    <ImageUploader v-model="form.image" />
  </section>
</template>
