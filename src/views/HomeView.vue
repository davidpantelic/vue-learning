<template>
  <main class="bg-brand-green">
    <div class="hp-cover w-full h-screen flex items-center justify-center flex-col bg-fixed bg-brand-black">
      <h1 class="text-white text-center"><span class="block mb-2 text-[1.5em]">{{ actionWord }}</span> proizvodi od plastike</h1>
      <h2 class="mt-8 text-white uppercase">Panic Plast</h2>
      <RouterLink to="/products" class="btn">Katalog proizvoda</RouterLink>
      <button @click="scrollToNextSection()" class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce" tabindex="-1" aria-hidden="true"><span class="pi pi-arrow-down"></span><span class="sr-only">Scroll Down to the next section</span></button>
    </div>

    <div class="prod-desc flex flex-wrap gap-10 justify-between items-center px-5 my-[4%] text-center max-w-[1600px] mx-auto">
      <div class="w-full xl:w-1/4">
        <h2 class="mb-5">Products for home, agriculture, and more</h2>
        <p>We offer a wide range of high-quality plastic products designed to withstand the toughest environmental conditions. Our products, including <strong>reservoirs</strong>, <strong>septic tanks</strong>, <strong>wastewater purifiers</strong>, <strong>pontoons</strong>, (and much more), are made from the most durable and weather-resistant materials available on the market.
        </p>
      </div>
      <div class="w-full md:w-1/4">
        <h2 class="mb-5">Environmentally friendly</h2>
        <p>We understand the importance of protecting the environment, which is why we are committed to producing
          <strong>environmentally friendly</strong> products. Our products are made from non-toxic, recyclable materials, which ensures that they have a minimal impact on the environment.
        </p>
      </div>
      <div class="w-full md:w-1/4">
        <h2 class="mb-5">Quality and long-lasting</h2>
        <p>Our products are <strong>built to last</strong>, and we are confident that they will exceed your expectations. They are designed to resist harsh weather conditions, and they are also resistant to UV radiation, which ensures that they maintain their appearance and functionality over time.</p>
      </div>
      <div class="w-full rounded p-3 bg-white">
        <p>We are committed to providing <strong>our customers</strong> with the best possible service, and we pride ourselves on our quality products and customer support. Whether you are looking for a septic tank for your home, a reservoir for your farm, or a pontoon for your dock, we have the perfect product to meet your needs.</p>
      </div>
    </div>

    <div class="black-text-box bg-brand-black text-brand-yellow p-[5%] flex gap-x-5 flex-col lg:flex-row text-center lg:text-left">
      <div class="flex flex-wrap gap-y-5 flex-col w-full lg:w-1/2 lg:flex-row justify-center">
        <div class="w-full">
          <h2 class="mb-3">Our products</h2>
          <p>Our products are made from the highest quality materials and are designed to withstand the toughest environmental conditions. They are also designed to be easy to install and maintain, which ensures that they will last for many years to come.</p>
        </div>
        <div class="w-full">
          <h2 class="mb-3">Our manufacturers</h2>
          <p>We work with a number of manufacturers to ensure that we can offer our customers the best possible products. Our manufacturers are located in Serbia, and they are all committed to producing high-quality products that meet the needs of our customers.</p>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex-grow">
        <h2 class="mb-3">About products</h2>
        <p>Plastic reservoirs, septic tanks, pontoons and other products are made by spiral winding technology of high-density polyethylene (HDPE) and polypropylene (HDPP). Resistant to impacts, aggressive chemicals, suitable for burying partially or completely, and as such represent an ideal and long-term investment. They are practical, easy to manipulate and install, and they guarantee waterproofness and a long-lasting solution, because the material loses only 5% of its properties after 50 years of use. Any plastic product can be fitted with various accessories such as valves, faucets, level indicators, external or internal threaded connections, overflows, inspection openings, chokes, anchoring feet, climbing frames and everything else according to your needs. <br> You can find more details on the <a href="products">Products</a> page, where all our products are presented.</p>
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

const myFunction = inject('myFunction');

myFunction('func from parent');

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