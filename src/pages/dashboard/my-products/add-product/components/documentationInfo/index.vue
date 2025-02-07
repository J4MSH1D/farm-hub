<script setup>
import { inject } from "vue";

const form = inject("form");
</script>

<template>
  <section class="py-2">
    <p class="text-xl text-green-500 mt-3 border-b border-green-500 border-dashed py-2">
      {{ $t("Наличие сопроводительной документации") }}
    </p>

    <div>
        
    </div>
  </section>
</template>
