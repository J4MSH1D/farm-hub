<script setup>
import { Hero, Products, GovernmentSupport, Services, StartingBusiness, NewInMonth, ExtraServices, BestOffers, YourMedia } from "./components";
</script>
<template>
  <div>
    <!-- <div class="container flex items-center gap-3 py-4">
      <h1>{{ t("hello") }}</h1>
    </div> -->
    <Hero />
    <Products />
    <GovernmentSupport />
    <Services />
    <StartingBusiness />
    <NewInMonth />
    <ExtraServices />
    <BestOffers />
    <YourMedia />
  </div>
</template>
