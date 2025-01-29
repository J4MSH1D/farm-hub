<script setup>
import { ref } from "vue";

const inputRange = ref([0, 100000000]);
const checkPrice = ref(false);
const checkCountry = ref(false);
const isPrice = ref(true);
const isCountry = ref(true);
function handleChange() {
	if (!checkPrice.value) inputRange.value = [0, 100000000];
}
</script>
<template>
	<div class="flex flex-col divide-y bg-white p-4 rounded-xl mb-10 max-w-72">
		<!-- Price -->
		<div class="flex flex-col gap-2 w-full pb-6">
			<div class="flex justify-between w-full cursor-pointer">
				<h5 class="font-semibold text-sm">Price</h5>
				<icon
					name="up-arrow_black"
					is-svg
					class="w-3 h-4 transform transition duration-300 ease-linear"
					:class="{ 'rotate-180': !isPrice }"
					@click="isPrice = !isPrice"
				/>
			</div>
			<div v-if="isPrice" class="flex flex-col gap-4">
				<a-slider :step="100000" :min="0" :max="100000000" v-model:value="inputRange" range />
				<div class="flex justify-between w-full gap-2">
					<div class="flex flex-col rounded-lg border px-2 py-1 w-full">
						<span class="text-sm">From</span>
						<input min="0" max="100000000" type="number" v-model="inputRange[0]" class="w-full outline-none text-md" style="" />
					</div>
					<div class="flex flex-col rounded-lg border px-2 py-1 w-full">
						<span class="text-sm">To</span>
						<input type="number" min="1000000" max="100000000" v-model="inputRange[1]" class="w-full outline-none text-md" />
					</div>
				</div>

				<a-checkbox v-model:checked="checkPrice" class="mt-2" @change="handleChange">With price</a-checkbox>
			</div>
		</div>
		<!-- Country -->
		<div class="flex flex-col gap-2 w-full pt-6">
			<div class="flex justify-between w-full cursor-pointer">
				<h5 class="font-semibold text-sm">Country of origin</h5>
				<icon
					name="up-arrow_black"
					is-svg
					class="w-3 h-4 transform transition duration-300 ease-linear"
					:class="{ 'rotate-180': !isCountry }"
					@click="isCountry = !isCountry"
				/>
			</div>
			<a-checkbox v-if="isCountry" v-model:checked="checkCountry" class="mt-2">Uzbekistan</a-checkbox>
		</div>
	</div>
</template>
