<template>
  <header>
    <nav :class="[isScrolling ? 'py-4' : 'py-5 bg-opacity-90']" class="bg-brand-black text-white fixed top-0 w-full flex justify-end px-10 z-50">
      <RouterLink to="/" :class="[isScrolling ? 'h-28' : 'h-32']" class="absolute top-2 left-3 hover:scale-105">
        <img src="@/assets/images/panic_plast.png" alt="Panic Plast" class="h-full inline mr-3">
      </RouterLink>
      <ul class="nav-tabs flex items-center gap-5">
        <li v-for="tab in navTabs" :key="tab.name">
          <RouterLink :to="tab.path" class="text-xl hover:text-brand-yellow">{{ tab.name }}</RouterLink>
        </li>
      </ul>
      <ul class="flex items-center gap-2 ml-5">
        <li v-for="icon in socIcons" :key="icon.name">
          <a :href="icon.path" :target="icon.target" class="text-xl p-1 flex justify-center items-center hover:text-brand-black hover:bg-brand-yellow rounded"><i :class="icon.class"></i><span class="sr-only">{{ icon.name }}</span></a>
        </li>
      </ul>
      <div class="ml-3">
        <button v-if="locale === 'en'" @click="switchLanguage('sr')" class="h-full rounded border-2 px-1 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">Srb</button>
        <button v-if="locale === 'sr'" @click="switchLanguage('en')" class="h-full rounded border-2 px-1 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">En</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';

const route = useRoute()
const router = useRouter()

// Use watchEffect to track changes in route.query
watchEffect(() => {
  if (route.query.lang) {
    locale.value = route.query.lang;
  }
});

const { locale } = useI18n();
const { t } = useI18n();
// Function to switch languages
const switchLanguage = (lang) => {
  router.push({ query: { lang } });
  locale.value = lang;
};

const navTabs = computed(() => [
  {
    name: t('nav.home'),
    path: '/'
  },
  {
    name: t('nav.products'),
    path: t('nav.products').replace(" ", "-").toLowerCase()
  },
  {
    name: t('nav.gallery'),
    path: t('nav.gallery').replace(" ", "-").toLowerCase()
  },
  {
    name: t('nav.about'),
    path: t('nav.about').replace(" ", "-").toLowerCase()
  },
  {
    name: t('nav.contact'),
    path: t('nav.contact').replace(" ", "-").toLowerCase()
  }
]);

const socIcons = computed(() => [
  {
    name: t('nav.fb'),
    path: 'https://www.facebook.com/panicplast/',
    target: '_blank',
    class: 'pi pi-facebook'
  },
  {
    name: t('nav.ig'),
    path: 'https://www.instagram.com/panicplast/',
    target: '_blank',
    class: 'pi pi-instagram'
  },
  {
    name: t('nav.email'),
    path: 'mailto:panicplast@gmail.com',
    target: '_self',
    class: 'pi pi-envelope'
  },
  {
    name: t('nav.phone'),
    path: 'tel:+381654441560',
    target: '_self',
    class: 'pi pi-phone'
  },
]);

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