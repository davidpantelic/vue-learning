<template>
  <header>
    <nav :class="{ 'nav-scroll': isScrolling }"
      class="bg-brand-black text-white fixed top-0 w-full flex justify-between py-3 px-10">
      <RouterLink to="/">
        <img src="@/assets/images/logo.png" alt="Panic Plast" class="absolute top-1 h-16">
      </RouterLink>
      <ul class="flex items-center gap-5">
        <li v-for="tab in navTabsStandard" :key="tab.name">
          <RouterLink :to="tab.path">{{ tab.name }}</RouterLink>
        </li>
        <!-- <li><button><i class="pi pi-search"></i></button></li> -->
      </ul>
    </nav>
  </header>
</template>

<script setup>
// import { ref } from 'vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    default: 'Hello World!'
  }
});

const navTabsStandard = [
  {
    name: 'Pocetna',
    path: '/'
  },
  {
    name: 'O nama',
    path: '/o-nama'
  },
  {
    name: 'Proizvodi',
    path: '/proizvodi'
  }
];

const isScrolling = ref(false);

const handleScroll = () => {
  if (window.scrollY === 0) {
    isScrolling.value = false;
    console.log("Scrolled to the top of the page");
  } else {
    if (!isScrolling.value) {
      isScrolling.value = true;
      console.log("Scroll has begun");
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
ul li {
  @apply transition-all;
}

a {
  @apply hover:text-brand-yellow;
}
</style>