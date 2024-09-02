<template>
  <main class="bg-brand-green">
    <div class="hp-cover w-full h-screen flex items-center justify-center flex-col bg-fixed bg-brand-black">
      <h1 class="text-white text-center"><span class="block mb-2 text-[1.5em]">{{ actionWord }}</span> proizvodi od plastike</h1>
      <h2 class="mt-8 text-white uppercase">Panic Plast</h2>
      <button @click="scrollToNextSection()" class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce" tabindex="-1" aria-hidden="true"><span class="pi pi-arrow-down"></span><span class="sr-only">Scroll Down to the next section</span></button>
    </div>

    <div class="prod-desc flex flex-wrap gap-5 justify-between items-center p-5 text-center max-w-[1500px] mx-auto">
      <div>
        <h2 class="mb-5">Products for home, agriculture, and more</h2>
        <p>We offer a wide range of high-quality plastic products designed to withstand the toughest environmental conditions. Our products, including <strong>reservoirs</strong>, <strong>septic tanks</strong>, <strong>wastewater purifiers</strong>, <strong>pontoons</strong>, (and much more), are made from the most durable and weather-resistant materials available on the market.
        </p>
      </div>
      <div>
        <h2 class="mb-5">Environmentally friendly</h2>
        <p>We understand the importance of protecting the environment, which is why we are committed to producing
          <strong>environmentally friendly</strong> products. Our products are made from non-toxic, recyclable
          materials, which ensures that they have a minimal impact on the environment.
        </p>
      </div>
      <div>
        <h2 class="mb-5">Quality and long-lasting</h2>
        <p>Our products are <strong>built to last</strong>, and we are confident that they will exceed your
          expectations. They are designed to resist harsh weather conditions, and they are also resistant to UV
          radiation, which ensures that they maintain their appearance and functionality over time.</p>
      </div>
      <div class="w-full rounded p-3 bg-white">
        <p>We are committed to providing <strong>our customers</strong> with the best possible service, and we pride
          ourselves on our quality products and customer support. Whether you are looking for a septic tank for your
          home, a
          reservoir for your farm, or a pontoon for your dock, we have the perfect product to meet your needs.</p>
      </div>
    </div>
    <hr>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import nextElementInList from '@/utils/nextElementInLIst';

const actionWord = ref('Povoljni');
let intervalId;

const changeTitle = () => {
  intervalId = setInterval(() => {
    const actions = ['Povoljni', 'Kvalitetni', 'Dugotrajni', 'Ekoloski'];
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