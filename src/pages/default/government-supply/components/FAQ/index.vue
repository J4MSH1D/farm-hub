<script setup>
import { ref } from "vue";

const showFaqs = ref([]);

const faqs = Array(10).fill({
  question: "Что такое льготное кредитование малого бизнеса в сфере АПК?",
  answer:
    "Такие займы представляют из себя краткосрочные или инвестиционные кредиты по ставке не более 5% для производителей сельхоз товаров, организаций и индивидуальных предпринимателей, которые занимаются производством, переработкой и реализацией сельскохозяйственной продукции.",
});
</script>

<template>
  <div class="container py-8">
    <h2 class="text-2xl text-zinc-900 text-center font-medium">Вопросы и ответы</h2>

    <ul>
      <li class="p-8 bg-white rounded-3xl mb-6" v-for="(item, index) in faqs" :key="item.question">
        <!-- question -->
        <button class="w-full flex items-center justify-between gap-5" @click="showFaqs[index] = !showFaqs[index]">
          <h3 class="text-lg text-zinc-900 font-semibold">{{ item.question }}</h3>
          <icon name="chevron-up700" is-svg-raw class="w-3.5 h-3.5 fill-black" />
        </button>
        <!-- answer -->
        <div class="text-zinc-500 text-sm mt-5" v-html="item.answer" v-show="showFaqs[index]" />
      </li>
    </ul>
  </div>
</template>
