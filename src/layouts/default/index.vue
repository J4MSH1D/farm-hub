<script setup>
import Header from "../../components/default/header/index.vue";
import Footer from "../../components/default/footer/index.vue";
</script>
<template>
	<div class="min-h-screen flex flex-col">
		<div>
			<Header />
		</div>
		<main class="flex-grow min-w-full">
			<slot />
		</main>
		<Footer />
	</div>
</template>
