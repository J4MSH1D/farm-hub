<template>
  <a-input :class="class" :size="size" v-model:value="phoneNumber" placeholder="99-999-99-99" :maxlength="12" prefix="+998" />
</template>

<script setup>
import { ref, watch } from "vue";

defineProps({
  size: String,
  class: String,
});

const emit = defineEmits(["update:modelValue"]);

const phoneNumber = ref("");

// Watch the phone number and format it in real-time
watch(phoneNumber, newVal => {
  let rawValue = newVal.replace(/\D/g, ""); // Remove non-numeric characters

  // Limit input to 9 digits (since "+998" is fixed)
  if (rawValue.length > 9) {
    rawValue = rawValue.slice(0, 9);
  }

  // Format as 99-999-99-99
  const match = rawValue.match(/^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  phoneNumber.value = match ? [match[1], match[2], match[3], match[4]].filter(Boolean).join("-") : rawValue;

  // Emit the cleaned and formatted value

  console.log(phoneNumber.value);

  emit("update:modelValue", phoneNumber.value);
});
</script>
