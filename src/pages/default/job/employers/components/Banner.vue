<script setup></script>

<template>
	<div class="w-full h-[350px] bg-[#4781D9] rounded-3xl mt-10 relative flex flex-col justify-between overflow-hidden">
		<img src="@/assets/images/png/mediaBanner.png" class="w-full h-full absolute top-0 right-0 transform origin-top-right" />
		<div class="px-4 xl:px-20 pt-6 z-10 flex flex-col lg:gap-6">
			<h2 class="text-xl lg:text-4xl font-medium text-white xl:w-2/5 leading-10">
				Free search for employees in the agro-industrial complex from Rosselkhozbank
			</h2>

			<img
				src="@/assets/images/png/job-banner-1.png"
				class="absolute top-20 xl:top-0 right-0 xl:right-20 transform origin-top-right transform scale-50 xl:scale-70"
			/>
		</div>
		<div class="relative h-[80px] w-full z-10 px-20 pt-4 rounded-b-2xl">
			<div class="absolute bg-white/20 blur-md inset-0" style="backdrop-filter: blur(40px)"></div>
			<div class="relative z-20" style="">
				<button class="text-white rounded-full py-4 px-8 border-2 border-white transition duration-300 ease-linear hover:border-gray-500">
					View all resumes
				</button>
			</div>
		</div>
	</div>
</template>
