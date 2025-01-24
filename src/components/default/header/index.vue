<script setup>
import links from "./data/index";
</script>
<template>
	<header class="bg-white py-5">
		<div class="container">
			<div class="flex items-center justify-between">
				<icon name="logo" is-svg />
			</div>
			<div class="flex mt-5 gap-5">
				<div v-for="link in links">
					<div v-if="link.children">
						<a-dropdown placement="bottomLeft">
							<span class="*hoverGreen">{{ link.name }}</span>
							<template #overlay>
								<div class="border bg-white rounded-xl px-4 py-3">
									<div v-if="link.children && link.children.some(e => e.children)" class="flex gap-5 justify-start flex-wrap max-w-[900px]">
										<div v-for="innerLink in link.children" class="min-w-[200px]">
											<span class="cursor-pointer *hoverGreen text-lg">
												{{ innerLink.name }}
											</span>
											<div v-for="childrenLink in innerLink.children">
												<span class="*hoverGreen text-sm text-gray-500">{{ childrenLink.name }}</span>
											</div>
										</div>
									</div>
									<div v-else>
										<div v-for="innerLink in link.children" class="py-1">
											<div class="*hoverGreen text-md my-1">{{ innerLink.name }}</div>
										</div>
									</div>
								</div>
							</template>
						</a-dropdown>
					</div>
					<div v-else>
						<span class="*hoverGreen">{{ link.name }}</span>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
