<script setup>
import Banner from "./components/Banner.vue";
import HeaderAnnoun from "./components/HeaderAnnoun.vue";
import Tabs from "./components/Tabs.vue";
import PlaceSale from "./components/PlaceSale.vue";
import NewAnnouns from "./components/NewAnnouns.vue";
</script>
<template>
  <div class="flex flex-col">
    <HeaderAnnoun />
    <Banner />
    <Tabs />
    <PlaceSale />
    <NewAnnouns />
  </div>
</template>
