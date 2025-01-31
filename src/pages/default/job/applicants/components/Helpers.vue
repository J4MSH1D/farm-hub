<script setup>
const data = [
	{
		id: 1,
		name: "Vet",
		img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/Frame%201321316488.png",
		link: "",
		text: "The job search portal is good because there are many vacancies for narrow specialists in the agricultural sector. In my region, there are not many vacancies for veterinarians, I thought that I already knew all our farms, but it turns out that several new ones have opened - I found out about this through the portal. I found a part-time job at one of these farms. I liked that the job search system on the portal is accessible and understandable.",
	},
	{
		id: 2,
		name: "Sales representative",
		img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/Frame%201321316489.png",
		link: "",
		text: "I was looking for a job as a sales manager in Krasnodar: I looked through many ads, but they were all wrong. I found my current job as a sales representative of plant protection products on the portal by chance, and later I learned that it has the largest database of vacancies in the agricultural sector. I really like it: I travel around the villages, communicate with clients, present products. And my salary depends on me. I recommend the portal to anyone looking for a job.",
	},
	{
		id: 3,
		name: "Agronomist",
		img: "https://svoefermerstvo.ru/img/0/0/resize/rshb/landings/cms_images/Frame%201321316490.png",
		link: "",
		text: "My family and I were planning to move to another region, but I couldn't find any suitable vacancies on job search websites. I was scared to leave without finding a new job. Thanks to this portal, I managed to find a job in just a week. I sent responses to vacancies that interested me, several companies promptly contacted me and conducted interviews, and in the end I received two offers, one of which I chose.",
	},
];
</script>
<template>
	<div class="flex flex-col items-center gap-6 my-6">
		<h2 class="text-3xl font-semibold w-full">Work by proffession</h2>
		<div class="flex justify-between gap-4 w-full">
			<div class="flex flex-col w-full gap-4 p-6 bg-white rounded-xl" v-for="item in data" :key="item.id">
				<img :src="item.img" :alt="item.name" class="w-24 h-24 object-cover" />
				<span class="text-lg font-semibold"> {{ item.name }}</span>
				<p class="text-gray-500 text-md leading-6">{{ item.text }}</p>
			</div>
		</div>
	</div>
</template>
