<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const data = [
  {
    id: 1,
    title: "Семена томата Pink Parallel",
    product_type: "agrokontinent_fergana",
    image:
      "https://agrobaza.uz/upload/company/000/000/086/proposals/2022/07/29/semena-tomata-pink-parallel-pomidor-uruglari-semena-tomata-2022-07-29-01-10-02-621225-f0f38503124b5b975b9d74745d832488.webp?_=ozb9y",
    price: 22500,
    express_leasing: true,
  },
  {
    id: 2,
    title: "Семена арбуза Кримсон Руби F1",
    product_type: "agrokontinent_fergana",
    image:
      "https://agrobaza.uz/upload/company/000/000/086/proposals/2022/07/29/semena-baklajana-krimson-rubi-f1-tarvuz-uruglari-semena-arbuza-2022-07-29-09-46-07-534040-df6b158609c05986dbf43a1abe94b49c.webp?_=ozb9y",
    price: 43000,
    express_leasing: true,
  },
  {
    id: 3,
    title: "Oshqovoq urug`i",
    product_type: "Сырдарьинская область, Город Гулистан",
    image:
      "https://agrobaza.uz/upload/company/000/000/448/proposals/2023/03/02/oshqovoq-urugi-osimlik-uruglari-semena-pryanix-trav-2023-03-02-23-15-45-656611-68ec737c8b74928247b61ef62ee81294.webp?_=ozb9y",
    price: "53000",
    express_leasing: true,
  },
  {
    id: 4,
    title: "Cемена люцерны",
    product_type: "Urug'lar do'koni, Сырдарьинская область",
    image:
      "https://agrobaza.uz/upload/company/000/000/550/proposals/2023/08/18/beda-urugi-beda-lyutserna-2023-08-18-19-12-51-721795-50410bd60857fa7a0a2a7dfd8c9987a0.webp?_=ozb9y",
    price: "37000",
    express_leasing: false,
  },
  {
    id: 5,
    title: "Семена тыквы 'Muscat'",
    product_type: "АГРИУС,Ташкент, Мирабадский район",
    image:
      "https://agrobaza.uz/upload/company/000/000/765/proposals/2024/11/12/muscat-qovoq-uruglari-semena-kabachka-2024-11-12-10-55-47-046661-82d1de25fb2421aed31e20aacbe04c49.webp?_=ozb9y",
    price: 22000,
    express_leasing: false,
  },
  {
    id: 6,
    title: "Семена огурца Valleystar F1",
    product_type: "AGRO EXPORT GROUP LLC,Ташкент, Мирзо-Улугбекский район",
    image:
      "https://agrobaza.uz/upload/company/000/000/213/proposals/2022/08/12/semena-ogurtsa-valleystar-f1-bodring-uruglari-semena-ogurtsov-2022-08-12-14-10-33-450188-84154f8b36ed7bc8567747ba84fd8ccf.webp?_=ozb9y",
    price: "16000",
    express_leasing: true,
  },
  {
    id: 7,
    title: "Семена кукурузы Мегатон F1",
    product_type: "AGRO EXPORT GROUP LLC,Ташкент, Мирзо-Улугбекский район",
    image:
      "https://agrobaza.uz/upload/company/000/000/213/proposals/2022/08/11/semena-kukuruzi-megaton-f1-makkajoxori-uruglari-semena-kukuruzi-2022-08-11-19-22-24-667529-2f4058d8d2bdbeb2f50356c4d2ba5f5b.webp?_=ozb9y",
    price: "13000",
    express_leasing: true,
  },
  {
    id: 8,
    title: "Семена огурца Минмакс",
    product_type: "Аgro house,Ташкентская область, Кибрайский район",
    image:
      "https://agrobaza.uz/upload/company/000/000/102/proposals/2022/06/20/semena-ogurtsa-minmaks-bodring-uruglari-semena-ogurtsov-2022-06-20-15-59-52-938968-229c7f5ef63b9dfae291c3f0d2b35d47.jpg?_=ozb9y",
    price: "32000",
    express_leasing: false,
  },
  {
    id: 9,
    title: "Семена капусты Роял Вентаж F1",
    product_type: "agrokontinent_fergana,Ферганская область, Ташлакский район",
    image:
      "https://agrobaza.uz/upload/company/000/000/086/proposals/2022/07/29/semena-kapusti-royal-ventaj-f1-karam-uruglari-semena-kapusti-2022-07-29-09-29-20-048884-95767a70439c547770b70f1888f9ec78.webp?_=ozb9y",
    price: "12000",
    express_leasing: true,
  },
  {
    id: 10,
    title: "LIKE семечки",
    product_type: "LIKE SEMICHKI,Ферганская область, Город Маргилан",
    image:
      "https://agrobaza.uz/upload/company/000/000/259/proposals/2022/08/15/like-semichki-kungaboqar-uruglari-semena-podsolnechnika-2022-08-15-14-28-50-222582-5d2205933afbe79e14a29b9bf9ae6e95.webp?_=ozb9y",
    price: "10000",
    express_leasing: true,
  },
];
</script>

<template>
  <div class="container py-8">
    <div class="flex items-center justify-between">
      <!-- section-title -->
      <h2 class="text-2xl font-semibold">{{ $t("Товары местного производства") }}</h2>
      <!-- slider-buttons -->
      <div class="flex items-center justify-end gap-2">
        <button class="localProducts-button-prev bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-left-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
        <button class="localProducts-button-next bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-right-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
      </div>
    </div>

    <!-- Slider -->
    <swiper
      :modules="[Navigation]"
      slides-per-view="auto"
      :navigation="{ nextEl: '.localProducts-button-next', prevEl: '.localProducts-button-prev' }"
      class="mt-5"
      space-between="20"
    >
      <swiper-slide v-for="item in data" :key="item" class="max-w-[220px] bg-white rounded-xl p-4 my-4 cus-shadow last:(mr-0)">
        <!-- image -->
        <router-link :to="`/products/${item.id}`" class="block border border-gray-200 aspect-square bg-gray-200">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-contain" />
        </router-link>

        <!-- title -->
        <router-link :to="`/products/${item.id}`" class="text-sm text-zinc-900 line-clamp-2 mt-4 h-10">{{ item.title }}</router-link>
        <!-- product_type -->
        <span class="text-xs text-zinc-400 line-clamp-2 mt-2 h-8">{{ item.product_type }}</span>
        <!-- price -->
        <div class="flex items-center justify-between gap-2 mt-4">
          <div class="relative flex items-center">
            <p class="text-sm text-zinc-900 font-medium">{{ Number(item.price).toLocaleString("ru-RU") }} UZS</p>
          </div>
          <icon name="heart300" is-svg-raw class="h-3.5 w-3.5 cursor-pointer" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.cus-shadow {
  transition: all 0.3s linear;
}
.cus-shadow:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
