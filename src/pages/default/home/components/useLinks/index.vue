<script setup>
const bigLinks = [
  {
    color: "#62c025",
    leafColor: "#75d241",
    cusClass: "",
    toRouter: "/products",
    label: "Товары",
    image: "home_link_1.png",
  },
  {
    color: "#f67020",
    leafColor: "#f47b33",
    cusClass: "",
    toRouter: "/services",
    label: "Услуги",
    image: "home_link_2.png",
  },
];

const smallLinks = [
  {
    color: "a2a4f8",
    leafColor: "a8aaf6",
    cusClass: "",
  },
];
</script>
<template>
  <div class="container">
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
          <div class="relative flex items-center pl-10gap-10 h-40">
            <p class="text-4xl text-white">{{ $t(item.label) }}</p>
            <icon :name="item.image" class="w-40 absolute right-20 bottom-0" />
          </div>
        </bannerSmall>
      </div>
    </div>
  </div>
</template>
