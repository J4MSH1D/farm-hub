<script setup>
import { ref } from "vue";
const activeKey = ref("1");
import { sales, buyers } from "../data";
</script>
<template>
  <div class="container mb-10 mt-6">
    <a-tabs v-model:activeKey="activeKey" type="line" tabBarStyle="" tabBarGutter="40px" class="flex flex-col gap-6">
      <a-tab-pane key="1" :tab="$t('Продавцам')">
        <div class="grid grid-cols-4 gap-6">
          <a :href="item.link" target="_blank" v-for="item in sales" :key="item.id" class="">
            <div class="p-4 rounded-2xl bg-white flex flex-col items-end gap-4">
              <h5 class="text-xl font-semibold">{{ $t(item.name) }}</h5>
              <img :src="item.img" :alt="item.name" class="w-auto h-40 object-cover" />
            </div>
          </a>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" :tab="$t('Покупателям')" class="flex flex-col gap-6">
        <div class="grid grid-cols-4 gap-6">
          <a :href="item.link" target="_blank" v-for="item in buyers" :key="item.id" class="">
            <div class="p-4 rounded-2xl bg-white flex flex-col gap-6">
              <h5 class="text-xl font-semibold h-12 line-clamp-none">{{ $t(item.name) }}</h5>
              <img :src="item.img" :alt="item.name" class="w-auto h-40 object-cover" />
            </div>
          </a>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
