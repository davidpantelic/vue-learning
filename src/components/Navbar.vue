<template>
  <nav class="bg-white border-gray-300 fixed w-full border-b-2 flex justify-between py-3 px-10">
    <h1><a href="/">Thrift Shop</a> {{ msg }}</h1>
    <ul class="flex gap-5 uppercase">
      <i class="pi pi-search"></i>
      <span class="pi pi-user"></span>
      <li v-for="tab in navTabs" :key="tab.name" class="hover:text-red-500 transition-all"><a :href="tab.path">{{ tab.name }}</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  msg: {
    type: String,
    default: 'Hello'
  }
})

const navTabs = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Shop',
    path: '/shop'
  },
  {
    name: 'Sign in',
    path: '/sign-in'
  }
];
</script>