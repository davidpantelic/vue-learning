<template>
  <div class="flex gap-4 bg-white p-5 justify-center items-center max-w-6xl mx-auto">
    <div class="bg-brand-green p-5 text-black w-[30%] text-center">
      <p>{{ products['phr'].name }}</p>
    </div>
    <div class="bg-brand-green p-5 text-black w-[40%] text-center">
      <p>{{ products['pvr'].name }}</p>
    </div>
    <div class="bg-brand-green p-5 text-black w-[30%] text-center">
      <p>{{ products['psp'].name }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import productsJSON from '../../products.json';

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const products = computed(() => productsJSON[currentLocale.value]);
</script>