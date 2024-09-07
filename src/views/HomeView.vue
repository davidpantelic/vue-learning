<template>
  <main class="bg-brand-green">
    <div class="hp-cover w-full h-screen flex items-center justify-center flex-col bg-fixed bg-brand-black">
      <h1 class="text-white text-center"><span class="block mb-2 text-[1.5em]">{{ actionWord }}</span> {{ t('cover.title') }}</h1>
      <h2 class="mt-5 text-white uppercase">{{ t('head.title') }}</h2>
      <RouterLink :to="t('nav.products').toLowerCase()" class="btn">{{ t('cover.button') }}</RouterLink>
      <button @click="scrollToNextSection()" class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce" tabindex="-1" aria-hidden="true"><i class="pi pi-arrow-down"></i><span class="sr-only">{{ t('cover.scroll') }}</span></button>
    </div>

    <div class="prod-desc flex flex-wrap gap-10 justify-between items-center px-5 my-[4%] text-center max-w-[1600px] mx-auto">
      <div class="w-full xl:w-1/4">
        <h2 class="mb-5">{{ t('prod_desc.subtitle_1') }}</h2>
        <p>{{ t('prod_desc.text_1').replace("[", "<strong>") }}</p>
      </div>
      <div class="w-full md:w-1/4">
        <h2 class="mb-5">{{ t('prod_desc.subtitle_2') }}</h2>
        <p>{{ t('prod_desc.text_2') }}</p>
      </div>
      <div class="w-full md:w-1/4">
        <h2 class="mb-5">{{ t('prod_desc.subtitle_3') }}</h2>
        <p>{{ t('prod_desc.text_3') }}</p>
      </div>
      <div class="w-full rounded p-3 bg-white">
        <p>{{ t('prod_desc.text_4') }}</p>
      </div>
    </div>

    <div class="black-text-box bg-brand-black text-brand-yellow p-[5%] flex gap-x-5 flex-col lg:flex-row text-center lg:text-left">
      <div class="flex flex-wrap gap-y-5 flex-col w-full lg:w-1/2 lg:flex-row justify-center">
        <div class="w-full">
          <h2 class="mb-3">{{ t('about.our_products') }}</h2>
          <p>{{ t('about.our_products_text') }}</p>
        </div>
        <div class="w-full">
          <h2 class="mb-3">Our manufacturers</h2>
          <p>We work with a number of manufacturers to ensure that we can offer our customers the best possible products. Our manufacturers are located in Serbia, and they are all committed to producing high-quality products that meet the needs of our customers.</p>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex-grow">
        <h2 class="mb-3">{{ t('about.about_products') }}</h2>
        <p>{{ t('about.about_products_text') }}</p>
      </div>
    </div>

    <div class="w-full h-[500px] my-[4%] inline-block">
      <img src="@/assets/images/panic_plast.png" alt="Panic Plast" class="w-auto h-full object-contain mx-auto">
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import nextElementInList from '@/utils/nextElementInLIst';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const myFunction = inject('myFunction');

myFunction('func from parent');

const actionWord = ref(t('cover.actionWord_1'));

let intervalId;

const changeTitle = () => {
  intervalId = setInterval(() => {
    const actions = [t('cover.actionWord_1'), t('cover.actionWord_2'), t('cover.actionWord_3'), t('cover.actionWord_4')];
    actionWord.value = nextElementInList(actions, actionWord.value);
  }, 2000);
};

onMounted(() => {
  changeTitle();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const scrollToNextSection = () => {
  const section = document.querySelector('main > div:not(:first-of-type)');
  section.scrollIntoView({ behavior: 'smooth' });
};
</script>