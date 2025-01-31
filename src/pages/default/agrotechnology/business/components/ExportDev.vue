<script setup>
const data = [
	{
		id: 1,
		name: "1C for agribusiness",
		img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317253%20(24).png",
		link: "",
		path: "",
	},
	{
		id: 2,
		name: "Services for export development",
		img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317253%20(30).png",
		link: "https://epauzb.uz/",
	},
	{
		id: 3,
		name: "Factoring",
		img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317253%20(32).png",
		link: "",
	},
	{
		id: 5,
		name: "Verification of foreign counterparties",
		img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame%201321317253%20(33).png",
		link: "",
	},
];
</script>
<template>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full my-10">
		<div class="flex items-center gap-4 p-6 bg-white rounded-xl cursor-pointer" v-for="item in data" :key="item.id">
			<img :src="item.img" :alt="item.name" class="w-24 h-24 object-cover" />
			<span class="text-md font-semibold"> {{ item.name }}</span>
		</div>
	</div>
</template>
