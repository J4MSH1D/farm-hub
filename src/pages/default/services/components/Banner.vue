<script setup></script>

<template>
	<div class="w-full h-[320px] rounded-3xl mt-10 relative flex flex-col justify-between overflow-hidden">
		<img src="@/assets/images/png/banner_service.png" class="w-full h-full absolute top-0 right-0 transform origin-top-right" />
		<div class="px-4 xl:px-20 pt-6 z-10 flex flex-col lg:gap-6">
			<h2 class="text-xl lg:text-2xl font-medium text-white">Services for your business</h2>
			<p class="text-md lg:text-xl text-white lg:w-1/2">
				We are ready to provide you with the best provide you with the best services for your we have a team of experts
			</p>
		</div>
		<div class="relative h-[80px] w-full z-10 px-20 pt-4 rounded-b-2xl">
			<div class="absolute bg-white/20 blur-md inset-0" style="backdrop-filter: blur(40px)"></div>
			<div class="relative z-20" style="">
				<button class="text-white rounded-full py-4 px-8 border-2 border-white">Post a service</button>
			</div>
		</div>
	</div>
</template>
