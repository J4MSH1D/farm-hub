<script setup></script>
<template>
  <div class="rounded-xl bg-gradient-to-r from-[#4781D9] to-[#7DC4F4] h-[120px] flex justify-around p-6 items-center">
    <div class="flex flex-col justify-evenly h-full text-white">
      <p class="text-xl">{{ $t("Найдите работу по профессии") }}</p>
      <p class="text-sm">{{ $t("Разместить резюме, чтобы работодатели вас заметили") }}</p>
    </div>
    <img src="https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/landings/cms_images/Frame_4.png" alt="banner image" class="h-20" />
    <button class="text-white rounded-full py-4 px-8 border-2 transition duration-300 ease-linear border-white hover:border-gray-500">
      {{ $t("Читать далее") }}
    </button>
  </div>
</template>
