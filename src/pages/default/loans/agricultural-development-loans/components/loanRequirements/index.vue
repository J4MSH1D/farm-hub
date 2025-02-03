<script setup></script>

<template>
  <div class="container pb-8">
    <div class="bg-white grid grid-cols-2 justify-items-center rounded-xl px-8 py-10 gap-5">
      <div class="text-sm text-zinc-900 leading-[1.8]">
        <h3 class="text-2xl font-medium">Требования к заемщику для получения субсидий на развитие бизнеса</h3>
        <ul class="list my-3 leading-[2.5]">
          <li>не должен находиться в процессе ликвидации или реорганизации</li>
          <li>должен обладать статусом налогового резидента РФ</li>
          <li>должен быть зарегистрированным на территории РФ</li>
          <li>
            не должен иметь неоплаченных налогов, сборов, страховых взносов, пеней или штрафов свыше 50 тыс. рублей в течение периода, равного 30
            календарным дням
          </li>
          <li>
            должен являться сельскохозяйственным товаропроизводителем или организацией, осуществляющей производство или переработку
            сельскохозяйственной продукции и ее реализацию
          </li>
        </ul>
      </div>

      <img src="https://s56442.cdn.ngenix.net/api/ext/svg-data/svg/rshb/contentlanding/sign_offer.svg" alt="" class="h-full object-contain" />
    </div>
  </div>
</template>

<style scoped>
.list {
  list-style: disc;
  list-style-position: inside;
}

.list li::marker {
  color: green;
}
</style>
