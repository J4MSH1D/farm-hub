<script setup>
import {
  MainBanner,
  LeasingBanner,
  LocalProducts,
  SpecialOffers,
  PopularCategories,
  PopularBrands,
  PopularBanners,
  UsefulServices,
  MediaList,
  ExclusiveFarm,
  navigationTabs,
} from "./components";
</script>

<template>
  <navigationTabs />
  <MainBanner />
  <SpecialOffers />
  <LeasingBanner />
  <LocalProducts />
  <PopularCategories />
  <PopularBrands />
  <PopularBanners />
  <UsefulServices />
  <MediaList />
  <ExclusiveFarm />
</template>
