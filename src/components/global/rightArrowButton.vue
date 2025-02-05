<script setup>
defineProps({
  color: {
    type: String,
    default: "#4AB75F",
  },
});
</script>
<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: color,
      },
    }"
  >
    <a-button
      class="bg-white flex justify-center items-center rounded-none !rounded-none !rounded-tl-3xl !rounded-br-3xl w-12 !h-12 !p-0"
      size="large"
    >
      <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_462_898)">
          <path
            d="M15.7114 9.9416C16.1912 10.5212 17.4794 10.9119 18.6595 11.1577C20.1795 11.4771 21.7456 11.5566 23.2816 11.3341C24.4332 11.1673 25.7316 10.8469 26.4771 10.2277M26.4771 10.2277C25.7316 10.8469 25.1761 12.0662 24.8 13.1681C24.2981 14.6395 24.0861 16.1957 24.1168 17.7494C24.1402 18.9572 24.2864 20.2989 24.7649 20.8769M26.4771 10.2277L7.76016 25.7724"
            :stroke="color"
            stroke-width="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_898">
            <rect width="24.3302" height="24.3373" fill="white" transform="matrix(0.769288 -0.638902 0.637717 0.770271 0 16.3992)" />
          </clipPath>
        </defs>
      </svg>
    </a-button>
  </a-config-provider>
</template>
