<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { t } from "i18next";

const offersList = [
  {
    id: 1,
    title: "Мобильный комбикормовый завод на базе КАМАЗ",
    product_type: "Комбикормовые заводы",
    image: "https://s56442.cdn.ngenix.net/img/164/164/resize/catalog/product/7/O/7OsHVk6Mj830.jpg",
    price: 285570000,
    price_old: null,
    express_leasing: true,
  },
  {
    id: 2,
    title: "Пароконвектомат Abat ПКА 10-1/1ПМ2",
    product_type: "Електроника",
    image:
      "https://agrobaza.uz/upload/company/000/000/191/proposals/2022/12/19/parokonvektomat-abat-pka-10-11pm2-ommaviy-mahsulotlarni-qovurish-uchun-uskunalar-oborudovanie-dlya-objarki-sipuchix-produktov-2022-12-19-18-51-48-365926-1a0e383890c59b32918aac897534c2bf.webp?_=ozb9y",
    price: 48285536,
    price_old: 54896356,
    express_leasing: false,
  },
  {
    id: 3,
    title: "Газонокосилка Oleo-Mac G44 PK",
    product_type: "Комбикормовые заводы",
    image:
      "https://agrobaza.uz/upload/company/000/000/231/proposals/2022/08/30/pritsepnoy-sadoviy-opriskivatel-ajratilgan-purkagichlar-opriskivateli-pritsepnie-2022-08-30-20-54-26-999942-ad6ba187e62fd9b9665621a84d44b074.webp?_=ozauc",
    price: 5400000,
    price_old: 5700000,
    express_leasing: true,
  },
  {
    id: 4,
    title: "Чертеж культиватора ЧК-1,6",
    product_type: "Комбикормовые заводы",
    image:
      "https://agrobaza.uz/upload/company/000/000/014/proposals/2022/05/31/chizel-kultivator-chk-16-kultivatorlar-kultivatori-2022-05-31-17-35-05-858661-404a2beba548057114885d806c8bbd12.jpg?_=ozauc",
    price: 6745000,
    price_old: 7000000,
    express_leasing: false,
  },
  {
    id: 5,
    title: "Кормоуборочная машина Dion модель Scorpion 300",
    product_type: "Комбикормовые заводы",
    image:
      "https://agrobaza.uz/upload/company/000/000/084/proposals/2022/06/15/new-holland-tc590-galla-orish-kombayni-don-yigish-kombaynlari-zernouborochnie-kombayni-2022-06-15-18-27-45-365500-2ae52addbbd02672f974cc8e355939af.jpg?_=ozauc",
    price: 550000000,
    price_old: null,
    express_leasing: true,
  },
  {
    id: 6,
    title: "Продается трактор BELARUS-2022.3",
    product_type: "Комбикормовые заводы",
    image:
      "https://agrobaza.uz/upload/company/000/000/210/proposals/2022/07/19/prodaetsya-traktor-belarus-20223-traktorlar-traktori-2022-07-19-11-33-32-424553-831a683e373bcccbefd872e163a7758a.jpg?_=ozauc",
    price: 900000000,
    price_old: null,
    express_leasing: true,
  },
  {
    id: 7,
    title: "Сборка прессов RHYK-0850",
    product_type: "Комбикормовые заводы",
    image:
      "https://agrobaza.uz/upload/company/000/000/014/proposals/2022/05/31/yigib-presslagich-rxyk-0850-press-yiguvchilar-press-podborshiki-2022-05-31-17-53-24-717962-17f890ac64a1b3274dff60393d6d192f.jpg?_=ozauc",
    price: 900000000,
    price_old: null,
    express_leasing: true,
  },
];

function getPercentage(price, price_old) {
  return Math.round(((price_old - price) / price_old) * 100);
}
</script>

<template>
  <div class="container py-8">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold">{{ $t("Спецпредложения") }}</h2>
      <!-- slider-buttons -->
      <div class="flex items-center justify-end gap-2">
        <button class="specialOffers-button-prev bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-left-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
        <button class="specialOffers-button-next bg-white rounded-full shadow-lg p-1.5">
          <icon name="arrow-right-small600" is-svg-raw class="h-5 w-5 fill-gray-700" />
        </button>
      </div>
    </div>

    <!-- Slider -->
    <swiper
      :modules="[Navigation]"
      slides-per-view="auto"
      space-between="20"
      :navigation="{ nextEl: '.specialOffers-button-next', prevEl: '.specialOffers-button-prev' }"
      class="mt-5"
    >
      <swiper-slide v-for="item in offersList" :key="item" class="max-w-[220px] bg-white rounded-xl p-4 hover:(shadow-2xl)">
        <!-- image -->
        <router-link :to="`/products/${item.id}`" class="block border border-gray-200 aspect-square">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-contain" />
        </router-link>

        <!-- Express-leasing -->
        <div class="group relative invisible mt-2" :class="{ '!visible': item.express_leasing }">
          <div
            class="absolute left-1/2 bottom-[calc(100%+8px)] transform -translate-x-1/2 max-w-[140px] w-full bg-gray-500 rounded-md pointer-events-none invisible opacity-0 duration-200 p-2 group-hover:(opacity-100 visible)"
          >
            <span class="absolute w-2 h-2 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 bg-gray-500" />
            <p class="text-xs font-light leading-[1.8] text-white">
              {{ $t("Специальные условия для покупки техники с использованием государственной поддержки") }}
            </p>
          </div>
          <span class="bg-sky-100 text-[9px] text-blue-500 font-bold uppercase rounded p-1 px-1.5 cursor-pointer">{{ $t("Экспресс-лизинг") }}</span>
        </div>

        <!-- title -->
        <router-link :to="`/products/${item.id}`" class="block h-10 text-sm text-zinc-900 line-clamp-2 mt-2">{{ item.title }}</router-link>
        <!-- product_type -->
        <span class="h-8 text-xs text-zinc-400 line-clamp-2 mt-2">{{ item.product_type || "-" }}</span>

        <!-- price -->
        <div class="h-5 flex items-center justify-between gap-2 mt-4">
          <div class="relative flex items-center">
            <p class="text-sm text-zinc-900 font-medium">{{ Number(item.price).toLocaleString("ru-RU") }} UZS</p>
            <!-- discount % -->
            <span class="bg-red-600 text-white text-[9px] rounded-tl-lg rounded-br-lg py-1 px-1 ml-1 transform -translate-y-1/2" v-if="item.price_old"
              >-{{ getPercentage(item.price, item.price_old) }}%</span
            >
          </div>
          <icon name="heart300" is-svg-raw class="h-3.5 w-3.5 cursor-pointer" />
        </div>
        <!-- price_old -->
        <del class="h-5 text-[10px] text-zinc-400 mt-1" :class="{ invisible: !item.price_old }"
          >{{ Number(item.price_old).toLocaleString("ru-RU") }} UZS</del
        >
      </swiper-slide>
    </swiper>
  </div>
</template>
