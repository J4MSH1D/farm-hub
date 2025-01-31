<script setup>
const tarrifsList = [
  {
    sectionName: "Параметры карты",
    info: null,
    content: [
      { title: "Срок действия", description: "5 лет" },
      { title: "Тип карты", description: "Business/Business Instant Issue/МИР Бизнес ФЕРМЕР" },
      { title: "Валюта счёта", description: "RUB" },
      { title: "Выпуск карты", description: "Бесплатно" },
      { title: "Колличество карт", description: "Не ограничено" },
    ],
  },
  {
    sectionName: "Обслуживание",
    info: "*SMS-запросы в Банк +7 903 767-20-90 или 7787",
    content: [
      { title: "Ежемесячное обслуживание", description: "200 ₽" },
      { title: "Блокировка карты", description: "Бесплатно" },
      { title: "SMS-сервис", description: "60 ₽" },
      { title: "Мобильный сервис платежей", description: "Бесплатно" },
    ],
  },
  {
    sectionName: "Снятие наличных",
    info: null,
    content: [
      { title: "– до 500 000 ₽", description: "2% от суммы, минимум 250 ₽" },
      { title: "– от 500 000 ₽ до 1 000 000 ₽", description: "3% от суммы, минимум 250 ₽" },
      { title: "– свыше 1 000 000 ₽", description: "4,5% от суммы, минимум 250 ₽" },
    ],
  },
  {
    sectionName: "Лимит выдачи наличных",
    info: null,
    content: [
      { title: "– в cутки", description: "300 000 ₽" },
      { title: "– в месяц", description: "3 000 000 ₽" },
    ],
  },
  {
    sectionName: "Платежи и преводы",
    info: null,
    content: [
      { title: "Оплата товаров и услуг", description: "Бесплатно" },
      { title: "Зачисление средств по операциям возврата", description: "Бесплатно" },
      { title: "Зачисление средств на счёт", description: "Бесплатно" },
      { title: "Перевод средств со счёта", description: "Не предоставляется" },
    ],
  },
  {
    sectionName: "Внесение наличных",
    info: `<p>Основные условия:</p><ul><li>– внесение онлайн на расчётный счёт</li><li>– внесение через банкоматы и терминалы банка с возможностью выбора кассового символа</li><li>– внесение через банкоматы банков-партнеров с кассовым символом "32"</li></ul>`,
    content: [
      { title: "Тариф", description: "0,25% от суммы внесения" },
      { title: "Лимит внесения наличных", description: "Отсутствует" },
    ],
  },
  {
    sectionName: "Информация по счёту",
    info: null,
    content: [{ title: "Предоставление выписки по счету", description: "Бесплатно" }],
  },
];
</script>

<template>
  <div>
    <h2 class="text-3xl text-zinc-900 font-medium">Тарифы</h2>
    <div v-for="item in tarrifsList" :key="item.sectionName" class="my-14">
      <h3 class="text-lg text-zinc-900 font-medium">{{ item.sectionName }}</h3>
      <ul>
        <li v-for="child in item.content" :key="child.title" class="flex items-center gap-14">
          <span class="text-zinc-500 w-[300px] py-5">{{ child.title }}</span>
          <div class="border-b border-gray-200 flex-grow py-5">
            {{ child.description }}
          </div>
        </li>
      </ul>

      <div v-html="item.info" class="font-light leading-[1.7]" />
    </div>
  </div>
</template>

<style scoped>
li:last-child :deep(div) {
  border: none;
}
</style>
