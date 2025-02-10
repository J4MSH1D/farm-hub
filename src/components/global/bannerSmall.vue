<script setup>
const props = defineProps({
  color: String,
  leafColor: String,
  cusClass: String,
  toRouter: String,
  link: String,
});
</script>

<template>
  <div class="relative rounded-3xl overflow-hidden" :class="cusClass" :style="`background-color: ${color}`">
    <!-- Banner content -->
    <div class="relative z-10">
      <slot />
    </div>
    <router-link v-if="toRouter" :to="toRouter" class="absolute right-0 bottom-0 z-10">
      <arrowButton :color="color" cusClass="w-10 !h-10"></arrowButton>
    </router-link>
    <a v-else :href="link" target="_blank" class="absolute right-0 bottom-0 z-10">
      <arrowButton :color="color" cusClass="w-10 !h-10"></arrowButton>
    </a>

    <!-- Right leaf -->
    <div class="absolute right-0 -bottom-10 z-0">
      <svg width="192" height="217" viewBox="0 0 523 590" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M475.452 259.255C479.16 395.052 328.393 471.858 227.139 444.974C139.063 421.589 76.4569 260.474 87.1417 81.2599C88.7404 54.4449 91.98 27.2247 97.0205 0C335.638 74.8336 471.744 123.459 475.452 259.255Z"
          :fill="leafColor"
        />
        <g style="mix-blend-mode: multiply">
          <path
            d="M454.112 420.382C403.739 432.159 363.629 378.795 365.961 336.991C367.99 300.628 423.331 263.798 490.994 254.372C501.118 252.962 511.518 252.165 522.056 252.075C512.278 351.463 504.485 408.604 454.112 420.382Z"
            fill="#4F4F4F"
            fill-opacity="0.4"
          />
        </g>
        <g style="mix-blend-mode: multiply">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M333.172 589.258L361.388 590C361.74 580.506 361.869 570.927 361.767 561.274C359.823 376.774 274.195 222.254 158.107 172.797C260.067 240.765 331.619 389.175 333.446 562.564C333.541 571.524 333.448 580.425 333.172 589.258Z"
            fill="#4F4F4F"
            fill-opacity="0.4"
          />
        </g>
      </svg>
    </div>

    <!-- Left leaf -->
    <div class="absolute left-0 -bottom-20 z-0">
      <svg width="241" height="273" viewBox="0 0 523 332" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M475.452 259.255C479.16 395.052 328.393 471.858 227.139 444.974C139.063 421.589 76.4568 260.474 87.1416 81.2599C88.7403 54.4449 91.9798 27.2247 97.0204 0C335.638 74.8336 471.744 123.459 475.452 259.255Z"
          fill="white"
          fill-opacity="0.1"
        />
        <g style="mix-blend-mode: multiply">
          <path
            d="M454.112 420.382C403.739 432.159 363.629 378.795 365.961 336.991C367.99 300.628 423.331 263.798 490.994 254.372C501.118 252.962 511.518 252.165 522.056 252.075C512.278 351.463 504.485 408.604 454.112 420.382Z"
            fill="#4F4F4F"
            fill-opacity="0.4"
          />
        </g>
        <g style="mix-blend-mode: multiply">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M333.172 589.258L361.388 590C361.74 580.506 361.869 570.927 361.767 561.274C359.823 376.774 274.195 222.254 158.107 172.797C260.067 240.765 331.619 389.175 333.446 562.564C333.541 571.524 333.448 580.425 333.172 589.258Z"
            fill="#4F4F4F"
            fill-opacity="0.4"
          />
        </g>
      </svg>
    </div>
  </div>
</template>
