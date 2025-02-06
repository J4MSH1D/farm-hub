<script setup>
import { computed } from "vue";

const props = defineProps({
  backgroundColor: {
    type: String,
    default: "lightBlue",
  },
});

const backgroundColors = {
  lightBlue: {
    background: "linear-gradient(to right, #2F80ED, #56CCF2)",
    lightLeafColor: "#2F80ED",
    boldLeafColor: "#56CCF2",
  },
  blue: {
    background: "linear-gradient(to right, #2948ff, #396afc)",
    lightLeafColor: "#2948ff",
    boldLeafColor: "#396afc",
  },
  violet: {
    background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
    lightLeafColor: "#4A00E0",
    boldLeafColor: "#8E2DE2",
  },
  lightGreen: {
    background: "linear-gradient(to right, #38ef7d, #11998e)",
    lightLeafColor: "#38ef7d",
    boldLeafColor: "#11998e",
  },
  greenToBlue: {
    background: "linear-gradient(to right, #56B4D3, #348F50)",
    lightLeafColor: "#348F50",
    boldLeafColor: "#56B4D3",
  },
  green: {
    background: "linear-gradient(to right, #11998e, #38ef7d);",
    lightLeafColor: "#0ba360",
    boldLeafColor: "#3cba92",
  },
  blue: {
    background: "linear-gradient(to right, #3bbfa7, #6ffee5)",
    lightLeafColor: "#55d4bd",
    boldLeafColor: "#8fffeb",
  },
  agro: {
    background: "linear-gradient(to right, #61c025, #61c025)",
    lightLeafColor: "#79c549",
    boldLeafColor: "#458540",
  },
  services: {
    background: "linear-gradient(to right, #448540, #2C6E4A)",
    lightLeafColor: "#3E7959",
    boldLeafColor: "#62C025",
  },
};

const backgroundColorStyle = computed(() => backgroundColors[props.backgroundColor] || backgroundColors.lightBlue);
const lightLeafColor = computed(() => backgroundColors[props.backgroundColor]["lightLeafColor"]);
const boldLeafColor = computed(() => backgroundColors[props.backgroundColor]["boldLeafColor"]);
</script>

<template>
  <div class="relative p-10 rounded-3xl overflow-hidden min-h-[300px]" :style="backgroundColorStyle">
    <!-- Banner content -->
    <div class="relative z-10 overhi">
      <slot />
    </div>

    <!-- Right leaf -->
    <div class="absolute right-0 top-0 z-0">
      <svg width="470" height="332" viewBox="0 0 470 332" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M475.452 55.2554C479.16 191.052 328.393 267.858 227.139 240.974C139.063 217.589 76.4568 56.4737 87.1416 -122.74C88.7403 -149.555 91.9798 -176.775 97.0204 -204C335.638 -129.166 471.744 -80.5407 475.452 55.2554Z"
          :fill="lightLeafColor"
        />
        <g style="mix-blend-mode: multiply">
          <path
            d="M454.112 216.382C403.739 228.159 363.629 174.795 365.961 132.991C367.99 96.6281 423.331 59.7982 490.994 50.3722C501.118 48.9619 511.518 48.165 522.056 48.075C512.278 147.463 504.485 204.604 454.112 216.382Z"
            fill="#4F4F4F"
            fill-opacity="0.4"
          />
        </g>
        <g style="mix-blend-mode: multiply">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M333.172 385.258L361.388 386C361.74 376.506 361.869 366.927 361.767 357.274C359.823 172.774 274.195 18.2537 158.107 -31.2027C260.067 36.7646 331.619 185.175 333.446 358.564C333.541 367.524 333.447 376.425 333.172 385.258Z"
            fill="#4F4F4F"
            fill-opacity="0.4"
          />
        </g>
      </svg>
    </div>

    <!-- Left leaf -->
    <div class="absolute left-10 bottom-0 z-0">
      <svg width="523" height="332" viewBox="0 0 523 332" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M475.452 259.255C479.16 395.052 328.393 471.858 227.139 444.974C139.063 421.589 76.4568 260.474 87.1416 81.2599C88.7403 54.4449 91.9798 27.2247 97.0204 0C335.638 74.8336 471.744 123.459 475.452 259.255Z"
          :fill="boldLeafColor"
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
