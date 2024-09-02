<template>
  <header>
    <nav :class="[isScrolling ? 'py-4' : 'py-5 bg-opacity-90']" class="bg-brand-black text-white fixed top-0 w-full flex justify-end px-10 z-50">
      <RouterLink to="/" :class="[isScrolling ? 'h-20' : 'h-24']" class="absolute top-1 left-3 hover:scale-110">
        <img src="@/assets/images/logo.png" alt="Panic Plast" class="h-full inline mr-3">
        <span class="text-2xl relative bottom-3">{{ title }}</span>
      </RouterLink>
      <ul class="nav-tabs flex items-center gap-5">
        <li v-for="tab in navTabs" :key="tab.name">
          <RouterLink :to="tab.path" class="text-xl hover:text-brand-yellow">{{ tab.name }}</RouterLink>
        </li>
      </ul>
      <ul class="flex items-center gap-2 ml-5">
        <li v-for="icon in socIcons" :key="icon.name">
          <a :href="icon.path" :target="icon.target" class="text-xl px-1 flex justify-center items-center hover:text-brand-black hover:bg-brand-yellow rounded"><i :class="icon.class"></i><span class="sr-only">{{ icon.name }}</span></a>
        </li>
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

const navTabs = [
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

const socIcons = [
  {
    name: 'Facebook stranica',
    path: 'https://www.facebook.com/panicplast/',
    target: '_blank',
    class: 'pi pi-facebook'
  },
  {
    name: 'Instagram stranica',
    path: 'https://www.instagram.com/panicplast/',
    target: '_blank',
    class: 'pi pi-instagram'
  },
  {
    name: 'Email adresa',
    path: 'mailto:panicplast@gmail.com',
    target: '_self',
    class: 'pi pi-envelope'
  },
  {
    name: 'Telefon',
    path: 'tel:0654441560',
    target: '_self',
    class: 'pi pi-phone'
  },
];

const isScrolling = ref(false);

const handleScroll = () => {
  if (window.scrollY === 0) {
    isScrolling.value = false;
  } else {
    if (!isScrolling.value) {
      isScrolling.value = true;
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