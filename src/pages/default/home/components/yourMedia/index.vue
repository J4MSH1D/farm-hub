<script setup>
import MediaBanner from "./components/MediaBanner.vue";
import MediaCatalog from "./components/MediaCatalog.vue";
</script>

<template>
	<div class="my-10 container bg-white py-10 rounded-xl grid grid-cols-1 xl:grid-cols-2 gap-6">
		<MediaBanner />
		<MediaCatalog />
	</div>
</template>
