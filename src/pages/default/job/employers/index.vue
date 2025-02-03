<script setup>
import { Banner, JobSteps, BannerGreen, Partnyors, BannerBlue } from "./components";
import { Profession } from "../applicants/components";
</script>
<template>
  <div class="container flex flex-col gap-6">
    <Banner />
    <Profession />
    <JobSteps />
    <BannerGreen />
    <!-- <Partnyors /> -->
    <BannerBlue />
  </div>
</template>
