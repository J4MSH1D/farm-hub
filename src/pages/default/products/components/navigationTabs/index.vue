<script setup></script>

<template>
  <div class="bg-gray-200">
    <div class="container flex items-center gap-3 py-4">
      <router-link to="/" class="text-sm text-zinc-600 font-light hover:(text-zinc-900)">
        {{ $t("Главная") }}
      </router-link>
      <icon name="chevron-right400" is-svg-raw class="h-2.5 w-2.5 fill-neutral-400" />
      <router-link to="/" class="text-sm text-zinc-600 font-light hover:(text-zinc-900)">
        {{ $t("Маркетплейс") }}
      </router-link>
    </div>
  </div>
</template>
