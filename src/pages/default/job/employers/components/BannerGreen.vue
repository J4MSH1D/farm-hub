<template>
  <bannerSmall color="#468f46" leafColor="#589A58" cusClass="p-10">
    <div class="relative flex flex-col gap-10">
      <div class="flex flex-col justify-evenly h-full text-white">
        <p class="text-xl">{{ $t("Найти стажера для компании или предприятия") }}</p>
        <p class="text-sm">{{ $t("Все, что вам нужно сделать, это разместить вакансию, и заинтересованные кандидаты откликнутся сами.") }}</p>
      </div>
      <img src="@/assets/images/png/job-banner-2.png" alt="banner image" class="w-32 absolute right-30 -top-10" />
    </div>
  </bannerSmall>
</template>
