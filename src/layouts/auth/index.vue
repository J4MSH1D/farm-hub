<template>
	<div class="relative h-screen w-screen overflow-hidden bg-[#D5E7F3]">
		<div class="relative z-20">
			<slot />
		</div>
		<icon name="auth-background.png" class="absolute bottom-0 z-10 left-0 w-full h-full" />
		<icon name="auth-tracktor.png" class="absolute z-10 transform 2xl:(scale-125 left-[10%] bottom-20) lg:(scale-100 left-[3%] bottom-10)" />
	</div>
</template>
