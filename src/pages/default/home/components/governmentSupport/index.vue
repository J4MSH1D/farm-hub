<template>
	<div class="container my-10 bg-white py-10 rounded-xl">
		<div class="px-10 py-8 rounded-4xl background relative">
			<div class="relative z-20 text-white flex justify-between items-center">
				<div>
					<div class="text-3xl">Government support for farmers</div>
					<div class="mt-2">Find out about government benefits and subsidies for small and medium-sized farming businesses</div>
				</div>
				<div>
					<arrowButton color="#f83600"></arrowButton>
				</div>
			</div>
			<icon name="support_farmers.png" class="absolute right-[30%] top-0 h-full z-10" />
			<icon name="gradient" is-svg class="absolute right-0 top-0 w-1/2 h-full object-cover z-0" />
		</div>
	</div>
</template>

<style scoped>
.background {
	background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
}
</style>
