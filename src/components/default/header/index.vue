<script setup>
import { ref } from "vue";
import links from "./data/index";

const inputData = ref(""),
	selectValue = ref("Product");
</script>
<template>
	<header class="py-5 shadow rounded-b-5xl bg-white sticky top-0 z-90">
		<div class="container">
			<div class="flex items-center justify-start gap-x-10">
				<icon name="logo" is-svg />
				<div class="flex-grow">
					<a-input-group compact class="!flex">
						<a-select v-model:value="selectValue" size="large">
							<a-select-option value="Product">Product</a-select-option>
							<a-select-option value="Media">Media</a-select-option>
							<a-select-option value="Article">Article</a-select-option>
						</a-select>
						<a-input placeholder="Search" v-model:value="inputData" size="large" class="w-full" />
					</a-input-group>
				</div>
				<div></div>
			</div>
			<div class="flex mt-5 gap-5">
				<div v-for="link in links">
					<div v-if="link.children">
						<a-dropdown placement="bottomLeft" overlayClassName="pt-5">
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

<style>
.overlayClass {
	padding-top: 10px;
}
</style>
