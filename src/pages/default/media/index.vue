<script setup>
import Banner from "./components/Banner.vue";
import Article from "./components/Article.vue";
import News from "./components/News.vue";
import Videos from "./components/Videos.vue";
</script>

<template>
  <div class="container my-10 flex flex-col gap-10">
    <Banner />
    <News />
    <Article />
    <Videos />
  </div>
</template>
