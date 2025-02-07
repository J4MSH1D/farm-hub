<script setup>
import { useRoute, useRouter } from "vue-router";
import dashboard from "@/router/dashboard";
import { onMounted, ref } from "vue";
import Header from "../../components/dashboard/headerDashboard/index.vue";
import { authService } from "@/services/auth";

const route = useRoute();
const router = useRouter();
const links = ref([]);
const activeSubMenu = ref([route.matched[1].name]);
const activeMenuItem = ref([route.matched[2].name]);

function setLinks(array) {
  return array
    .map(elem => {
      if (Array.isArray(elem.children) && elem.children.length) {
        if (elem.children.length === 1 && elem.children.some(e => e.meta && e.meta.notVisible)) {
          delete elem.children; // Ko'rinmas bo'lsa, o'chiramiz
        } else {
          let result = setLinks(elem.children.filter(k => !k.meta.notVisible));
          if (result.length === 0) {
            delete elem.children;
          } else {
            elem.children = result;
            return elem;
          }
        }
      }

      // Permissionlarni tekshirish

      // Faqat mavjud elementlarni qaytaramiz
      if (elem.meta && elem.meta.notVisible) return null;
      if (authService.CheckPermission(elem.meta.permissions)) return elem;
      // authservice qo'shilishi bilan bu o'chiriladi
      // if (elem.meta.permissions) return elem;
      else return null;
    })
    .filter(e => !!e);
}

function initData() {
  let result = setLinks(dashboard[0].children);
  links.value = result;
}

function navigate(name) {
  router.push({ name });
}

onMounted(() => {
  initData();
});
</script>
<template>
  <a-layout class="h-screen">
    <!-- Sidebar -->
    <a-layout-sider :trigger="null" collapsible class="!bg-white !min-w-[320px] border-r border-gray-200">
      <div class="text-white flex items-center py-2">
        <router-link to="/" class="inline-block px-4 py-2">
          <icon name="logo" isSvg class="h-11" />
        </router-link>
      </div>
      <a-menu style="border: none" theme="light" mode="inline" v-model:open-keys="activeSubMenu" v-model:selected-keys="activeMenuItem">
        <template v-for="link in links">
          <a-sub-menu v-if="link.children" :key="link.name">
            <template #title>{{ link.meta.title }}</template>
            <a-menu-item v-for="elem in link.children" :key="elem.name" @click="navigate(elem.name)">
              {{ elem.meta.title }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else @click="goTo(link.path)">{{ link.meta.title }} </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <!-- Content -->
    <a-layout>
      <a-layout-header style="padding: 0; height: auto">
        <Header />
      </a-layout-header>
      <a-layout-content class="overflow-y-auto p-4 py-7">
        <div class="bg-white rounded-lg py-7">
          <RouterView />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
