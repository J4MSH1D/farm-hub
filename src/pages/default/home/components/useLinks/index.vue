<script setup>
import { onMounted, ref } from "vue";
import { bigLinks, smallLinks } from "./data";

const activeLink = ref(null);
const activeChildren = ref(null);
const hoveringIndex = ref(null);

const handleLinks = item => {
  activeLink.value = item;
  activeChildren.value = item.children[0];
};

function handleChildren(item) {
  activeLink.value.children = activeLink.value.children.map(i => ({ ...i, isActive: i.name === item.name ? true : false }));
  activeChildren.value = item;
}
onMounted(() => {
  console.log(activeLink.value);
});
</script>
<template>
  <div class="container p-0">
    <div class="flex flex-col gap-6 mt-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <bannerSmall
          v-for="(item, index) in bigLinks"
          :key="index"
          :color="item.color"
          :leafColor="item.leafColor"
          :cusClass="item.cusClass"
          :toRouter="item.toRouter"
        >
          <div class="relative flex items-center pl-10 gap-10 h-48">
            <p class="text-4xl text-white" style="text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)">{{ $t(item.label) }}</p>
            <icon :name="item.image" class="h-40 absolute right-20 bottom-0" />
          </div>
        </bannerSmall>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        <div v-for="(item, index) in smallLinks" :key="index" class="relative cursor-pointer" @click.stop="handleLinks(item)">
          <bannerSmall :color="item.color" :leafColor="item.leafColor" :cusClass="item.cusClass" :toRouter="item.toRouter">
            <div class="relative flex items-center pl-10gap-10 h-28">
              <p class="text-2xl text-white" style="text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)">{{ $t(item.label) }}</p>
              <icon :name="item.image" class="h-24 absolute right-20 bottom-0" />
            </div>
          </bannerSmall>
          <div
            v-if="item.isSoon"
            class="absolute top-3 left-5.5 bg-gray-300 rounded-full text-sm text-white z-10 transform -rotate-30 -translate-x-1/2 -translate-y-1/2 px-4 py-1"
          >
            {{ $t("Скоро") }}
          </div>
        </div>
        <!-- Modal -->
        <Transition name="fade">
          <div
            v-if="activeLink?.children"
            class="absolute top-full mt-4 w-full h-auto bg-white/10 z-50 rounded-2xl p-10 flex flex-col gap-5 shadow-2xl"
            style="
              backdrop-filter: blur(40px);
              -webkit-backdrop-filter: blur(40px);
              box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
            "
          >
            <!-- Name and button -->
            <div class="flex justify-between items-center">
              <p class="text-3xl font-semibold">{{ $t(activeLink.label) }}</p>
              <a-button class="w-8 h-8 p-0 flex items-center justify-center bg-white" @click="activeLink = null">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.79388 4.10789L3.93988 3.93989C4.19386 3.68585 4.53056 3.53139 4.88878 3.5046C5.247 3.47781 5.60294 3.58046 5.89188 3.79389L6.05988 3.93989L11.9999 9.87789L17.9399 3.93789C18.0783 3.79469 18.2439 3.68049 18.4269 3.60197C18.61 3.52344 18.8068 3.48216 19.006 3.48052C19.2052 3.47888 19.4027 3.51693 19.587 3.59244C19.7713 3.66795 19.9387 3.7794 20.0795 3.92031C20.2202 4.06121 20.3315 4.22874 20.4069 4.41312C20.4822 4.5975 20.5201 4.79504 20.5183 4.99421C20.5164 5.19337 20.475 5.39018 20.3963 5.57315C20.3176 5.75612 20.2032 5.92158 20.0599 6.05989L14.1219 11.9999L20.0619 17.9399C20.3156 18.1941 20.4697 18.531 20.4961 18.8892C20.5226 19.2474 20.4196 19.6032 20.2059 19.8919L20.0599 20.0599C19.8059 20.3139 19.4692 20.4684 19.111 20.4952C18.7528 20.522 18.3968 20.4193 18.1079 20.2059L17.9399 20.0599L11.9999 14.1219L6.05988 20.0619C5.92144 20.2051 5.75587 20.3193 5.57283 20.3978C5.38979 20.4763 5.19294 20.5176 4.99377 20.5193C4.7946 20.5209 4.5971 20.4828 4.41279 20.4073C4.22848 20.3318 4.06106 20.2204 3.92029 20.0795C3.77951 19.9386 3.66821 19.771 3.59288 19.5866C3.51754 19.4023 3.47968 19.2047 3.48151 19.0056C3.48333 18.8064 3.5248 18.6096 3.6035 18.4266C3.6822 18.2437 3.79655 18.0782 3.93988 17.9399L9.87788 11.9999L3.93788 6.05989C3.68414 5.80566 3.53006 5.46882 3.50363 5.11061C3.47721 4.7524 3.5802 4.3966 3.79388 4.10789Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </a-button>
            </div>
            <!-- /Name and button -->

            <!-- Children  -->
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div
                v-for="(item, index) in activeLink.children"
                :key="index"
                @click="handleChildren(item)"
                class="px-4 py-2 h-[80px] border rounded-2xl cursor-pointer text-sm hover:bg-gray-100 transition ease-linear duration-300 relative flex items-center relative"
                :style="{
                  borderColor: activeLink.color,
                  backgroundColor: item.isActive ? activeLink.color : 'white',
                  transition: 'all 0.3s linear',
                }"
              >
                <p
                  class="text-xl font-semibold max-w-4/5"
                  :style="{
                    color: item.isActive ? 'white' : '#00000099',
                    textShadow: item.isActive ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
                    transition: 'all 0.3s linear',
                  }"
                >
                  {{ $t(item.name) }}
                </p>
                <router-link :to="item.isSoon ? undefined : item.path" class="absolute right-0 bottom-0">
                  <a-config-provider class="absolute right-0 bottom-0">
                    <a-button
                      class="bg-white flex justify-center items-center rounded-none !rounded-none !rounded-tl-3xl !rounded-br-2xl w-12 !h-12 !p-0"
                      size="large"
                      :style="{
                        backgroundColor: item.isActive ? 'white' : activeLink.color,
                      }"
                    >
                      <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_462_898)">
                          <path
                            d="M15.7114 9.9416C16.1912 10.5212 17.4794 10.9119 18.6595 11.1577C20.1795 11.4771 21.7456 11.5566 23.2816 11.3341C24.4332 11.1673 25.7316 10.8469 26.4771 10.2277M26.4771 10.2277C25.7316 10.8469 25.1761 12.0662 24.8 13.1681C24.2981 14.6395 24.0861 16.1957 24.1168 17.7494C24.1402 18.9572 24.2864 20.2989 24.7649 20.8769M26.4771 10.2277L7.76016 25.7724"
                            :stroke="item.isActive ? activeLink.color : 'white'"
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
                </router-link>
                <div
                  v-if="item.isSoon"
                  class="absolute top-2 left-6 bg-gray-300 rounded-full text-sm text-white z-10 transform -rotate-20 -translate-x-1/2 -translate-y-1/2 px-4 py-1"
                >
                  {{ $t("Скоро") }}
                </div>
              </div>
            </div>
            <!-- /Children -->

            <!-- Actice Children is Children -->

            <div v-if="activeChildren?.children" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
              <div v-for="(item, index) in activeChildren?.children" :key="index" :to="item.link" class="relative flex items-center">
                <router-link
                  class="text-[#00000099] transition-colors duration-300"
                  @mouseover="hoveringIndex = index"
                  @mouseleave="hoveringIndex = null"
                  :to="item.isSoon ? undefined : item.path"
                  v-if="item.path"
                >
                  <p
                    class="text-lg"
                    :style="{
                      color: hoveringIndex === index ? activeLink.color : '#00000099',
                      textShadow: hoveringIndex === index ? `0px 4px 8px ${activeLink.color}` : 'none',
                      transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
                    }"
                  >
                    {{ $t(item.name) }}
                    <span v-if="item.isSoon" class="py-0.5 px-1 -top-2 rounded-full relative bg-[#ff4d4f] text-[10px] text-white absolute">
                      Скоро
                    </span>
                  </p>
                </router-link>
                <a
                  v-else
                  class="text-lg"
                  :style="{
                    color: hoveringIndex === index ? activeLink.color : '#00000099',
                    textShadow: hoveringIndex === index ? `0px 4px 8px ${activeLink.color}` : 'none',
                    transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
                  }"
                  :href="item.link"
                  target="_blank"
                >
                  {{ $t(item.name) }}</a
                >
              </div>
            </div>
            <!-- /Actice Children is Children -->
          </div>
        </Transition>
        <!-- /Modal -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
