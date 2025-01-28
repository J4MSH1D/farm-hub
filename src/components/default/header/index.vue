<script setup>
import { computed, onMounted, ref, watch } from "vue";
import links, { catalogue, quickLinks } from "./data/index";
import { useRoute, useRouter, RouterLink } from "vue-router";

const route = useRoute();
const router = useRouter();
const inputData = ref("");
const selectValue = ref("Product");
const catalogueOpen = ref(false);
const catalogueType = ref("products");
const catalogueSection = ref(null);
const catelogueShowMore = ref({});

const catalogueSectionContent = computed(() => {
	const section = catalogueSection.value.categories;
	const halfLength = Math.ceil(section.length / 2);
	if (section) return [section.slice(0, halfLength), section.slice(halfLength)];
});

watch(catalogueOpen, value => {
	if (value) document.body.style.overflow = "hidden";
	else document.body.style.overflow = "auto";
});

watch(route, () => {
	catalogueOpen.value = false;
});

onMounted(() => {
	catalogueSection.value = catalogue.products[0];
});
</script>
<template>
	<header class="py-5 shadow rounded-b-5xl bg-white sticky top-0 z-90 h-[130px]">
		<div class="container">
			<div class="flex items-center justify-start gap-x-10">
				<icon name="logo" is-svg />
				<!-- Katalog (button) -->
				<button
					class="flex flex-row items-center gap-2 bg-green-500 py-2.5 px-8 rounded-xl hover:bg-green-600"
					@click="catalogueOpen = !catalogueOpen"
				>
					<icon name="category300" is-svg-raw class="h-4 w-4 fill-white" />
					<span class="text-white">Catalogue</span>
				</button>
				<!-- searchbar (input) -->
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
				<!-- Quick links -->
				<div class="flex items-center gap-5 m-0">
					<router-link v-for="item in quickLinks" :to="item.path" :key="item" class="group flex flex-col items-center">
						<icon :name="item.icon" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
						<RouterLink :to="item.path" class="text-xs m-0 mt-2 text-[#171A1C] group-hover:text-green-500">{{ item.label }}</RouterLink>
					</router-link>
				</div>
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

	<!-- KATALOGLAR -->
	<div class="fixed inset-0 top-auto z-90 h-[calc(100vh-130px-20px)] w-full bg-white rounded-t-5xl shadow-2xl overflow-y-auto" v-if="catalogueOpen">
		<div class="container py-8">
			<div class="flex items-center gap-2">
				<button
					class="bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-sm"
					:class="{ 'bg-[#000] text-white': catalogueType === 'products' }"
					@click="catalogueType = 'products'"
				>
					Products
				</button>
				<button
					class="bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-sm"
					:class="{ 'bg-[#000] text-white': catalogueType === 'services' }"
					@click="catalogueType = 'services'"
				>
					Services
				</button>
			</div>
			<div class="mt-5 flex gap-5">
				<!-- Kategoriyalar Nomi (list) -->
				<div class="max-w-[300px] w-full">
					<button
						v-for="category in catalogue[catalogueType]"
						class="group flex items-center justify-between w-full py-4 px-5 rounded-full hover:bg-gray-50"
						:key="category.id"
						:class="{ 'bg-gray-50 active': catalogueSection?.id === category.id }"
						@click="
							if (!category.link) catalogueSection = category;
							else router.push(category.link);
						"
					>
						<div class="flex items-center gap-4">
							<icon
								:name="category.icon"
								is-svg-raw
								class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500"
								:class="{ 'fill-green-500': catalogueSection?.id === category.id }"
							/>
							<p
								class="m-0 pointer-events-none text-left text-base font-light group-hover:text-green-500"
								:class="{ 'text-green-500': catalogueSection?.id === category.id }"
							>
								{{ category.categoryName }}
							</p>
						</div>
						<icon
							name="chevron-right400"
							is-svg-raw
							class="h-4 w-4 fill-[#171A1C] group-hover:fill-green-500"
							:class="{ 'fill-green-500': catalogueSection?.id === category.id }"
							v-if="!category.link"
						/>
					</button>
				</div>

				<!-- Kategoriya Kontenti (category-content) -->
				<div v-if="catalogueSection">
					<p>
						<router-link :to="catalogueSection.link" class="text-2xl font-medium *hoverGreen">{{ catalogueSection.categoryName }}</router-link>
						<span class="italic text-gray-500 text-sm ml-3">{{ Number(catalogueSection.total).toLocaleString("uz") }} products</span>
					</p>

					<!-- category-items -->
					<div class="mt-5 pb-20 flex gap-16 w-full">
						<div class="flex-1 max-w-[300px]" v-for="section in catalogueSectionContent">
							<div v-for="category in section" class="mb-5">
								<router-link :to="category.link" class="font-medium m-0 *hoverGreen">{{ category.title }}</router-link>
								<ul class="flex flex-col gap-1 m-0 mt-4" v-if="category.items">
									<li v-for="item in category.items.slice(0, !catelogueShowMore[category.title] ? 5 : undefined)">
										<router-link :to="item.link" class="text-sm font-light text-gray-500 *hoverGreen">{{ item.label }}</router-link>
									</li>
								</ul>
								<div
									class="text-green-500 text-sm cursor-pointer select-none"
									v-if="category.items.length > 5"
									@click="catelogueShowMore[category.title] = !catelogueShowMore[category.title]"
								>
									<span v-if="catelogueShowMore[category.title]">Свернуть</span>
									<span v-else>Показать ещё</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.overlayClass {
	padding-top: 10px;
}
</style>
