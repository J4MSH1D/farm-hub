<script setup>
const theme = {
  token: {
    colorPrimary: "#2AC670",
  },
};
</script>
<template>
  <a-config-provider :theme="theme">
    <component :is="$route.meta.layoutComponent">
      <slot />
    </component>
  </a-config-provider>
</template>
