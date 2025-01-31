<script setup>
import { ref } from "vue";

const steps = ["Заполните онлайн - заявку, дождитесь звонка", "Согласуйте условия и подпишите договор", "Получите предмет лизинга"];
const policy = `Отправляя заявку, вы соглашаетесь на <a>обработку персональных данных</a> в соответствии с требованиями ФЗ "О персональных данных" и <a>политикой обработки персональных данных АО "BRB"</a>, а также на <a>информирование</a> о продуктах и услугах банка.`;

const isBrbClient = ref(false);
const form = ref({
  phone: null,
  region: null,
  INN: null,
});

function validator(rule, value) {
  if (!value) return Promise.reject("Обязательное поле");
}

const formRules = Object.keys(form.value).reduce((acc, curr) => {
  return { ...acc, [curr]: [{ required: true, validator, trigger: "blur" }] };
}, {});

const regions = {
  tashkent_city: "Ташкент (город)",
  tashkent: "Ташкентская область",
  andijan: "Андижанская область",
  bukhara: "Бухарская область",
  fergana: "Ферганская область",
  jizzakh: "Джизакская область",
  namangan: "Наманганская область",
  navoiy: "Навоийская область",
  qashqadaryo: "Кашкадарьинская область",
  samarqand: "Самаркандская область",
  surxondaryo: "Сурхандарьинская область",
  sirdaryo: "Сырдарьинская область",
  khorezm: "Хорезмская область",
  karakalpakstan: "Республика Каракалпакстан",
};
</script>

<template>
  <div class="container py-8">
    <div class="bg-white rounded-4xl shadow-sm px-6 py-20 overflow-hidden">
      <h2 class="text-2xl text-center text-zinc-900 font-medium">Оформить экспресс-лизинг</h2>

      <div class="max-w-[900px] mx-auto mt-14">
        <!-- Lizing protsessi -->
        <ul class="relative z-10 flex items-start justify-center gap-10">
          <li v-for="(item, index) in steps" :key="item" class="relative flex flex-col items-center flex-1">
            <div class="z-10 h-[100px] w-[100px] bg-gray-100 rounded-3xl flex items-center justify-center text-2xl font-semibold text-zinc-500">
              {{ index + 1 }}
            </div>
            <p class="z-10 text-lg text-zinc-900 text-center font-semibold mt-8">{{ item }}</p>
            <!-- line -->
            <hr
              class="absolute border-0 top-[50px] left-1/2 w-full h-0.5 bg-gray-100 transform -translate-y-1/2"
              :style="{ display: index !== steps.length - 1 ? 'block' : 'none' }"
            />
          </li>
        </ul>

        <!-- Form-Container -->
        <div class="relative z-10 flex items-stretch gap-8">
          <button class="text-zinc-900 border-b-3 border-transparent py-6" :class="{ 'border-green-500': !isBrbClient }" @click="isBrbClient = false">
            Еще нет счёта в BRB
          </button>
          <button class="text-zinc-900 border-b-3 border-transparent py-6" :class="{ 'border-green-500': isBrbClient }" @click="isBrbClient = true">
            Я клиент BRB
          </button>
        </div>

        <!-- Form -->
        <div class="relative">
          <div class="relative z-10 bg-white rounded-2xl mt-4" style="box-shadow: 0 4px 25px rgba(0, 0, 0, 0.07)">
            <div class="border-b border-gray-200 p-8">
              <h2 class="text-2xl text-zinc-900 text-center font-medium">Оформить экспресс-лизинг</h2>
            </div>

            <div class="max-w-[700px] py-14 px-4 mx-auto">
              <a-form :model="form" :rules="formRules" class="grid grid-cols-2 gap-5" size="large">
                <a-form-item has-feedback name="phone">
                  <a-input v-model:value="form.phone" prefix="+998" placeholder="(__) ___ __ __*" />
                </a-form-item>
                <a-form-item has-feedback name="region">
                  <a-select v-model:value="form.region" placeholder="Субъект Узбекистана*">
                    <a-select-option v-for="(itemValue, itemKey) in regions" :value="itemKey">{{ itemValue }}</a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item has-feedback name="INN" class="col-span-2">
                  <a-input v-model:value="form.INN" placeholder="ИНН*" />
                </a-form-item>

                <!-- submit-btn -->
                <a-form-item>
                  <a-button type="primary" html-type="submit" class="w-full !rounded-full" size="large">Отправить заявку</a-button>
                </a-form-item>
                <!-- Policy text -->
                <div class="policy-text text-[10px] leading-[1.5] text-zinc-500" v-html="policy" />
              </a-form>
              <p class="text-xs text-zinc-500 mb-5">* Все поля обязательные</p>
            </div>
          </div>
          <!-- form-background-blur -->
          <div class="absolute left-0 top-0 max-w-[400px] aspect-square w-full bg-blue-200" style="filter: blur(100px)" />
          <div class="absolute right-0 bottom-0 max-w-[400px] aspect-square w-full bg-blue-200" style="filter: blur(100px)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.policy-text ::v-deep(a) {
  color: #42ab44;
}
</style>
