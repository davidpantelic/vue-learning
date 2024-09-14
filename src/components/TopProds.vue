<template>
  <h2 class="text-center mb-5">{{ t('top_prods') }}</h2>
  <div class="flex gap-4 justify-center items-center max-w-[1500px] mx-auto mb-10">
    <RouterLink to="products/phr" class="bg-white hover:scale-[1.03] pb-3 transition-all duration-500 text-black w-[30%] text-center rounded-lg">
      <img class="w-full object-cover rounded-t-lg mb-3 h-[200px]" src="@/assets/images/products/phr_plasticni_horizontalni_rezervoar_3.webp" alt="">
      <h3>{{ products['phr'].name }}</h3>
    </RouterLink>
    <RouterLink to="products/pvr" class="bg-white hover:scale-[1.03] pb-3 transition-all duration-500 text-black w-[40%] text-center rounded-lg">
      <img class="w-full object-cover rounded-t-lg mb-3 h-[300px]" src="@/assets/images/products/pvr_plasticni_vertikalni_rezervoari_3.webp" alt="">
      <h3>{{ products['pvr'].name }}</h3>
    </RouterLink>
    <RouterLink to="products/psj" class="bg-white hover:scale-[1.03] pb-3 transition-all duration-500 text-black w-[30%] text-center rounded-lg">
      <img class="w-full object-cover rounded-t-lg mb-3 h-[200px]" src="@/assets/images/products/psj_plasticna_septicka_jama_1.webp" alt="">
      <h3>{{ products['psj'].name }}</h3>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n';
import productsJSON from '../../products_db.json';

const { t } = useI18n();

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const products = computed(() => productsJSON[currentLocale.value]);
</script>