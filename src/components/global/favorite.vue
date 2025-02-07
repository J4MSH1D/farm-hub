<script setup>
import storage from "@/utils/storageService";
import { onMounted, ref } from "vue";

const props = defineProps({
  id: String,
});

const liked = ref(false);

onMounted(() => {
  const likes = storage.get("likes", true) || {};
  liked.value = likes[props.id];
});

function handleLike() {
  liked.value = !liked.value;
  const likes = storage.get("likes", true) || {};

  if (likes[props.id]) {
    delete likes[props.id];
  } else {
    likes[props.id] = true;
  }

  storage.set("likes", JSON.stringify(likes));
}
</script>

<template>
  <button @click="handleLike">
    <icon name="heart-filled" is-svg-raw class="h-3.5 w-3.5 fill-red-600 cursor-pointer" v-if="liked" />
    <icon name="heart300" is-svg-raw class="h-3.5 w-3.5 cursor-pointer" v-else />
  </button>
</template>
