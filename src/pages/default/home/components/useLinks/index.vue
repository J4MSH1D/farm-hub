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
    color: "#448540",
    leafColor: "#538e50",
    cusClass: "",
    toRouter: "/government-supply",
    label: "Господдержка",
    image: "home_link_4.png",
  },
  {
    color: "#F47C34",
    leafColor: "#F28645",
    cusClass: "",
    toRouter: "/job",
    label: "Работа",
    image: "home_link_6.png",
  },
  {
    color: "#4BC7B1",
    leafColor: "#5AC9B6",
    cusClass: "",
    toRouter: "",
    label: "Объявления",
    image: "home_link_7.png",
    isSoon: true,
  },
  {
    color: "#62C025",
    leafColor: "#6EC337",
    cusClass: "",
    toRouter: "/agrotechnology",
    label: "Агротехнологии",
    image: "home_link_8.png",
  },
  {
    color: "#63AAFD",
    leafColor: "#6FAFFA",
    cusClass: "",
    toRouter: "",
    label: "Медиа",
    image: "home_link_5.png",
    isSoon: true,
  },
];
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
            <p class="text-4xl text-white">{{ $t(item.label) }}</p>
            <icon :name="item.image" class="h-40 absolute right-20 bottom-0" />
          </div>
        </bannerSmall>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div v-for="(item, index) in smallLinks" :key="index" class="relative">
          <bannerSmall :color="item.color" :leafColor="item.leafColor" :cusClass="item.cusClass" :toRouter="item.toRouter">
            <div class="relative flex items-center pl-10gap-10 h-28">
              <p class="text-2xl text-white">{{ $t(item.label) }}</p>
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
      </div>
    </div>
  </div>
</template>
