<script setup>
import { useTranslation } from "i18next-vue";
import { computed } from "vue";

const { i18next } = useTranslation();
const locale = computed(() => i18next.language);

const topCategories = [
  {
    id: "s-h-texnika",
    title: {
      uz: "Qishloq xo’jaligi texnikasi",
      ru: "Сельскохозяйственная техника",
    },
    image: "product-category-6.png",
    background: "linear-gradient(137.88deg, #328245 3.09%, #A7CD4B 90.22%)",
  },

  {
    id: "semena",
    title: {
      uz: "Urug'lar",
      ru: "Семена",
    },
    image: "product-category-3.png",
    background: "linear-gradient(312deg, #CC9171 3.69%, #533269 94.91%)",
  },
  {
    id: "sredstva-zaschity-rastreniy",
    title: {
      uz: "O'simliklarni himoya qilish vositalari",
      ru: "Средства защиты растений",
    },
    image: "product-category-5.png",
    background: "linear-gradient(137.3deg, #8D69F2 3.59%, #F58931 99.67%)",
  },
  {
    id: "udobreniya",
    title: {
      uz: "O'g'itlar",
      ru: "Удобрения",
    },
    image: "product-category-4.png",
    background: "linear-gradient(308.11deg, #E29650 5.37%, #B06437 34.69%, #833823 78.67%)",
  },
  {
    id: "fermerskoe-oboruvodanie",
    title: {
      uz: "Qishloq xo’jaligi texnikasi",
      ru: "Фермерское оборудование",
    },
    image: "product-category-2.png",
    background: "linear-gradient(309.74deg, #EF5262 4.41%, #F5827D 30.64%, #FFC7A2 91.46%)",
  },
  {
    id: "vse-skidki-na-traktory",
    title: {
      uz: "Qadoqlash materiallari",
      ru: "Упаковочные материалы",
    },
    image: "product-category-1.png",
    background: "linear-gradient(308.11deg, #EB502C 5.37%, #F7812D 34.69%, #FFA32E 78.67%)",
  },
];
</script>

<template>
  <div class="container py-8">
    <h2 class="text-2xl font-semibold">{{ $t("Популярные категории") }}</h2>

    <!-- Top categories -->
    <div class="grid grid-cols-3 gap-5 py-6">
      <div
        v-for="item in topCategories"
        :key="item.id"
        class="relative min-h-[240px] rounded-xl overflow-hidden px-4 py-6"
        :style="{ background: item.background }"
      >
        <router-link>
          <p class="relative text-2xl text-white font-semibold max-w-[250px]">{{ item.title[locale] }}</p>
          <icon :name="item.image" alt="" class="absolute h-[80%] right-6 bottom-2" />
          <icon name="product-category-leaf.png" alt="" class="absolute h-[80%] left-6 bottom-0" />
        </router-link>
      </div>
    </div>
  </div>
</template>
