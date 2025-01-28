<script setup>
import { ref } from "vue";
import { SettingsList } from "./components";
import Filter from "../components/Filter.vue";
const value1 = ref("1");
const options1 = ref([
	{
		value: "1",
		label: "By popularity",
	},
	{
		value: "2",
		label: "By price ascending",
	},
	{
		value: "3",
		label: "By price descending",
	},
]);
</script>
<template>
	<div class="mt-2 flex gap-4">
		<!-- Links of service -->
		<div class="flex flex-col gap-4">
			<SettingsList />
			<Filter />
		</div>

		<!-- Content of service -->
		<div class="flex-1 flex flex-col gap-4 items-end">
			<a-select ref="select" v-model:value="value1" style="width: 200px" :options="options1" @focus="focus" @change="handleChange"></a-select>
		</div>
	</div>
</template>
